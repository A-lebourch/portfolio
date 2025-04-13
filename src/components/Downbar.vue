<template lang="pug">
div(class="downbar-style")
  div(v-for="page in items" :key="page.path" class="menu-style")
    router-link(:to="page.path")
      h1(:class="page.icon" :style="this.$route['path']==page.path ? 'color: var(--link-color)':'color: var(--button-color)'")

  //- div(class="slot-tyle")
    slot
</template>

<script>
export default {
  name: "Downbar",
  props: {
    items: { type: Array, required: true },
  },
  data() {
    return {};
  },
};
</script>


<style>
.downbar-style {
  background-color: var(--gray);
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem ;
}

.slot-style {
  margin-top: auto;
  width: 100%;
  height: 90%;
  text-align: center;
  display: flex;
  flex-direction: row;
}

.menu-style {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
