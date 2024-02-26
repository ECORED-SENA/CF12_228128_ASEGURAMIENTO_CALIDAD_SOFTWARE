<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desarrollo guiado por pruebas
    
    .row 
      .col-lg-8
        .color-fondo-3.p-4.borde-10.mb-4
          p.mb-0 Una vez seleccionadas las herramientas de pruebas, es posible optar por realizar pruebas unitarias mediante la técnica de Desarrollo Dirigido por Pruebas (TDD). Es importante señalar que este enfoque es relativamente reciente en el proceso de desarrollo, empezando a consolidarse y a ser reconocido globalmente en el ámbito del desarrollo de #[em software] por organizaciones, basándose en evidencia anecdótica y diversas evaluaciones empíricas. A diferencia del enfoque tradicional, donde las pruebas se emplean para validar y verificar la calidad del #[em software] después de desarrollar la funcionalidad, TDD utiliza las pruebas tanto para la validación y verificación como para la especificación, desarrollando primero la prueba y luego la funcionalidad. (Catalán, 2017).
        p.mb-0 En el enfoque TDD, las pruebas no solo sirven para la validación y verificación, sino también como especificación. Primero se desarrolla la prueba y luego la funcionalidad. Este proceso contribuye a mejorar la calidad del #[em software] y la productividad del desarrollador, ya que se optimiza el esfuerzo en depuración y se facilita un avance más ágil en el desarrollo del producto de #[em software]. A continuación, se presentan los beneficios: 
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 400px;")

</template>

<script>
export default {
  name: 'Tema3',
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
