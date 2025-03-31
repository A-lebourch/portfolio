<template lang="pug">
  div(:class="expanded ? 'sidebar-open':'sidebar-closed'")
    div(class="container")
      img(src="../assets/Logo_ALB.png" alt="Logo_ALB.png" class="image")
    button(@click="expanded=!expanded") test
    div(v-if="expanded")
      div(v-for="page in items" :key="page.path")
        router-link(:to="page['path']")
          //- button(class="button" :style="this.$route.path == page['path'] ? 'background-color: var(--link-color)' : ''") 
          div(class="item_container")
            h1(:class="page['icon']")
            h3 {{ page['name'] }}
    div(v-else)
      div(v-for="page in items" :key="page.path" class="sidebar-item")
        router-link(:to="page['path']")
          div(class="item_container")
            h1(:class="page['icon']")
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
    return {
      expanded:false, 
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.item_container{
  display: flex;
  flex-direction: row;
  overflow: visible;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  position: sticky;
  top: 0px;
  left: 0px;
  width: 5rem;
  height: auto;
}

.sidebar-open {
  display: flex;
  flex-direction: column;
  background-color: var(--gray);
  width: 12rem;
  height: 90vh;
  padding: 1rem;
  margin-top: 2.5vh;
  margin-left: 1.5rem;
  transition: 0.5s;
  border-radius: 1rem;
}

.sidebar-closed {
  display: flex;
  flex-direction: column;
  background-color: var(--gray);
  width: 5rem;
  height: 90vh;
  padding: 1rem;
  margin-top: 2.5vh;
  margin-left: 1.5rem;
  transition: 0.5s;
  border-radius: 1rem;
}

.button {
  width: 100%;
  text-align: left;
}

button:hover {
  background-color: var(--link-color);
}
</style>
