<template lang="pug">
  div(class="container_style")
    ProjectSlide(titre="TurtleBot" year="2024" comment="python ROS2 based project, using a turtlebot3 we had to recreate a robocup challenge")
      p we did a lot of stuff
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
    ProjectSlide(titre="Tiago" year="2024" comment="python ROS2 based project, using a turtlebot3 we had to recreate a robocup challenge")
      p we did a lot of stuff
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
    ProjectSlide(titre="Dashboard" year="2024" comment="python ROS2 based project, using a turtlebot3 we had to recreate a robocup challenge")
      p we did a lot of stuff
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
      p Lorem ipsum
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
}
</style>