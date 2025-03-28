<template lang="pug">
  div(class="sidebar")
    div(v-for="page in items" :key="page.path" class="sidebar-item")
      router-link(:to="page['path']")
        button {{ page['component'] }}
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
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #cccccc;
  width: 10rem;
  height: 100vh; /* Prend toute la hauteur de l'écran */
  padding: 1rem; /* Espace interne */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Ombre pour un effet de profondeur */
}

.sidebar-item {
  margin: 10px 0; /* Espacement entre les éléments */
}

button {
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
