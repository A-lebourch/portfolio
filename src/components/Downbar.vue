<template lang="pug">
  div(class="downbar-container")
    div(class="downbar-style")
      //- img(src="../assets/Logo_ALB.png" alt="Logo_ALB.png" class="logo")

      div(v-for="page in items" :key="page.path" class="menu-style")
        router-link(:to="page.path")
          h1(v-if="page.path != '/'" :class="page.icon" 
            :style="this.$route['path'].includes(page.path) ? 'color: var(--accent-color)' : 'color: var(--button-color)'")
          h1(v-if="page.path == '/'" :class="page.icon" 
            :style="this.$route['path'] == page.path ? 'color: var(--accent-color)' : 'color: var(--button-color)'")
      slot
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
  width: 30%;
  display: flex;
  place-self: center;
  padding: 0.5rem;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .downbar-container {
    width: 75%;
  }
}

.downbar-style {
  background-color: var(--gray-outline);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2rem;
  height: 5rem; 
}

.menu-style {
  display: flex;
  width: 100%;
  justify-content: center;
}

.logo {
  margin-left: 1rem;
  width: 3rem;
  height: auto;
}
</style>
