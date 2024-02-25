<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de pruebas de #[em software] de GUI
    
    p.mb-5 En este apartado, se identifican las herramientas de prueba de GUI (#[em Graphical User Interface]), que en español se traduce como interfaz gráfica de usuario, las cuales ayudan en las pruebas automatizadas de #[em software] y aplicaciones que contienen interfaces gráficas de usuario. Estas herramientas de #[em software] emplean casos de prueba incluidos en el plan de pruebas para garantizar que la aplicación cumpla con sus especificaciones y ejecute las funciones previstas.

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.color-fondo-2.p-4
      figure.mb-4.mb-lg-0.position-relative(style="z-index: 1;")
        img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 295px;")
      .p-4.cont_1_1
        p.mb-0 Las herramientas de prueba de GUI verifican la funcionalidad y evalúan otros elementos de diseño, como el tamaño de fuente, botones, cuadros de prueba, cuadros de diálogo, formato de texto, barras de menú, barras de herramientas, contenido de enlaces, listas, imágenes, íconos, diseño, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
