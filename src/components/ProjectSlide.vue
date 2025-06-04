<template lang="pug">
  div(class="Slide")
    div(class="info_container")
      button(@click="goToProject" class="fa-solid fa-arrow-right")
      h1 {{ titre }}
      h2 {{ year }}
    h3 {{ comment }}
</template>

<script>
export default {
  name: "ProjectSlide",
  props: {
    titre: { type: String, required: true },
    year: { type: String, required: true },
    comment: { type: String, required: false },
    route: { type: String, required: true },
  },
  methods: {
    goToProject() {
      this.$router.push(this.route);
    },
  },
};
</script>

<style>
.info_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2.5rem;
  align-items: center;
}

.Slide {
  outline: 2px solid var(--gray-outline);
  border-radius: 5px;
  padding: 0.5rem;
  height: 10rem;
  width: 45%;
  background-color: var(--gray-outline);
}

@media (max-width: 600px) {
  .Slide {
    height: auto;
    padding: 0.5rem;
  }
}
</style>
