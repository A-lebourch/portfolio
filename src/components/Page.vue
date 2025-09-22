<template lang="pug">
  div(class="page_style")
    h1(style="display: flex; flex-direction: row; align-items: center;") {{ titre }}
      div(style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; width: 100%; gap: 1rem;")
        p CV
        a(href="CV_Alexandre-Le-Bourch.pdf" download)
          button.download-contact(type="button")
            i(class="fa-regular fa-file-pdf")

        p Contact
        a(href="contact.vcf" download)
          button.download-contact(type="button")
            i(class="fa-regular fa-address-card")
    div(class="scroll-container")
      div(class="scroll-shadow scroll-shadow-top" ref="topShadow")
      div(class="scroll" ref="scrollContainer")
        slot
      div(class="scroll-shadow scroll-shadow-bottom" ref="bottomShadow")
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
  computed(){
  },
  mounted(){
    this.setupScrollShadows();
  },
  updated() {
    // Mettre à jour les ombres après chaque mise à jour du DOM
    this.$nextTick(() => {
      this.updateShadowsState();
    });
  },
  methods: {
    updateShadowsState() {
      const scrollElement = this.$refs.scrollContainer;
      const topShadow = this.$refs.topShadow;
      const bottomShadow = this.$refs.bottomShadow;
      
      if (!scrollElement || !topShadow || !bottomShadow) return;
      
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      
      // Vérifier si le contenu est scrollable
      const isScrollable = scrollHeight > clientHeight;
      
      if (!isScrollable) {
        // Pas de scroll possible, cacher toutes les ombres
        topShadow.style.opacity = '0';
        bottomShadow.style.opacity = '0';
        return;
      }
      
      // Ombre du haut visible quand on n'est pas en haut
      if (scrollTop > 0) {
        topShadow.style.opacity = '1';
      } else {
        topShadow.style.opacity = '0';
      }
      
      // Ombre du bas visible quand on n'est pas en bas
      if (scrollTop < scrollHeight - clientHeight) {
        bottomShadow.style.opacity = '1';
      } else {
        bottomShadow.style.opacity = '0';
      }
    },
    setupScrollShadows() {
      const scrollElement = this.$refs.scrollContainer;
      
      if (!scrollElement) return;
      
      scrollElement.addEventListener('scroll', this.updateShadowsState);
      
      // Observer les changements de taille du contenu
      const resizeObserver = new ResizeObserver(() => {
        this.$nextTick(() => {
          this.updateShadowsState();
        });
      });
      resizeObserver.observe(scrollElement);
      
      // Initialisation avec plusieurs tentatives pour s'assurer que le contenu est chargé
      const initShadows = () => {
        this.$nextTick(() => {
          this.updateShadowsState();
          
          // Vérifier à nouveau après un court délai
          setTimeout(() => {
            this.updateShadowsState();
          }, 50);
          
          // Et une dernière fois après un délai plus long
          setTimeout(() => {
            this.updateShadowsState();
          }, 200);
        });
      };
      
      initShadows();
      
      // Observer aussi les changements dans le slot
      const mutationObserver = new MutationObserver(() => {
        this.$nextTick(() => {
          this.updateShadowsState();
        });
      });
      
      mutationObserver.observe(scrollElement, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }
  },
};
</script>

<style>
.page_style {
  padding-left: 2.5%;
  padding-right: 2.5%;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
}

.scroll-container {
  flex: 1 1 auto;
  position: relative;
  overflow: hidden;
}

.scroll {
  overflow-y: auto;
  height: 100%;
  position: relative;
}

.scroll-shadow {
  position: absolute;
  left: 0;
  right: 0;
  height: 10px;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.3s ease;
}

.scroll-shadow-top {
  top: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent);
  opacity: 0;
}

.scroll-shadow-bottom {
  bottom: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
  opacity: 1;
}

.scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
