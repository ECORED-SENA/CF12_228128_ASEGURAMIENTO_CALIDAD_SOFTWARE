<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas de pruebas de #[em software] por código

    p.mb-4 Una vez estudiados y comprendidos los fundamentos de la calidad del software como elementos clave para elaborar un plan de pruebas, es posible seleccionar las herramientas de pruebas de software necesarias para realizar una prueba de automatización, las cuales se describirán en este apartado.

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.color-fondo-2.p-4
      figure.mb-4.mb-lg-0.position-relative(style="z-index: 1;")
        img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 295px;")
      .p-4.cont_1_1
        p.mb-0 Existen varios #[b #[em frameworks]] que tienen integradas herramientas para la realización de pruebas unitarias, las cuales probarán las funciones de las clases y componentes que son utlizados por el producto software. Estos #[em frameworks] proporcionan ayudas para que el código de automatización de prueba sea estable, reutilizable y mantenible (Serna, M. y Serna, A., 2012).

    .fondo-gradiente-1.posicion-1
      .cont-titulo-decorativo.p-2.mt-5.mb-4
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/3.svg")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 Cypress

      .row.mb-4
        .col-lg-2
          figure
            img.mx-auto.mb-4.mb-lg-0(src="@/assets/curso/temas/4.png",style="max-width: 190px;")
        .col-lg-10
          p.mb-0 Es un #[em framework] de automatización de pruebas para JavaScript que facilita el testeo de aplicaciones web. Destaca por la sencillez de su configuración, la velocidad en la ejecución de pruebas y su interfaz gráfica interactiva, que muestra con claridad lo que está sucediendo y lo que se está probando. Esto permite detectar rápidamente cualquier error que surja durante el proceso. Además, es importante mencionar que con Cypress se pueden escribir pruebas de todo tipo, incluyendo unitarias, de integración y #[em end-to-end], sin necesidad de combinar distintos #[em frameworks] de prueba. Esto se debe a que Cypress es compatible con cualquier tipo de #[em framework], lo que facilita enormemente el proceso de prueba.

      .row.align-items-center.mb-5
        .col-lg-4
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 400px;")
        .col-lg-8
          .color-fondo-3.borde-10.p-4
            p.mb-0 Este #[em framework] de automatización de pruebas se enfoca en el desarrollador y se centra en permitir que el desarrollo basado en pruebas (TDD) sea una práctica simple y agradable. Cypress se ejecuta dentro del navegador de forma remota, a diferencia de otros #[em framework] de pruebas que se ejecutan fuera de él, considerando que tiene una arquitectura diferente y brindando resultados más consistentes.  Por lo tanto, se hace una invitación a conocer el videotutorial de la instalación de la herramienta Cypress en el sistema operativo Windows 10 a 64 bits

      p.mb-5 Para afianzar sus conocimientos y realizar los pasos de instalación de la herramienta Cypress, se le invita a descargar el siguiente archivo PDF:

      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/6.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Guía para instalar Cypress
                p.mb-0.text-small Para una instalación exitosa de Cypress, le invitamos a revisar detenidamente la guía que se encuentra en el documento anexo.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://docs.google.com/document/d/1wD3oByzOhsH4c0oWnUb4DWNBc0hmCOhrMDWG0-nCtyo/edit?usp=sharing" target="_blank")
                  span(style="color: #12263F") Descargar
                  i.fas.fa-file-download(style="color: #12263F")
      
    p.mb-4 Para utilizar este #[em framework], se deben tener en cuenta las características del entorno donde será instalado y ejecutado; por lo tanto, a continuación, se mencionan los elementos requeridos:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Requerimientos Cypress
        .tabla-a.color-thead-tabla-1
          table
            thead
              tr
                th Requisitos
                th Descripción
            tbody
              tr
                td.text-center #[b #[em Hardware]]
                td Portátil o computador de escritorio (Procesador 2.4GHz, 4GB RAM, 320 GB HD).
              tr
                td.text-center #[b Navegadores]
                td Internet Explorer 7.0.6001.1800, Mozilla Firefox 3.0.6, Opera 9.63, Safari 3.2.1, Google Chrome.
              tr
                td.text-center #[b Editor de código]
                td Visual Studio Code.

    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/3.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Serenity BDD

    .row.mb-5
      .col-lg-2
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 190px;")
      .col-lg-10
        p.mb-0 Es un #[em framework] de automatización de casos de prueba de código abierto basado en #[b Java], que se integra con herramientas de desarrollo como JBehave y Cucumber, diseñado para facilitar la creación de pruebas de regresión y pruebas automáticas de aceptación. Ofrece una amplia gama de funcionalidades, incluyendo la ejecución de pruebas en paralelo, la captura de pantallas y la gestión de #[em WebDriver], todo ello sin necesidad de escribir código adicional. Recientemente, #[em Serenity] ha ampliado sus capacidades integrándose con #[em REST Assured], una biblioteca de Java para el testeo de API de código abierto, enriqueciendo así su oferta para los desarrolladores y #[em QA testers] que buscan eficiencia y efectividad en la automatización de pruebas.
    
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1.] #[em Framework] Serenity BDD

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
