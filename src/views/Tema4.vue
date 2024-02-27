<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Calidad del código fuente
    
    .row
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 400px;")
      .col-lg-8
        p.mb-5 Este aspecto es crucial para analizar, dado que la calidad del código fuente y las métricas relevantes facilitan la identificación de errores y su posterior refactorización. Por lo tanto, el análisis de código constituye una etapa esencial del ciclo de desarrollo de #[em software], que implica la revisión del código fuente para detectar errores en una etapa temprana (Dapozo et al., s.f.).

        .color-fondo-3.p-4.figura-decorativa.borde-10
          figure.fig-dec(style="top: 20px;")
            img.mx-auto(src="@/assets/curso/temas/12.svg")
          p.mb-0 Se suele establecer un proceso de verificación de código antes de integrarlo al código base. Por ello, el código fuente debe ser redactado de manera que cumpla con sus funciones de forma eficaz y que, adicionalmente, sea sencillo de entender y modificar por otros desarrolladores.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Métricas de indicadores
    
    .row.mb-4
      .col-lg-9
        p.mb-0 En el ciclo de vida del desarrollo de #[em software], la construcción del código fuente representa un proceso fundamental, basado en un diseño arquitectónico detallado que incorpora estilos arquitectónicos, patrones y estándares de codificación. Estos elementos garantizan la mantenibilidad del código, la capacidad para desarrollar nuevas funcionalidades y la facilidad para identificar y corregir errores. Este proceso se sustenta en la aplicación de diversas métricas, las cuales se detallarán a continuación:
      
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 295px;")

    .fondo-gradiente-2.py-5
      .cont_4_1.p-3
        figure.fig-flotante(style="left: 0;top: -140px;max-width:118px;")
          img(src="@/assets/curso/temas/31.svg",style="max-width:118px;")
        figure.d-none.d-lg-block.fig-flotante(style="z-index: 1;right: 10px;top: 10px;max-width:50px;")
          img(src="@/assets/curso/temas/30.svg",style="max-width:50px;")
        figure.fig-flotante(style="right: -70px;top: -115px;max-width:173px;")
          img(src="@/assets/curso/temas/29.svg",style="max-width:173px;")
        figure.fig-flotante(style="left: 35%;bottom: -160px;max-width:227px;")
          img(src="@/assets/curso/temas/28.svg",style="max-width:227px;")

        SlyderA(tipo="b",clases="eded")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Comentarios en el código

                  p.mb-4 Está relacionado con la utilización excesiva de comentarios de código. Antiguamente, se generaban gran cantidad de comentarios, pero ahora se considera realizar buenas prácticas de nomenclatura para explicar secciones lógicas complicadas.

                  p.mb-0 #[b Cómo usarlo:] los comentarios deben ser claros y concisos


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/49.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Líneas de código

                  p.mb-4 Hace referencia a métodos, clases, módulos y bloques muy extensos; esto indica que una parte del código contiene muchos comportamientos y responsabilidades.

                  p.mb-0 #[b Cómo usarlo:] se deben encontrar métodos y clases muy extensos; si esos bloques tienden a confundir, se puede colocar en contacto con un desarrollador y, después, se crean y ejecutan sesiones de prueba.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/50.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Acoplamiento

                  p.mb-0 Los componentes con varios acoplamientos corren riesgo de dos formas distintas. 
                  p.mb-0 1) Si varios componentes o clases dependen del que se está examinando, hay modificaciones.
                  p.mb-4 2) Si el componente o clase actual depende de varios componentes, puede causar problemas y afectar el actual
                  p.mb-0 #[b Cómo usarlo:] se debe encontrar, en cualquier dirección, un acoplamiento alto y establecer cambios notables en los componentes externos y observar cómo responde el componente actual.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/51.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Rotación

                  p.mb-4 Es la cantidad de ediciones en un archivo de código, que generalmente se calcula por la cantidad de confirmaciones al control de código fuente.
                  p.mb-0 #[b Cómo usarlo:] se debe encontrar una alta rotación en algún área; posteriormente, realizar un análisis detallado sobre estos módulos, clases, y paquetes.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/52.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Complejidad

                  p.mb-4 Mide la complejidad estructural del código. Se crea al calcular el número de caminos de código diferentes dentro del flujo del programa. Cuantos más caminos, más complicado es mantener y aprobar el código.
                  p.mb-0 #[b Cómo usarlo:] emplear un tiempo y sobreponer las métricas de rotación con las áreas que tienen más complejidad.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/53.png',style="max-width: 570px;")

    Separador 

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Caso de prueba herramienta SonarQube
    
    .row 
      .col-md-3.col-lg-2
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 190px;")
      .col-md-9.col-lg-10
        p.mb-4 SonarQube es una plataforma de código abierto destinada a la gestión de calidad de código, que utiliza herramientas de análisis estático de código fuente, como #[em Checkstyle, PMD o FindBugs], para generar métricas que contribuyen a mejorar la calidad del código de una aplicación.
        p.mb-0 El objetivo de presentar esta herramienta de revisión automática de código es identificar #[em bugs], vulnerabilidades y #[em "code smells"] en el código. Además, es compatible con varios lenguajes de programación. A continuación, se enumeran algunas de las herramientas empleadas en la gestión del código:

    .triangulo

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
