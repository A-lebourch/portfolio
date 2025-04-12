<template lang="pug">
  div(v-if="!isMobile" style="display:flex; flex-direction:row;height: 98vh;")
    Sidebar(:items="menu")
      a(href="https://www.linkedin.com/in/alexandre-le-bourch-945763203/" target="_blank")
        h1(class="fa-brands fa-linkedin-in")
      a(href="https://github.com/A-lebourch/portfolio" target="_blank")
        h1(class="fa-brands fa-github")

    Page(titre="Alexandre Le Bourch")
      router-view
  
  div(v-else style="display:flex; flex-direction:column;height: 90vh;")
    Page(titre="Alexandre Le Bourch")
      router-view

    Downbar(:items="menu")
      a(href="https://www.linkedin.com/in/alexandre-le-bourch-945763203/" target="_blank")
        h1(class="fa-brands fa-linkedin-in")
      a(href="https://github.com/A-lebourch/portfolio" target="_blank")
        h1(class="fa-brands fa-github")

</template>

<script>
import Page from "./components/Page.vue";
import Sidebar from "./components/Sidebar.vue";
import Downbar from "./components/Downbar.vue";
export default {
  name: "App",
  components: {
    Page,
    Sidebar,
    Downbar,
  },
  data() {
    return {
      menu:[
            { path: '/portfolio', name: 'Home', icon:'fa-solid fa-house'},
            { path: '/portfolio/about', name: 'Présentation', icon:'fa-solid fa-user'},
            { path: '/portfolio/projects', name: 'Mes projets', icon:'fa-solid fa-diagram-project'}
          ],
          isMobile: false,
    };
  },
  created() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
  computed: {},
  mounted(){},
  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>

<style>
</style>