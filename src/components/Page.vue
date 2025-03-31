<template lang="pug">
  div(class="page_style")
    h1() {{ titre }}
    div(class="scroll")
      slot
</template>

<script>
export default {
  name: "Page",
  props: {
    titre: { type: String, required: false },
  },
  data() {
    return {};
  },
  computed: {},
  mounted(){},
  methods: {},
};
</script> 

<style>
.page_style{
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.scroll{
  overflow: auto;
}
</style>