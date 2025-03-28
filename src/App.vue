<template lang="pug">
  div(style="display:flex; flex-direction:row;height: 98vh;")
    Sidebar(:items="menu")
    Page(titre="Alexandre Le Bourch portfolio")
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
            { path: '/portfolio', component: 'HomeView' },
            { path: '/portfolio/about', component: 'AboutView' },
            { path: '/portfolio/test', component: 'TestView' }
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