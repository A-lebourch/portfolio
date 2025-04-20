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

div(class="contact-form")
  h2 contact

  form(@submit.prevent="sendEmail" ref="form")
    div
      label(for="name") Nom
      input(type="text" id="name" name="name" v-model="name" required)

    div
      label(for="email") Email
      input(type="email" id="email" name="email" v-model="email" required)

    div
      label(for="message") Message
      textarea(id="message" name="message" v-model="message" required)

    button(type="submit") Envoyer

  p(v-if="status === 'sent'") ✅ Message envoyé avec succès !
  p(v-if="status === 'error'") ❌ Une erreur est survenue. Réessaie plus tard.
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
.contact-form {
max-width: 33%;
margin: auto;
padding: 1rem;
background-color: var(--gray);
border-radius: 12px;
display: flex;
flex-direction: column;
gap: 1rem;
}

.contact-form input,
.contact-form textarea {
width: 90%;
padding: 0.7rem;
border-radius: 5px;
font-size: 1rem;
}

.contact-form button {
background-color: #007bff;
color: white;
padding: 0.7rem 1.5rem;
border: none;
border-radius: 5px;
cursor: pointer;
}

.contact-form button:hover {
background-color: #0056b3;
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
