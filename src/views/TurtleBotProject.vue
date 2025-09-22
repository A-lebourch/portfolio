<template lang="pug">
button(@click="this.$router.push('/projects/')") Retour
H2 TurtleBot Project

p Le projet Turtlebot a été réalisé dans le cadre de mes études de robotique à Ynov Bordeaux, nous étions encadrés par Rémi Fabres.
p Le but de ce projet était de reproduire une épreuve de la Robocup, notre objectif était de programmer un robot pour qu'il soit capable de suivre une personne dans un environnement plus ou moins complexe. Après 3 secondes d'immobilité le robot doit revenir a sa position de départ (enregistré au démarrage du robot et non en dur), une fois cette position atteinte le robot doit ensuite aller à une position "garage" (enregistré en dur dans le code). Toute cette navigation est possible grace à l'utilisation d'un LIDAR et d'un algorithme de SLAM, et le module de navigation Nav2.
p Nous avons eu plusieurs sessions pour prendre en main ROS2 ainsi que le robot.
p A la fin de ce challenge nous avons réussi a avoir un programme completement autonome, vous pouvez voir ci-dessous la vidéo de notre robot en action :
p outils utilisés : python, ROS2, Nav2, SLAM, openCV


iframe(
  width="560",
  height="315",
  src="https://www.youtube.com/embed/ZUyD7TLkG9g",
  title="YouTube video player",
  frameborder="0",
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen
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