<template lang="pug">
  div(:class="slide_open ? 'SlideOpen':'SlideClose'" class="scroll-container")
    div(class="info_container")
      button(@click="slide_open = !slide_open" :class="slide_open ? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'")
      h1 {{ titre }}
      h2 {{ year }}
    h3 {{ comment }}
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
    };
  },
};
</script>

<style>
.scroll-container {
  width: 100%;
  height: 200px;
  overflow: auto;
  padding: 1rem; 
  background-color: #ccc;
  color: black;
}

.info_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2.5rem;
  align-items: center;
}

.SlideOpen {
  outline: 5px solid gray;
  border-radius: 5px;
  padding: 0.5rem;
  height: 25rem;
  margin: 0.5rem;
  transition: height 0.3s ease;
}
.SlideClose {
  outline: 5px solid gray;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 10rem;
  transition: height 0.3s ease;
}

@media (max-width: 600px) {
  .scroll-container {
    padding: 0.5rem;
    height: auto;
  }
  .info_container {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .SlideOpen {
    height: auto;
    padding: 0.5rem;
  }
  .SlideClose {
    height: auto;
    padding: 0.5rem;
  }
  /* h1, h2, h3, button {
    font-size: 1rem;
  } */
}
</style>