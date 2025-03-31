<template lang="pug">
  div(:class="slide_open ? 'SlideOpen':'SlideClose'" class="scroll-container")
    div(class="info_container")
      h1 {{ titre }}
      h2 {{ year }}
      button(@click="slide_open = !slide_open") expand
    h3 {{ comment }}
    slot(v-if="slide_open")
</template>

<script>
export default {
  name: "ProjectSlide",
  props: {
    titre: { type: String, required: true },
    year: { type: String, required: true },
    comment: { type: String, required: false },
  },
  data() {
    return {
      slide_open:false,
    };
  },
  computed: {},
  mounted(){},
  methods: {},
};
</script> 

<style>
.scroll-container {
  width: 100%;
  height: 200px;
  overflow: auto;
  padding: 10px;
  background-color: #ccc;
  /* scrollbar-width: none; */
  color: black;
}
.info_container {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 5rem;
  align-items: center;
}
.SlideOpen{
outline: 5px gray solid;
border-radius: 5px;
padding: 5px;
height: 25rem;
}
.SlideClose{
outline: 5px gray solid;
border-radius: 5px;
padding: 5px;
height: 10rem;
}
</style>