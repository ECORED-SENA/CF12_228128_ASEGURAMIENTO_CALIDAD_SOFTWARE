<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desarrollo guiado por pruebas
    
    .row.mb-4
      .col-lg-8
        .color-fondo-3.p-4.borde-10.mb-4
          p.mb-0 Una vez seleccionadas las herramientas de pruebas, es posible optar por realizar pruebas unitarias mediante la técnica de Desarrollo Dirigido por Pruebas (TDD). Es importante señalar que este enfoque es relativamente reciente en el proceso de desarrollo, empezando a consolidarse y a ser reconocido globalmente en el ámbito del desarrollo de #[em software] por organizaciones, basándose en evidencia anecdótica y diversas evaluaciones empíricas. A diferencia del enfoque tradicional, donde las pruebas se emplean para validar y verificar la calidad del #[em software] después de desarrollar la funcionalidad, TDD utiliza las pruebas tanto para la validación y verificación como para la especificación, desarrollando primero la prueba y luego la funcionalidad. (Catalán, 2017).
        p.mb-0 En el enfoque TDD, las pruebas no solo sirven para la validación y verificación, sino también como especificación. Primero se desarrolla la prueba y luego la funcionalidad. Este proceso contribuye a mejorar la calidad del #[em software] y la productividad del desarrollador, ya que se optimiza el esfuerzo en depuración y se facilita un avance más ágil en el desarrollo del producto de #[em software]. A continuación, se presentan los beneficios: 
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 400px;")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/3.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Ciclo del desarrollo guiado por pruebas
    p.mb-4 Ahora que ya conoce los beneficios que implica aplicar TDD, observe el ciclo completo del proceso, revisando cada uno de sus pasos. En la siguiente imagen se puede observar el flujo de manera gráfica:
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 2.] #[em Ciclo TDD]
    .color-fondo-7.borde-10.p-2.p-md-4.pe-lg-5.figura-decorativa.mb-5
      figure.fig-dec(style="max-width: 97px;top: 35px;")
        img.mx-auto(src="@/assets/curso/temas/37.svg")
      figure.fig-dec(style="max-width: 264px;bottom: 0;top: auto;right: auto;left: 10%;")
        img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 264px;")
      figure.d-none.d-lg-block
        img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 1019px;")
      figure.d-lg-none
        img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 295px;")

    p.mb-4 A continuación, se describirán los pasos involucrados en realizar el proceso de TDD.
    .fondo-gradiente-1.posicion-2
      .row.justify-content-center.mb-5
        .col-lg-10.mb-4
          .cont_3_1.color-1.pb-4.figura-decorativa
            figure.fig-dec(style="top: 10%;")
              img.mx-auto(src="@/assets/curso/temas/41.svg")

            h4 1. Escribir la prueba
            .row.align-items-center.ps-3.pe-lg-5.pe-4
              .col-md-2.col-lg-2
                figure.mb-4.mb-md-0
                  img.mx-auto.ms-md-auto(src="@/assets/curso/temas/40.svg",style="max-width: 104px;")
              .col-md-10
                p.mb-0 En primera instancia, se deben crear las pruebas y estas deben atender cada una de las nuevas funcionalidades o características definidas en los requisitos de #[em software]. En este primer paso, es muy importante que el desarrollador comprenda a la perfección la especificación de requisitos, dado que la discrepancia entre lo que entendió y lo que el producto #[em software] requiere impactará la calidad de la prueba y, asimismo, la calidad del producto.
        .col-lg-10.mb-4
          .cont_3_1.color-2.pb-4.figura-decorativa
            figure.fig-dec(style="top: 10%;")
              img.mx-auto(src="@/assets/curso/temas/41.svg")

            h4 2. Ejecución y comprobación de #[em test]
            .row.align-items-center.ps-3.pe-lg-5.pe-4
              .col-md-2.col-lg-2
                figure.mb-4.mb-md-0
                  img.mx-auto.ms-md-auto(src="@/assets/curso/temas/42.svg",style="max-width: 104px;")
              .col-md-10
                p.mb-0 En este paso, se realiza la verificación de que los #[em tests] funcionan correctamente, por lo cual, detectarán errores cuando haya un problema en el código. Uno de los principales aportes de este paso es la confianza que el desarrollador adquiere al momento de desarrollar nuevas pruebas, lo cual se verá reflejado en la calidad del código.
        .col-lg-10.mb-4
          .cont_3_1.color-1.pb-4.figura-decorativa
            figure.fig-dec(style="top: 10%;")
              img.mx-auto(src="@/assets/curso/temas/41.svg")

            h4 3. Escribir el código de la aplicación
            .row.align-items-center.ps-3.pe-lg-5.pe-4
              .col-md-2.col-lg-2
                figure.mb-4.mb-md-0
                  img.mx-auto.ms-md-auto(src="@/assets/curso/temas/43.svg",style="max-width: 104px;")
              .col-md-10
                p.mb-0 En este paso, se procede a escribir el código fuente de la funcionalidad. El objetivo es que la prueba escrita para esta funcionalidad anteriormente pase como exitosa. Es probable que el código no esté perfecto y no cumpla todavía con estándares, pero posteriormente hay un paso que permite realizar este tipo de ajustes, donde ya se tiene una visión más amplia del desarrollo en general y se puede optimizar. 
        .col-lg-10.mb-4
          .cont_3_1.color-2.pb-4.figura-decorativa
            figure.fig-dec(style="top: 10%;")
              img.mx-auto(src="@/assets/curso/temas/41.svg")

            h4 4. Ejecutar los #[em tests]
            .row.align-items-center.ps-3.pe-lg-5.pe-4
              .col-md-2.col-lg-2
                figure.mb-4.mb-md-0
                  img.mx-auto.ms-md-auto(src="@/assets/curso/temas/44.svg",style="max-width: 104px;")
              .col-md-10
                p.mb-0 Dado que ya se tiene implementado el código fuente, se procede a ejecutar las pruebas que fueron implementadas en el primer paso. Si las pruebas pasan exitosamente, se puede confiar en la calidad del código. En el caso de que las pruebas no sean exitosas, es el momento de regresar al código fuente y realizar los ajustes necesarios para que todas las pruebas pasen.
        .col-lg-10.mb-4
          .cont_3_1.color-1.pb-4.figura-decorativa
            figure.fig-dec(style="top: 10%;")
              img.mx-auto(src="@/assets/curso/temas/41.svg")

            h4 5. Refactorizar el código
            .row.align-items-center.ps-3.pe-lg-5.pe-4
              .col-md-2.col-lg-2
                figure.mb-4.mb-md-0
                  img.mx-auto.ms-md-auto(src="@/assets/curso/temas/45.svg",style="max-width: 104px;")
              .col-md-10
                p.mb-0 En este paso, ya se dispone de un código fuente con calidad, dado que se pasaron todas las pruebas y se procederá a realizar un análisis de un mejoramiento en el mismo. En este paso, el objetivo es mejorar la escritura para que se pueda interpretar mejor, estructurar para reducir la cantidad de líneas, optimizar el nombrado de variables, constantes y clases.
        .col-lg-10.mb-0
          .cont_3_1.color-2.pb-4.figura-decorativa
            figure.fig-dec(style="top: 10%;")
              img.mx-auto(src="@/assets/curso/temas/41.svg")

            h4 6. Repetir
            .row.align-items-center.ps-3.pe-lg-5.pe-4
              .col-md-2.col-lg-2
                figure.mb-4.mb-md-0
                  img.mx-auto.ms-md-auto(src="@/assets/curso/temas/46.svg",style="max-width: 104px;")
              .col-md-10
                p.mb-0 Cuando se haya completado el ciclo para una funcionalidad, requisito o historia de usuario, se deberá repetir todo el proceso.

      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/9.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Desarrollo Dirigido por Pruebas (TDD)
                p.mb-0.text-small Lo invitamos a ingresar al video tutorial que contiene el ciclo TDD, así como un ejemplo práctico de este proceso.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YuRdaR6wwWU" target="_blank")
                  span(style="color: #12263F") Ver video
                  i.fas.fa-video(style="color: #12263F")

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
