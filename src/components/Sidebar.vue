<template lang="pug">
  div(class="sidebar")
    div(class="container")
      img(src="../assets/Logo_ALB.png" alt="Logo_ALB.png" class="image")
    div(v-for="page in items" :key="page.path" class="sidebar-item")
      router-link(:to="page['path']")
        button(class="button" :style="this.$route.path == page['path'] ? 'background-color: #3557b3' : ''") 
          h3 {{ page['name'] }}
    div(class="container")
      slot
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    items: { type: Array, required: true },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  width: 75%;
  height: auto;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #cccccc;
  width: 10rem;
  height: 100vh;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-item {
  margin: 10px 0;
}

.button {
  width: 100%;
  padding: 0.5rem;
  background-color: #1a1a1a;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3557b3;
}
</style>
