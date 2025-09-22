<template lang="pug">
  div(style="display: grid; grid-template-columns: repeat(9, 1fr); align-items: center; height:100%; width:100%;")
    div(style="grid-column: span 2; display:flex; flex-direction:column; margin-right:2rem; gap:2rem")
      button(@click="this.$router.push('/work_experience')" class="") Experience professionnel
      button(@click="this.$router.push('/projects')" class="") Projet réalisés
      button(@click="this.$router.push('/about')" class="") Mes hobbies
      button(@click="this.$router.push('/in_progress')" class="") A venir

    div(style="grid-column: span 4;")
      p Bienvenue sur mon site !
      p Ce projet a pour but de créer un site web de A à Z, afin de présenter les projets réalisés durant mes études et mon temps libre.
      hr
      p Je ne suis pas développeur web de formation, mais je souhaite partager mes réalisations et mes compétences à travers ce site.
      p Merci de votre indulgence si tout n'est pas parfait, j'essaye de faire de mon mieux !
      hr
      p Je suis Alexandre Le Bourch, 22 ans, étudiant en Mastère 2 en Mécatronique et systèmes embarqués a Ynov Bordeaux.
      p J'imagine que si vous êtes sur ce site c'est pour plus en savoir sur moi ?
      p Pour mieux vous aiguiller sur vos recherches je vous invite a choisir une des catégorie a gauche pour en savoir plus
      p Si vous souhaitez en savoir plus sur moi ou que vous voulez convenir d'un rendez-vous, je vous invite à télécharger ma fiche de contacte via le bouton en haut a droite.

    div(style="grid-column: span 3;")
      div(style="height: 70vh; " )
        embed(
          src="/CV_Alexandre-Le-Bourch.pdf#zoom=50",
          type="application/pdf",
          width="100%",
          height="100%"
        )

</template>


<script>
export default {
  name: 'about',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.download-contact {
  margin: auto;
  display: flex;
  margin-bottom: 0.5rem ;
  margin-top: 0.5rem ;
}

.contact-form {
  max-width: 33%;
  margin: auto;
  padding: 1rem;
  background-color: var(--gray-outline);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 600px) {
  .contact-form {
    max-width: 75%;
  }
}

.contact-form input,
.contact-form textarea {
  width: 90%;
  padding: 0.7rem;
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--gray-outline);
}

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
