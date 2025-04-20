<template lang="pug">
button(@click="isOpen=!isOpen") {{!isOpen ? 'Agrandir le CV':'Rétrecir le CV'}}
div(class="pdf-container " :class="isOpen?'pdf-container-open':'pdf-container-closed'")
  embed(
    v-show="isOpen"
    src="/portfolio/CV_Alexandre-Le-Bourch.pdf#zoom=100",
    type="application/pdf",
    width="100%",
    height="100%"
  )
  embed(
    v-show="!isOpen"
    src="/portfolio/CV_Alexandre-Le-Bourch.pdf#zoom=47",
    type="application/pdf",
    width="100%",
    height="100%"
  )

</template>

<script>
export default {
  name: "CvViewer",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.pdf-container {
  height: 78vh;
}

.pdf-container-closed {
  width: 33%;
}

.pdf-container-open {
  width: 100%;
}

</style>
