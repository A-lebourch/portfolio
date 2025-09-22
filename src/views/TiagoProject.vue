<template lang="pug">
button(@click="this.$router.push('/projects/')") Retour
H2 Tiago Project

p Le projet Tiago a été réalisé dans le cadre de mes études de robotique à Ynov Bordeaux, nous étions encadrés par Yohan Mollard.
p Le but de ce projet était de créer une solution robotique en utilisant un robot programmable via ROS, nous avions pour contrainte d'utiliser des technologies vu en cours.
p J'ai donc décidé de programmer un robot Tiago (base roulante avec camera, LIDAR etc) pour détecter un code Arcuo, ensuite le robot doit se déplacer de sorte à être face au code Aruco. Pour que le robot soit capable de se localiser dans son environnement j'ai utiliser un algorithme de SLAM et le module de navigation Nav2.
p outils utilisés : python, ROS2, Nav2, SLAM, openCV


iframe(
  src="https://www.canva.com/design/DAGiQsc9rXo/HtMhmryspJ2yFNBUsWaw3Q/view?embed",
  width="800",
  height="450",
  frameborder="0",
  allowfullscreen,
  allow="fullscreen"
)

</template>

<script>
export default {
  name: "Template",
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted(){},
  methods: {},
};
</script> 

<style>
</style>