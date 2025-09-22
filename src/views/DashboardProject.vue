<template lang="pug">
button(@click="this.$router.push('/projects/')") Retour
H2 Dashboard Project
H3 Projet en cours de développement

p Ce projet n'est à l'heure actuel qu'une vision de ce que je souhaite réaliser. Au moment d'écriture de ce post je suis trop occupé par mon projet de fin d'études pour me concentré sur un autre gros projet.
p Ce projet viens d'une idée pour recycler un écran de pc et une raspberry dont je ne me servais pas. Le but est de réaliser un tableau de bord pour la maison, il s'agit de quelque chose que j'ai déjà eu l'occasion de tester, Dackboard à un OS linux qui permet de faire cela.
p Dans mon cas je ne cherche pas a faire un OS mais plutôt un projet python avec interface web, le but est de pouvoir réaliser un projet complet qui aura une valeur dans ma vie de tous les jours. L'objectif de ce projet est d'afficher des information utiles et importantes sur un écran, le tout de manière discrète et sans que cela soit trop gênant dans l'environnement dans lequel il est placé.
p Pour l'instant les informations que je souhaite pouvoir afficher sont les suivantes :
p * les titres des information d'une chaine (via canal RSS)
p * un calendrier partagé
p * l'heure
p * la météo
p Et j'ai d'autres idées comme une intégration de post-it pour laisser des notes, ou encore spotify pour y jouer de la musique ...
p Cela montre que le projet doit être cadré correctement, c'est pour cette raison que j'attend la fin de mes études pour le commencer, je pourrais ainsi y consacrer mon temps et mon energie.
p Cela ne m'a pas empêché de commencer a réfléchir à la structure du projet.
p Avec mon experience je pense être capable de réaliser une interface Web avec un backend python, le tout dans un conteneur (par exemple docker) pour s'assurer de la redondance. Avec mes connaissances je serais plus enclin a utiliser le framework vuejs pour le frontend, ce n'est peut-être pas le choix le plus judicieux cependant c'est le langage que je connais le mieux pour faire cela. Et dans l'éventualité ou cela ne fonctionnerais pas, le projet en sera d'autant plus instructeur. Car pour rappel, ce projet n'a pas pour but de créer un produit destiné à la vente, mais il s'agit plutôt d'un laboratoire pour moi afin de tester des technologie que je n'ai eu que peu de temps pour tester.


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