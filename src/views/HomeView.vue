<template lang="pug">
  div.home-content
    h2 Bienvenue sur mon site !
    p
      | Je m'appelle Alexandre, j'ai 22 ans et je suis étudiant en M2 Systèmes embarqués à Ynov Bordeaux.
      br
      | Ce projet a pour but de créer un site web de A à Z, afin de présenter les projets réalisés durant mes études et mon temps libre.
    p
      | Je ne suis pas développeur web de formation, mais je souhaite partager mes réalisations et mes compétences à travers ce site.
      br
      | Merci de votre indulgence si tout n'est pas parfait, j'essaye de faire de mon mieux !
    p
      | Pour toute question ou suggestion, n'hésitez pas à me contacter.
      br
      | Vous pouvez m'envoyer un mail via le formulaire en bas de page ou télécharger ma carte de visite en cliquant sur le bouton ci-dessous.
    p
      | Bonne visite sur mon site !
      br
      | Suivez-moi sur les réseaux sociaux pour rester informé des mises à jour, ou sur GitHub pour consulter le code source.
    hr
    h1 Développement en cours !
    p
      | Ce site est en constante évolution, avec de nouvelles fonctionnalités et projets ajoutés régulièrement.
      br
      | N'hésitez pas à revenir souvent pour découvrir les dernières nouveautés !
    
    a(href="contact.vcf" download class="download-contact")
      button.download-contact Télécharger mon contact

    //- div(class="contact-form")
    //-   h2 Contactez moi !

    //-   form(@submit.prevent="sendEmail" ref="form")
    //-     div
    //-       p(for="name") Nom Prenom
    //-       input(type="text" id="name" name="name" v-model="name" required)

    //-     div
    //-       p(for="email") Email
    //-       input(type="email" id="email" name="email" v-model="email" required)

    //-     div
    //-       p(for="message") Message
    //-       textarea(id="message" name="message" v-model="message" required)
    //-     div(style="display: flex; justify-content: center; margin-top: 1rem;")
    //-       button(type="submit") Envoyer

    //-   p(v-if="status === 'sent'") ✅ Message envoyé avec succès !
    //-   p(v-if="status === 'error'") ❌ Une erreur est survenue. Réessaie plus tard.
</template>


<script>
import emailjs from 'emailjs-com';

export default {
  name: 'about',
  data() {
    return {
      isOpen: false,
      name: '',
      email: '',
      message: '',
      status: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          this.$refs.form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          this.status = 'sent';
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch((error) => {
          console.error(error);
          this.status = 'error';
        });
    },
  },
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
