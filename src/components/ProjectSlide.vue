<template lang="pug">
  div(:class="slide_open ? 'SlideOpen' : 'SlideClose'" class="scroll-container")
    div(class="info_container")
      button(@click="slide_open = !slide_open" :class="slide_open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'")
      h1 {{ titre }}
      h2 {{ year }}
    h3(v-if="!isMobile || slide_open") {{ comment }}
    slot(v-if="slide_open")
</template>

<script>
export default {
  name: "ProjectSlide",
  props: {
    titre: { type: String, required: true },
    year: { type: String, required: true },
    comment: { type: String, required: false },
  },
  data() {
    return {
      slide_open: false,
      isMobile: false,
    };
  },
  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia("(max-width: 600px)").matches;
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
};
</script>

<style>
.scroll-container {
  height: 200px;
  overflow: hidden;
  padding: 1rem; 
  background-color: var(--gray-outline);
  color: var(--text-color);
}

.info_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2.5rem;
  align-items: center;
}

.SlideOpen {
  outline: 2px solid var(--gray-outline);
  border-radius: 5px;
  padding: 0.5rem;
  height: 25rem;
  margin: 0.5rem;
  transition: height 0.3s ease;
}
.SlideClose {
  outline: 2px solid var(--gray-outline);
  border-radius: 5px;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 10rem;
  transition: height 0.3s ease;
}

@media (max-width: 600px) {
  .SlideOpen {
    height: auto;
    padding: 0.5rem;
  }
  .SlideClose {
    height: auto;
    padding: 0.5rem;
  }
}
</style>
