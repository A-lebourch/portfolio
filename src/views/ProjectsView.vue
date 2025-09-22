<template lang="pug">
  div(class="container_style")
    ProjectSlide(
      titre="Ornithoptère"
      year="2024-2025"
      comment="à remplir"
      route="/projects/ornithoptere"
      :skills=['Vue.js', 'JavaScript', 'CSS']
    )
    ProjectSlide(
      titre="Portfolio"
      year="2025"
      comment="à remplir"
      route="/projects/portfolio"
    )
    ProjectSlide(
      titre="Tiago"
      year="2025"
      comment="à remplir"
      route="/projects/tiago"
    )
    ProjectSlide(
      titre="TurtleBot"
      year="2024"
      comment="à remplir"
      route="/projects/turtlebot"
    )
    ProjectSlide(
      titre="Dashboard"
      year="2025"
      comment="à remplir"
      route="/projects/dashboard"
    )
</template>

<script>
import Page from "../components/Page.vue";
import ProjectSlide from "../components/ProjectSlide.vue";
export default {
  name: "ProjectsView",
  components: {
    Page,
    ProjectSlide,
  },
  data() {
    return {};
  },
  computed: {},
  mounted(){},
  methods: {},
};
</script>

<style>
.container_style {
  width: 98%;
  min-height: 98%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}
</style>