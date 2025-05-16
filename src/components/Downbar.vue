<template lang="pug">
  div(class="downbar-container")
    div(class="downbar-style")
      div(v-for="page in items" :key="page.path" class="menu-style")
        router-link(:to="page.path")
          h1(:class="page.icon" 
            :style="this.$route['path'] == page.path ? 'color: var(--link-color)' : 'color: var(--button-color)'")
      //- slot
</template>

<script>
export default {
  name: "Downbar",
  props: {
    items: { type: Array, required: true },
  },
};
</script>

<style>
.downbar-container {
  padding: 0.5rem;
  flex-shrink: 0;
}

.downbar-style {
  background-color: var(--gray-outline);
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 2rem;
  height: 5rem; 
}

.menu-style {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
