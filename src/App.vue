<template lang="pug">
  button(class="bg-red h-10 w-10") coucou
  nav
    router-link(to="/") Accueil
    router-link(to="/about") À propos
  router-view
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
