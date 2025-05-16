<template lang="pug">
div(:class="expanded ? 'sidebar sidebar-open' : 'sidebar sidebar-closed'")
  div(class="logo-container")
    img(src="../assets/Logo_ALB.png" alt="Logo_ALB.png" class="logo")

  button(@click="expanded = !expanded" class="toggle-button")
    h1(v-if="!expanded" class="fa-solid fa-chevron-right")
    h1(v-if="expanded" class="fa-solid fa-chevron-left")

  div(class="menu")
    div(v-for="page in items" :key="page.path" class="menu-item")
      router-link(:to="page.path" class="menu-link")
        h1(:class="page.icon" class="menu-icon" :style="this.$route['path']==page.path ? 'color: var(--link-color)':'color: var(--button-color)'")
        span(v-if="expanded" class="menu-text") {{ page.name }}

  div(class="slot")
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
      expanded: false,
    };
  },
};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--gray-outline);
  height: 90vh;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  transition: width 0.3s ease-in-out;
}

.sidebar-open {
  width: 13rem;
}

.sidebar-closed {
  width: 4rem;
}

.logo-container {
  display: flex;
  justify-content: left;
  width: 100%;
  margin-bottom: 1rem;
  margin-left: 0.75rem;
}

.logo {
  width: 3rem;
  height: auto;
}

.toggle-button {
  width: 100%;
  background: transparent;
  border-radius: 0.5rem;
  color: var(--text-color);
}

.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  margin: auto;
  color: var(--text-color);
}

.menu-icon {
  margin-left: 0.25rem;
  text-align: left;
}

.menu-text {
  white-space: nowrap;
  color: var(--text-color);
  font-weight: bold;
  font-size: x-large;
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;
}

.sidebar-open .menu-text {
  opacity: 1;
  width: auto;
  overflow: hidden;
}

.sidebar-closed .menu-text {
  opacity: 0;
  width: 0;
  overflow: hidden;
}

.slot {
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}
</style>
