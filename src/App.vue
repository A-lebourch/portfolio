<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">À propos</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
