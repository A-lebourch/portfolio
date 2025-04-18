<template lang="pug">
  div
    h3 Le but de ce projet est de créer un site de A à Z
    h3 le tout en montrant les projets que j'ai eu l'occasion
    h3 de réaliser durant mes études et dans mon temps perso
    p _________________________________________________________
    H1 Développement en cours !
    a(href="contact.vcf" download)
      button.download-contact Télécharger mon contact

</template>

<style>
.download-contact {
  padding: 0.5rem 1rem;
  background-color: var(--link-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
}
.download-contact:hover {
  background-color: var(--button-color);
}
</style>