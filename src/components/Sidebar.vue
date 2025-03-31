<template lang="pug">
  div(class="sidebar")
    div(class="container")
      img(src="../assets/Logo_ALB.png" alt="Logo_ALB.png" class="image")
    div(v-for="page in items" :key="page.path" class="sidebar-item")
      router-link(:to="page['path']")
        button(class="button" :style="this.$route.path == page['path'] ? 'background-color: var(--link-color)' : ''") 
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
  width: 50%;
  height: auto;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--gray);
  width: 10rem;
  height: 90vh;
  padding: 1rem;
  margin-top: 2.5vh;
  margin-left: 1.5rem;
  border-radius: 1rem;
}

.sidebar-item {
  margin: 10px 0;
}

.button {
  width: 100%;
  text-align: left;
}

button:hover {
  background-color: var(--link-color);
}
</style>
