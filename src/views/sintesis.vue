<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las herramientas de automatización detectan fallas en los productos de #[em software], identifican y resuelven problemas de código, y facilitan el reporte rápido de problemas, permitiendo su corrección temprana. Las pruebas automatizadas aseguran la calidad del producto mediante herramientas que examinan el código y las interfaces gráficas de usuario. Entre estas herramientas, #[b Cypress] y #[b SonarQube] se destacan por la facilidad de configuración, su interfaz gráfica interactiva, la detección de problemas complejos y la capacidad para realizar refactorizaciones. Además, al identificar herramientas de pruebas, es posible optar por pruebas unitarias mediante la técnica de desarrollo dirigido por pruebas (TDD), la cual facilita la verificación de funcionalidades desarrolladas, optimiza y mejora el rendimiento del código. Para una mejor interpretación de estas herramientas de automatización, se recomienda consultar el siguiente mapa conceptual. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
