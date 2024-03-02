<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") En este componente formativo, se estudiarán las diferentes herramientas para la automatización de pruebas de #[em software], por lo cual, en esta sección, se abordarán las siguientes áreas de aprendizaje: descripción de las herramientas de pruebas de software por código y de GUI, TDD y calidad del código fuente.

    .color-fondo-1.borde-10.p-4.mb-4
      .row.align-items-center
        .col-lg-2(data-aos="fade-right")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 168px;")
        .col-lg-10(data-aos="fade-left")
          p.mb-0 En este componente aprenderán sobre la importancia de las pruebas automatizadas, las cuales tienen como objetivo principal detectar fallas en el #[em software] sin la necesidad de intervención manual en cada prueba.  A través de este curso, se explicará se elaboran casos de prueba utilizando herramientas de automatización, lo que permite su ejecución automática y simula la interacción humana con el #[em software], destacando la automatización como una estrategia clave para reducir el esfuerzo humano en tareas repetitivas o complejas y hacer el proceso más efectivo y productivo.
    
    .row
      .col-lg-9(data-aos="fade-right")
        p.mb-4 Además, se abordará la selección de herramientas para pruebas en proyectos de software según el contexto de uso, incluyendo desde opciones multifuncionales hasta herramientas de código abierto o de alto costo.
        p.mb-0 El componente se centra en el análisis de herramientas de automatización de pruebas, tanto para código como para interfaces gráficas, proporcionando una descripción detallada de su desarrollo, conceptos y características, complementado con ejemplos prácticos usando herramientas como Cypress.
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/55.svg",style="max-width: 295px;")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
