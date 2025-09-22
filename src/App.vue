<template lang="pug">  
  div(style="display: flex; flex-direction: column; height: 98vh;")
    Page(titre="Portfolio")
      router-view

    Downbar(:items="menu")
      div(class="socials")
        a(href="https://www.linkedin.com/in/alexandre-le-bourch-945763203/" target="_blank")
          h1(class="fa-brands fa-linkedin-in")
        a(href="https://github.com/A-lebourch/portfolio" target="_blank")
          h1(class="fa-brands fa-github")

</template>

<script>
import Page from "./components/Page.vue";
import Downbar from "./components/Downbar.vue";
export default {
  name: "App",
  components: {
    Page,
    Downbar,
  },
  data() {
    return {
      menu:[
            { path: '/', name: 'Home', icon:'fa-solid fa-house'}
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
      this.isMobile = window.matchMedia("(max-width: 600px)").matches;
    },
  },
};
</script>

<style>
.socials {
  border-style: solid;
  border-color: var(--primary-color);
  border-radius: 2rem;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  margin: 1rem;
  justify-content: space-evenly;
  }
</style>