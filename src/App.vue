<template lang="pug">
  div(style="display:flex; flex-direction:row;height: 98vh;")
    Sidebar(:items="menu")
      a(href="https://www.linkedin.com/in/alexandre-le-bourch-945763203/" target="_blank")
        h1(class="fa-brands fa-linkedin-in")
      a(href="https://github.com/A-lebourch/portfolio" target="_blank")
        h1(class="fa-brands fa-github")

    Page(titre="Alexandre Le Bourch")
      router-view
  
</template>

<script>
import Page from "./components/Page.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Page,
    Sidebar,
  },
  data() {
    return {
      menu:[
            { path: '/portfolio', name: 'Home'},
            { path: '/portfolio/about', name: 'Présentation'},
            { path: '/portfolio/projects', name: 'Mes projets'}
          ]
    };
  },
  computed: {},
  mounted(){},
  methods: {},
};
</script>

<style>
</style>