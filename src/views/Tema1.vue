<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Herramientas de pruebas de #[em software] por código

    p.mb-4(data-aos="fade") Una vez estudiados y comprendidos los fundamentos de la calidad del software como elementos clave para elaborar un plan de pruebas, es posible seleccionar las herramientas de pruebas de software necesarias para realizar una prueba de automatización, las cuales se describirán en este apartado.

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.color-fondo-2.p-4
      figure.mb-4.mb-lg-0.position-relative(style="z-index: 1;",data-aos="fade-right")
        img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 295px;")
      .p-4.cont_1_1(data-aos="fade-left")
        p.mb-0 Existen varios #[b #[em frameworks]] que tienen integradas herramientas para la realización de pruebas unitarias, las cuales probarán las funciones de las clases y componentes que son utlizados por el producto software. Estos #[em frameworks] proporcionan ayudas para que el código de automatización de prueba sea estable, reutilizable y mantenible (Serna, M. y Serna, A., 2012).

    .fondo-gradiente-1.posicion-1(data-aos="fade-right")
      .cont-titulo-decorativo.p-2.mt-5.mb-4
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/3.svg")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 Cypress

      .row.mb-4
        .col-lg-2.order-first.order-lg-last(data-aos="fade")
          figure
            img.mx-auto.mb-4.mb-lg-0(src="@/assets/curso/temas/4.png",style="max-width: 190px;")
        .col-lg-10(data-aos="fade")
          p.mb-0 Es un #[em framework] de automatización de pruebas para JavaScript que facilita el testeo de aplicaciones web. Destaca por la sencillez de su configuración, la velocidad en la ejecución de pruebas y su interfaz gráfica interactiva, que muestra con claridad lo que está sucediendo y lo que se está probando. Esto permite detectar rápidamente cualquier error que surja durante el proceso. Además, es importante mencionar que con Cypress se pueden escribir pruebas de todo tipo, incluyendo unitarias, de integración y #[em end-to-end], sin necesidad de combinar distintos #[em frameworks] de prueba. Esto se debe a que Cypress es compatible con cualquier tipo de #[em framework], lo que facilita enormemente el proceso de prueba.

      .row.align-items-center.mb-5
        .col-lg-4(data-aos="zoom-in-up")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 400px;")
        .col-lg-8(data-aos="fade")
          .color-fondo-3.borde-10.p-4
            p.mb-0 Este #[em framework] de automatización de pruebas se enfoca en el desarrollador y se centra en permitir que el desarrollo basado en pruebas (TDD) sea una práctica simple y agradable. Cypress se ejecuta dentro del navegador de forma remota, a diferencia de otros #[em framework] de pruebas que se ejecutan fuera de él, considerando que tiene una arquitectura diferente y brindando resultados más consistentes.  Por lo tanto, se hace una invitación a conocer el videotutorial de la instalación de la herramienta Cypress en el sistema operativo Windows 10 a 64 bits

      figure.mb-5(data-aos="zoom-in-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/hIuEqUdAVJo?si=TD3_Gk_0T7qKjPmR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mb-5(data-aos="fade") Para afianzar sus conocimientos y realizar los pasos de instalación de la herramienta Cypress, se le invita a descargar el siguiente archivo PDF:

      .tarjeta.color-secundario.p-3.mb-5(data-aos="zoom-in-up")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/6.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Guía para instalar Cypress
                p.mb-0.text-small Para una instalación exitosa de Cypress, le invitamos a revisar detenidamente la guía que se encuentra en el documento anexo.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_1_Guia_para_instalar_Cypress.pdf')" target="_blank")
                  span(style="color: #12263F") Descargar
                  i.fas.fa-file-download(style="color: #12263F")
      
    p.mb-4(data-aos="fade") Para utilizar este #[em framework], se deben tener en cuenta las características del entorno donde será instalado y ejecutado; por lo tanto, a continuación, se mencionan los elementos requeridos:

    .row.justify-content-center(data-aos="zoom-in-up")
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

    .fondo-gradiente-1.posicion-1(data-aos="fade-right")
      .cont-titulo-decorativo.p-2.mt-5.mb-4
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/3.svg")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 Serenity BDD

      .row.mb-5
        .col-lg-2.order-first.order-lg-last(data-aos="fade-left")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 190px;")
        .col-lg-10(data-aos="fade-right")
          p.mb-0 Es un #[em framework] de automatización de casos de prueba de código abierto basado en #[b Java], que se integra con herramientas de desarrollo como JBehave y Cucumber, diseñado para facilitar la creación de pruebas de regresión y pruebas automáticas de aceptación. Ofrece una amplia gama de funcionalidades, incluyendo la ejecución de pruebas en paralelo, la captura de pantallas y la gestión de #[em WebDriver], todo ello sin necesidad de escribir código adicional. Recientemente, #[em Serenity] ha ampliado sus capacidades integrándose con #[em REST Assured], una biblioteca de Java para el testeo de API de código abierto, enriqueciendo así su oferta para los desarrolladores y #[em QA testers] que buscan eficiencia y efectividad en la automatización de pruebas.
      
      .row.justify-content-center.mb-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade")
            p.mb-0 #[b Figura 1.] #[em Framework Serenity BDD]
          .cont_1_2.px-lg-5.px-md-4.px-2(data-aos="zoom-in-up")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/8.png",alt="Figura de la página de resultados de Serenity BDD mostrando cuatro escenarios de prueba. Hay un gráfico circular que indica 75% de pruebas pasaron y 25% fallaron.")
      
      p.mb-4(data-aos="fade") Para utilizar #[b #[em Serenity BDD]], se deben tener en cuenta las características del entorno donde será instalado y ejecutado, por lo tanto, a continuación, se mencionan los elementos requeridos:

      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-left")
            p.mb-0 #[b Tabla 2.] Requerimientos #[em Serenity BDD]
          .tabla-a.color-thead-tabla-1(style="background-color: white;",data-aos="zoom-in-up")
            table
              thead
                tr
                  th Requisitos
                  th Descripción
              tbody
                tr
                  td.text-center #[b #[em Hardware]]
                  td Portátil o computador de escritorio (Core Duo P8600 2.4GHz, 4GB RAM, 320 GB HD).
                tr
                  td.text-center #[b Sistema operativo]
                  td Windows Vista Ultimate, Windows 10, Linux. 32 bits o 64 bits.
                tr
                  td.text-center #[b Navegadores]
                  td Internet Explorer 7.0.6001.1800, Mozilla Firefox 3.0.6, Opera 9.63, Safari 3.2.1, Google Chrome.
                tr
                  td.text-center #[b Compilador de código]
                  td Apache Maven 3.5.0
                tr
                  td.text-center #[b Lenguaje de programación]
                  td Java 1.8.
                tr
                  td.text-center #[b Kit de desarrollo de Java]
                  td Java Development Kit JDK 8 o superior.
                tr
                  td.text-center #[b Editor de código]
                  td Intellij Idea CE.

      .tarjeta.color-secundario.p-3.mb-5(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/9.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Conociendo #[em Serenity BDD]
                p.mb-0.text-small Para conocer algunas funcionalidades de este framework, se recomienda observar el siguiente webinar.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=609y4K4ph6s" target="_blank")
                  span(style="color: #12263F") Ver video
                  i.fas.fa-video(style="color: #12263F")

    .fondo-gradiente-1.posicion-1
      .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/3.svg")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 Robot Framework

      .row.mb-3
        .col-lg-2.order-first.order-lg-last(data-aos="fade-right")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 190px;")
        .col-lg-10(data-aos="fade-left")
          p Este #[em framework] se basa en Python y también podría utilizar #[em IronPython] (.NET) y #[em Jython] (Java). Además, emplea un enfoque basado en palabras clave para facilitar la creación de pruebas que sean fáciles de entender y legibles. Contiene diversas bibliotecas de pruebas y otras herramientas que se utilizan para agregar nuevas funcionalidades y desarrollar un conjunto de pruebas personalizado para la aplicación. Por otro lado, la biblioteca de prueba externa más utilizada podría ser #[em Selenium WebDriver]. No obstante, Robot Framework puede probar FTP, MongoDB, Android y Appium, además de sitios web.

      .row.justify-content-end.mb-5(data-aos="fade")
        .col-lg-10
          .color-fondo-4.p-4.mb-4.figura-decorativa
            figure.fig-dec
              img.mx-auto(src="@/assets/curso/temas/12.svg")
            .row.align-items-center
              .col-md-1
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 51px;")
              .col-md-11
                p.mb-0 Este #[em framework] se utiliza para las pruebas de aceptación, se considera entre uno de los mejores #[em framework] de Python. #[b Robot Framework] se utiliza en Python, pero, también puede ejecutarse en #[em IronPython], basado en .net y en #[em Jython], donde este último está basado en el lenguaje de programación Java.

          p.mb-0 Para utilizar #[b Robot Framework], se deben tener en cuenta las características del entorno donde será instalado y ejecutado. A continuación, se mencionan los elementos requeridos:

      .row.justify-content-center.mb-5(data-aos="zoom-in-up")
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 3.] Requerimientos Robot Framework
          .tabla-a.color-thead-tabla-1(style="background-color: white;")
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
                  td.text-center #[b Sistema operativo]
                  td Windows 10, 64 bits
                tr
                  td.text-center #[b Navegadores]
                  td Internet Explorer 7.0.6001.1800, Mozilla Firefox 3.0.6, Opera 9.63, Safari 3.2.1, Google Chrome.
                tr
                  td.text-center #[b Lenguaje de programación]
                  td Python 2.7.9 o superior.
                tr
                  td.text-center #[b Editor de código]
                  td SublimeText. Página para instalar #[a.link-defecto(href="https://www.sublimetext.com/3" target="_blank") https://www.sublimetext.com/3 #[i.ms-1.fas.fa-external-link-alt]]
                tr
                  td.text-center #[b Página para descargar]
                  td
                    | Python #[a.link-defecto(href="https://www.python.org/downloads/windows/" target="_blank") https://www.python.org/downloads/windows/ #[i.ms-1.fas.fa-external-link-alt]]
                    br
                    | wxPython. #[a.link-defecto(href="https://wxpython.org/pages/downloads/index.html" target="_blank") https://wxpython.org/pages/downloads/index.html #[i.ms-1.fas.fa-external-link-alt]]


      .tarjeta.color-secundario.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/9.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Robot Framework: preparando ambiente
                p.mb-0.text-small Para familiarizarse con las funcionalidades de este framework, se sugiere seguir el siguiente tutorial en video.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=x1klhk_ovZo" target="_blank")
                  span(style="color: #12263F") Ver video
                  i.fas.fa-video(style="color: #12263F")

    .fondo-gradiente-1.posicion-1
      .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/3.svg")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 #[em TestProject.io]
      
      .row.mb-4
        .col-lg-2.order-first.order-lg-last(data-aos="fade-left")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 190px;")
        .col-lg-10(data-aos="fade-right")
          p.mb-0 Es una de las primeras plataformas de automatización de pruebas basadas en la nube, lo que facilita que los evaluadores realicen su trabajo de manera eficiente, utilizando #[em frameworks] de código abierto como Selenium y Appium. Al ser una herramienta de código abierto, permite que una mayor cantidad de empresas y #[em testers] se beneficien de las capacidades de Selenium y Appium, que son dos de los principales recursos de código abierto para la automatización. Por otro lado, ya están disponibles las implementaciones para Java y C#, y actualmente se está trabajando en la compatibilidad con JavaScript, Python y otros lenguajes de programación.
      p.mb-5(data-aos="fade") Para utilizar #[em TestProject.io], se deben tener en cuenta las características del entorno donde será probado, por lo tanto, a continuación, se mencionan los elementos requeridos:

      .row.justify-content-center.mb-5(data-aos="zoom-in-up")
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 4.] Requerimientos Test Project
          .tabla-a.color-thead-tabla-1(style="background-color: white;")
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
                  td.text-center #[b Sistema operativo]
                  td Windows 10, 64 bits.
                tr
                  td.text-center #[b Navegadores]
                  td Internet Explorer 7.0.6001.1800, Mozilla Firefox 3.0.6, Opera 9.63, Safari 3.2.1, Google Chrome.
      
      .tarjeta.color-secundario.p-3.mb-5(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/9.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Tests con Test Project
                p.mb-0.text-small Para conocer algunas funcionalidades de la plataforma en automatización de pruebas, remítase al video tutorial.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?app=desktop&v=hbMbcjm492c" target="_blank")
                  span(style="color: #12263F") Ver video
                  i.fas.fa-video(style="color: #12263F")

    .fondo-gradiente-1.posicion-1
      .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-left")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/3.svg")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 #[em WebDriverIO]
    
      .row.mb-5
        .col-lg-2.order-first.order-lg-last(data-aos="fade-left")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 190px;")
        .col-lg-10(data-aos="fade-right")
          p.mb-4 Este #[em framework] es muy completo para probar aplicaciones web. Es muy rápido y no necesita implementar tareas desde cero. De acuerdo con la filosofía #[em “click and run”], contiene todo lo requerido para crear gran variedad de pruebas sostenibles y escalables, y contiene características adicionales que no se encuentran en otros #[em frameworks].

          p.mb-0 Para utilizar este #[em framework], se deben tener en cuenta las características del entorno donde será instalado y ejecutado; por lo tanto, a continuación, se mencionan los elementos requeridos:
      
      .row.justify-content-center.mb-5(data-aos="fade")
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 5.] Requerimientos WebDriverIO
          .tabla-a.color-thead-tabla-1(style="background-color: white;")
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
                  td.text-center #[b Sistema operativo]
                  td Windows 10, 32 o 64 bits.
                tr
                  td.text-center #[b Navegadores]
                  td Internet Explorer 7.0.6001.1800, Mozilla Firefox 3.0.6, Opera 9.63, Safari 3.2.1, Google Chrome.
                tr
                  td.text-center #[b Editor de código]
                  td Visual Studio Code. Página para descargar Visual Studio Code #[a.link-defecto(href="https://code.visualstudio.com/download" target="_blank") https://code.visualstudio.com/download #[i.ms-1.fas.fa-external-link-alt]]
                tr
                  td.text-center #[b Entorno en tiempo de ejecución multiplataforma]
                  td Node.js
                tr
                  td.text-center #[b Página para descargar]
                  td node.js #[a.link-defecto(href="https://nodejs.org/en/" target="_blank") https://nodejs.org/en/ #[i.ms-1.fas.fa-external-link-alt]]

      .tarjeta.color-secundario.p-3
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/9.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 #[em Webdriver]
                p.mb-0.text-small Para conocer algunas funcionalidades de Webdriver, se recomienda explorar los siguientes videos tutoriales.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Rv28n_rT1BM" target="_blank")
                  span(style="color: #12263F") Ver video
                  i.fas.fa-video(style="color: #12263F")


    


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
