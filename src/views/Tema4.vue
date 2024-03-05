<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Calidad del código fuente
    
    .row
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 400px;")
      .col-lg-8
        p.mb-5(data-aos="fade-up") Este aspecto es crucial para analizar, dado que la calidad del código fuente y las métricas relevantes facilitan la identificación de errores y su posterior refactorización. Por lo tanto, el análisis de código constituye una etapa esencial del ciclo de desarrollo de #[em software], que implica la revisión del código fuente para detectar errores en una etapa temprana (Dapozo et al., s.f.).

        .color-fondo-3.p-4.figura-decorativa.borde-10(data-aos="fade-down")
          figure.fig-dec(style="top: 20px;")
            img.mx-auto(src="@/assets/curso/temas/12.svg")
          p.mb-0 Se suele establecer un proceso de verificación de código antes de integrarlo al código base. Por ello, el código fuente debe ser redactado de manera que cumpla con sus funciones de forma eficaz y que, adicionalmente, sea sencillo de entender y modificar por otros desarrolladores.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Métricas de indicadores
    
    .row.mb-4
      .col-lg-9(data-aos="fade-right")
        p.mb-0 En el ciclo de vida del desarrollo de #[em software], la construcción del código fuente representa un proceso fundamental, basado en un diseño arquitectónico detallado que incorpora estilos arquitectónicos, patrones y estándares de codificación. Estos elementos garantizan la mantenibilidad del código, la capacidad para desarrollar nuevas funcionalidades y la facilidad para identificar y corregir errores. Este proceso se sustenta en la aplicación de diversas métricas, las cuales se detallarán a continuación:
      
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 295px;")

    .fondo-gradiente-2.py-5
      .cont_4_1.p-3(data-aos="zoom-in-up")
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
                    img.mx-auto.maximo-ancho(src='@/assets/curso/temas/49.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Líneas de código

                  p.mb-4 Hace referencia a métodos, clases, módulos y bloques muy extensos; esto indica que una parte del código contiene muchos comportamientos y responsabilidades.

                  p.mb-0 #[b Cómo usarlo:] se deben encontrar métodos y clases muy extensos; si esos bloques tienden a confundir, se puede colocar en contacto con un desarrollador y, después, se crean y ejecutan sesiones de prueba.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto.maximo-ancho(src='@/assets/curso/temas/50.png',style="max-width: 570px;")
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
                    img.mx-auto.maximo-ancho(src='@/assets/curso/temas/51.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Rotación

                  p.mb-4 Es la cantidad de ediciones en un archivo de código, que generalmente se calcula por la cantidad de confirmaciones al control de código fuente.
                  p.mb-0 #[b Cómo usarlo:] se debe encontrar una alta rotación en algún área; posteriormente, realizar un análisis detallado sobre estos módulos, clases, y paquetes.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto.maximo-ancho(src='@/assets/curso/temas/52.png',style="max-width: 570px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-5.mb-4.mb-md-0
                  h4.mb-4 Complejidad

                  p.mb-4 Mide la complejidad estructural del código. Se crea al calcular el número de caminos de código diferentes dentro del flujo del programa. Cuantos más caminos, más complicado es mantener y aprobar el código.
                  p.mb-0 #[b Cómo usarlo:] emplear un tiempo y sobreponer las métricas de rotación con las áreas que tienen más complejidad.


                .col-lg-7.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto.maximo-ancho(src='@/assets/curso/temas/53.png',style="max-width: 570px;")

    Separador 

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Caso de prueba herramienta SonarQube
    
    .row.mb-5
      .col-md-3.col-lg-2.order-first.order-md-last
        figure.mb-4.mb-lg-0(data-aos="fade")
          img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 190px;")
      .col-md-9.col-lg-10
        p.mb-4(data-aos="fade-up") SonarQube es una plataforma de código abierto destinada a la gestión de calidad de código, que utiliza herramientas de análisis estático de código fuente, como #[em Checkstyle, PMD o FindBugs], para generar métricas que contribuyen a mejorar la calidad del código de una aplicación.
        p.mb-0(data-aos="fade-down") El objetivo de presentar esta herramienta de revisión automática de código es identificar #[em bugs], vulnerabilidades y #[em "code smells"] en el código. Además, es compatible con varios lenguajes de programación. A continuación, se enumeran algunas de las herramientas empleadas en la gestión del código:

    .fondo-gradiente-3.pt-4
      .row.align-items-center.mb-5
        .col-lg-9
          .cont_4_3.figura-decorativa.mb-4(data-aos="fade-up")
            figure.fig-dec(style="top: 20px;")
              img(src="@/assets/curso/temas/41.svg").mx-auto
            .fig-content
              .fig-block
              img(src="@/assets/curso/temas/63.png")
              h4.mb-0.px-1.text-center.cont-titulo-figura Checkstyle:
            .p-3.py-lg-4.pe-lg-5.ps-lg-4.cont_contenido_texto
              p.mb-0 Analiza un código fuente y busca mejorar el estándar de codificación, también verifica el código fuente para las convenciones de codificación, como encabezados, importaciones, espacios en blanco.
          .cont_4_3.figura-decorativa.mb-4(data-aos="fade-left")
            figure.fig-dec(style="top: 20px;")
              img(src="@/assets/curso/temas/41.svg").mx-auto
            .fig-content
              .fig-block
              img(src="@/assets/curso/temas/63.png")
              h4.mb-0.px-1.text-center.cont-titulo-figura PMD:
            .p-3.py-lg-4.pe-lg-5.ps-lg-4.cont_contenido_texto
              p.mb-0 Identifica problemas potenciales, principalmente, códigos muertos, duplicados, complejidad ciclomática y expresiones excesivamente complejas. (De la Roca et al., 2014).
          .cont_4_3.figura-decorativa(data-aos="fade-down")
            figure.fig-dec(style="top: 20px;")
              img(src="@/assets/curso/temas/41.svg").mx-auto
            .fig-content
              .fig-block
              img(src="@/assets/curso/temas/63.png")
              h4.mb-0.px-1.text-center.cont-titulo-figura FindBugs:
            .p-3.py-lg-4.pe-lg-5.ps-lg-4.cont_contenido_texto
              p.mb-0 Analiza el código para encontrar cualquier falla de diseño y posibles errores, identifica mala práctica, código dudoso, corrección multiproceso, rendimiento malicioso, vulnerabilidad de código, seguridad experimental e internacionalización (De la Roca et al., 2014).

        .col-lg-3.d-none.d-lg-block(data-aos="zoom-in-up")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 295px;")



      p.mb-4(data-aos="fade") #[b SonarQube] ofrece una vista instantánea de la calidad del código en un momento específico, así como un historial de la evolución de esta calidad a lo largo del tiempo. Proporciona indicadores cuantitativos tales como la cantidad de código cubierto por las pruebas unitarias, la complejidad ciclomática del código y la duplicación. Esto permite medir la excelencia del proyecto y la calidad de los desarrolladores que lo mantienen.

      p.mb-4(data-aos="fade") Es importante destacar que, desde las perspectivas de:

      .cont_4_2.borde-10.mb-5
        .row.align-items-center
          .col-12.col-lg-2.pe-lg-0
            .d-flex.justify-content-center.flex-lg-wrap
              .figura-ilustrativa(data-aos="flip-up")
                figure
                  img.mx-auto(src="@/assets/curso/temas/56.svg")
              .figura-ilustrativa(data-aos="flip-up")
                figure
                  img.mx-auto(src="@/assets/curso/temas/57.svg")
              .figura-ilustrativa(data-aos="flip-up")
                figure
                  img.mx-auto(src="@/assets/curso/temas/58.svg")
          .col-12.col-lg-10.ps-lg-0
            .p-4.ps-lg-0
              .p-3.cont-textos-1.borde-10(data-aos="flip-up")
                h3.mb-2.p-1 Ingeniero de pruebas
                p.mb-4 &#8226; SonarQube facilita la identificación de áreas donde faltan pruebas unitarias, permitiendo su inclusión.
                h3.mb-2.p-1 Arquitecto de #[em software]
                p.mb-4 &#8226; SonarQube asiste en mantener el diseño original del sistema, asegurando que las reglas de codificación se cumplan durante el desarrollo del proyecto. 
                p.mb-4 &#8226; Ayuda a detectar código excesivamente complejo para su posterior refactorización y a identificar dependencias incorrectamente asignadas. 
                p.mb-4 &#8226; Puede asegurar atributos de calidad como la mantenibilidad, la extensibilidad y el bajo acoplamiento.
                h3.mb-2.p-1 Desarrolladores
                p.mb-4 &#8226; Les permite escribir código más legible y fácil de mantener, lo cual se traduce en una curva de aprendizaje mucho más baja para los nuevos desarrolladores que llegan a incluirse en el proyecto.

    p.mb-4(data-aos="fade") Por lo tanto, es posible mencionar algunas de las características a tener en cuenta de SonarQube:

    .color-fondo-7.fondec-2.borde-10.p-3.p-md-4.px-lg-5.figura-decorativa.mb-5.pb-4
      figure.fig-dec.f1(style="max-width: 97px;top: 35px;")
        img.mx-auto(src="@/assets/curso/temas/37.svg")
      figure.fig-dec(style="max-width: 264px;bottom: 0;top: auto;right: auto;left: 10%;")
        img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 264px;")
      h4.pt-4.pt-lg-0.mb-4.text-center Características de SonarQube

      .row.justify-content-center
        .col-lg-2.col-md-3
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 190px;")
        
        .col-lg-3.col-md-4
          .color-fondo-3.p-3.borde-10.mb-2
            p.mb-0 &#8226; Integración DevOps (Jenkins & Azure DevOps).
          .color-fondo-3.p-3.borde-10.mb-2
            p.mb-0 &#8226; Detecta problemas complicados.
          .color-fondo-3.p-3.borde-10.mb-2
            p.mb-0 &#8226; Se integra con IDEs de desarrollo con herramientas de integración continua.
          .color-fondo-3.p-3.borde-10.mb-2.mb-lg-0
            p.mb-0 &#8226; Analiza el código fuente de más de 20 lenguajes de programación.
        .col-lg-3.col-md-4
          .color-fondo-3.p-3.borde-10.mb-2
            p.mb-0 &#8226; Instala un servidor local que se puede configurar con diferentes BD para analizar grandes cantidades de código o también trae su BD embebida.
          .color-fondo-3.p-3.borde-10.mb-2
            p.mb-0 &#8226; Curva de aprendizaje rápida.
          .color-fondo-3.p-3.borde-10.mb-2
            p.mb-0 &#8226; Escalable a las necesidades de una empresa.
          .color-fondo-3.p-3.borde-10
            p.mb-0 &#8226; Inspección continúa.
      

    p.mb-4(data-aos="fade") Para analizar un proyecto de software utilizando SonarQube, se debe contar con tres componentes:

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
        .p-4.borde-10.h-100(style="background-color: #BAE9D9;")
          .d-flex.justify-content-between.mb-3
            div
              figure
                img.mx-auto(src="@/assets/curso/temas/59.svg")
            div(style="margin-right: -1.5rem")
              figure
                img.mx-auto(src="@/assets/curso/temas/41.svg")
          h3.mb-4.p-1.d-inline-block(style="background-color: #3EE2A8") Servidor web de SonarQube
          p.mb-0 Es un servidor web que tarda un par de minutos al instalarse por primera vez, ya que debe crear las tablas en la base de datos para ser ejecutado.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
        .p-4.borde-10.h-100(style="background-color: #BAE9D9;")
          .d-flex.justify-content-between.mb-3
            div
              figure
                img.mx-auto(src="@/assets/curso/temas/60.svg")
            div(style="margin-right: -1.5rem")
              figure
                img.mx-auto(src="@/assets/curso/temas/41.svg")
          h3.mb-4.p-1.d-inline-block(style="background-color: #3EE2A8") Base de datos
          p.mb-0 Es un conjunto de  datos que  permite almacenar el resultado de todos los análisis que se van a ejecutar.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
        .p-4.borde-10.h-100(style="background-color: #BAE9D9;")
          .d-flex.justify-content-between.mb-3
            div
              figure
                img.mx-auto(src="@/assets/curso/temas/61.svg")
            div(style="margin-right: -1.5rem")
              figure
                img.mx-auto(src="@/assets/curso/temas/41.svg")
          h3.mb-4.p-1.d-inline-block(style="background-color: #3EE2A8") #[em Scanner]
          p.mb-0 Existen diferentes tipos de scanner, dependiendo del lenguaje, y es quien realizará el análisis y subirá los reportes al servidor web de #[b SonarQube.]

    p.mt-1(data-aos="fade") Una vez el reporte de #[em #[b SonarQube]] se ha generado, el equipo de desarrollo de #[em software] podrá entrar y analizar el reporte para saber cómo mejorar la calidad a medida que va evolucionando el proyecto.

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="flip-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/3.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Inspección continúa

    .row.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-left") En la construcción de un #[em software], hay muchos desarrolladores involucrados, cada uno de ellos con una comprensión diferente de lo que es la calidad y los estándares del desarrollo de #[em software]. Adicionalmente, pueden utilizar editores de código diferentes, como visual Studio Code o IntelliJ. Posteriormente, suben el código a algún repositorio, como uno basado en Git. Después de que esto ocurre, se lanza un proceso de integración continua, puede ser en Jenkins, donde se ejecutan las pruebas del proyecto y este se puede desplegar en un ambiente de producción. Es en este punto donde se puede incluir SonarQube para mejorar la calidad del proyecto, puesto que se puede hacer que SonarQube haga parte del proceso de integración continua y, con esto, se estaría creando el proceso de inspección continua.

        .p-4.borde-10(style="background-color: #F3F9FF;border:1px solid #273A89;")
          p.mb-0(data-aos="fade") Una vez que el análisis del código está listo, los desarrolladores podrán entrar y ver el resultado del reporte para seguir trabajando en el mejoramiento continuo de la calidad del proyecto. Finalmente, es posible instalar SonarLint, que es un plugin para los editores de código, que permite realizar un análisis antes de subir el código al servidor de SonarQube para ser analizado, de tal forma que los desarrolladores mejoren la calidad con mucho tiempo de antelación.

      .col-lg-4.order-first.order-lg-last(data-aos="zoom-in-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 400px;")

    .tarjeta.color-secundario.p-3.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/9.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Probando SonarQube
              p.mb-0.text-small Para obtener una mejor comprensión de SonarQube, se recomienda acceder al siguiente video tutorial, el cual ofrece una guía detallada sobre cómo instalar la herramienta SonarQube.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5UoygWLrBqo" target="_blank")
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
