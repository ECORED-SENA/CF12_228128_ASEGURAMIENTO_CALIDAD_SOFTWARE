<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de pruebas de #[em software] de GUI
    
    p.mb-5 En este apartado, se identifican las herramientas de prueba de GUI (#[em Graphical User Interface]), que en español se traduce como interfaz gráfica de usuario, las cuales ayudan en las pruebas automatizadas de #[em software] y aplicaciones que contienen interfaces gráficas de usuario. Estas herramientas de #[em software] emplean casos de prueba incluidos en el plan de pruebas para garantizar que la aplicación cumpla con sus especificaciones y ejecute las funciones previstas.

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.color-fondo-2.p-4.mb-4
      figure.mb-4.mb-lg-0.position-relative(style="z-index: 1;")
        img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 295px;")
      .p-4.cont_1_1
        p.mb-0 Las herramientas de prueba de GUI verifican la funcionalidad y evalúan otros elementos de diseño, como el tamaño de fuente, botones, cuadros de prueba, cuadros de diálogo, formato de texto, barras de menú, barras de herramientas, contenido de enlaces, listas, imágenes, íconos, diseño, entre otros.
    
    .row.align-items-center.mb-4
      .col-lg-8
        .color-fondo-3.p-4.figura-decorativa.mb-4.mb-lg-0

          figure.fig-dec(style="bottom: 1.5rem;top: unset;")
            img.mx-auto(src="@/assets/curso/temas/12.svg")

          p.mb-0 Por otro lado, cuando se incluyen pruebas de GUI al comienzo del proceso de desarrollo del #[em software], mejora la calidad, se agiliza el desarrollo y se reducen los riesgos al finalizar el proceso de desarrollo; además, las pruebas de GUI automatizadas proveen una solución para los problemas relacionados con las pruebas manuales de GUI (Fernández, 2018).
      .col-lg-4
        figure
          img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 400px;")
    
    .tarjeta.color-secundario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/9.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 #[em Automatización de pruebas de software]
              p.mb-0.text-small Los invitamos a ingresar  al #[em webinar] "Automatización de Pruebas de #[em Software]" donde exploraran las últimas tendencias y herramientas.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=xgJcWRQhDmY" target="_blank")
                span(style="color: #12263F") Ver video
                i.fas.fa-video(style="color: #12263F")
    .row.justify-content-center
      .col-lg-10
        .borde-10.color-fondo-5.p-4
          .row.align-items-center
            .col-lg-1.col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 80px;")
            .col-lg-11.col-md-10
              p.mb-0 ¿#[b Sabías que ...] las pruebas de GUI, una vez creadas, pueden repetirse tantas veces como sea necesario?

    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/3.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Cómo seleccionar la herramienta de pruebas de #[em software] de GUI

    .cont_2_1.mb-4
      .py-5
        .row.mb-4
          .col-md-2.text-center
            .color-fondo-6.p-2.borde-10.mb-4.mb-lg-0.d-inline-block.d-md-block.px-5.px-md-2
              figure
                img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 49px;")
          .col-md-10
            p.mb-0 Las pruebas de #[em software] de GUI constituyen un proceso funcional que puede volverse crítico. Por lo tanto, hay muchos factores a considerar al seleccionar una herramienta de pruebas de GUI automatizada. A continuación, se mencionan algunos de los factores importantes a tener en cuenta durante el proceso de selección:
          
        

        SlyderF.estilo-slyder(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-secundario.p-4.tarjeta-carrousel-1
            figure.mb-2
              img.me-auto(src="@/assets/curso/temas/18.png",style="max-width: 90px;")
            h3.mb-3 #[span.numero.p-1 1.] #[span.titulo.p-1 Curva de aprendizaje]
            p.mb-0 Debe ser acorde con el alcance y los objetivos.

          .tarjeta.color-secundario.p-4.tarjeta-carrousel-1
            figure.mb-2
              img.me-auto(src="@/assets/curso/temas/19.png",style="max-width: 90px;")
            h3.mb-3 #[span.numero.p-1 2.] #[span.titulo.p-1 Disponibilidad de soporte]
            p.mb-0 Bien sea  foros, bases de datos de errores, blogs y comunidad activa de usuarios.

          .tarjeta.color-secundario.p-4.tarjeta-carrousel-1
            figure.mb-2
              img.me-auto(src="@/assets/curso/temas/20.png",style="max-width: 90px;")
            h3.mb-3 #[span.numero.p-1 3.] #[span.titulo.p-1 Evaluadores]
            p.mb-0 Deben verificar el factor de costo, mantenimiento, costos de licencias por usuario.

          .tarjeta.color-secundario.p-4.tarjeta-carrousel-1
            figure.mb-2
              img.me-auto(src="@/assets/curso/temas/21.png",style="max-width: 90px;")
            h3.mb-3 #[span.numero.p-1 4.] #[span.titulo.p-1 Sistema operativo]
            p.mb-0 Sistema operativo compatible con aquellos paquetes necesarios para una implementación exitosa.

          .tarjeta.color-secundario.p-4.tarjeta-carrousel-1
            figure.mb-2
              img.me-auto(src="@/assets/curso/temas/22.png",style="max-width: 90px;")
            h3.mb-3 #[span.numero.p-1 5.] #[span.titulo.p-1 Cociente de integración]
            p.mb-0 Verificar que la herramienta incluye alguna API o tiene capacidad de personalización.

          .tarjeta.color-secundario.p-4.tarjeta-carrousel-1
            figure.mb-2
              img.me-auto(src="@/assets/curso/temas/23.png",style="max-width: 90px;")
            h3.mb-3 #[span.numero.p-1 6.] #[span.titulo.p-1 Correcciones regulares/ lanzamientos]
            p.mb-0 Observar si la herramienta se mantiene, las actualizaciones periódicas se lanzan y se verifica  la madurez de la herramienta.

    p.mb-4 Con base en lo anterior, a continuación, se describen las herramientas para crear y ejecutar pruebas de GUI automatizadas de forma efectiva:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .cont_2_2.p-4.figura-decorativa
          figure.fig-dec(style="bottom: 0;top: unset;max-width: 79px;")
            img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 79px;")

          h3.mb-3 #[em Test Complete]
          p.mb-4 Es una herramienta que contiene tres módulos para aplicaciones de escritorio, web y móviles, una opción de grabación manual, reproducción y modificación automatizada de prueba grabada.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .cont_2_2.p-4.figura-decorativa
          figure.fig-dec(style="bottom: 0;top: unset;max-width: 79px;")
            img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 79px;")

          h3.mb-3 #[em Selenium]
          p.mb-4 Es una  herramienta que es utilizada para la automatización de pruebas,  las efectúa mediante reproducción y grabación de una aplicación web de código abierto, permite grabar acciones visuales.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .cont_2_2.p-4.figura-decorativa
          figure.fig-dec(style="bottom: 0;top: unset;max-width: 79px;")
            img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 79px;")

          h3.mb-3 #[em Squish]
          p.mb-4 Es una herramienta de uso comercial, multiplataforma y funcional, utilizada para pruebas de regresión y de GUI, con la capacidad de probar aplicaciones basadas en diversas tecnologías, incluyendo Windows, Java, Mac, iOS, Android, etc.

    p Según las herramientas utilizadas para ejecutar las pruebas de GUI, se destaca el uso de #[em frameworks]. Es crucial considerar las características del entorno donde serán instalados y ejecutados:

    .fondo-gradiente-2.py-5
      .cont_2_3.p-3
        figure.fig-flotante(style="left: 0;top: -140px;max-width:118px;")
          img(src="@/assets/curso/temas/31.svg",style="max-width:118px;")
        figure.fig-flotante(style="z-index: 1;right: 10px;top: 10px;max-width:88px;")
          img(src="@/assets/curso/temas/30.svg",style="max-width:88px;")
        figure.fig-flotante(style="right: -70px;top: -115px;max-width:173px;")
          img(src="@/assets/curso/temas/29.svg",style="max-width:173px;")
        figure.fig-flotante(style="left: 35%;bottom: -160px;max-width:227px;")
          img(src="@/assets/curso/temas/28.svg",style="max-width:227px;")

        SlyderA(tipo="b",clases="eded")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Test complete

                  ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                    li 
                      i.fas.fa-circle
                      span #[b Sistema operativo:] Microsoft Windows XP Professional de 32/64 bits.
                    li 
                      i.fas.fa-circle
                      span #[b Procesador:] Intel Core 2 Duo 2 GHz o superior.
                    li
                      i.fas.fa-circle
                      span #[b RAM:] 2 GB de RAM en otros sistemas operativos.
                    li
                      i.fas.fa-circle
                      span #[b Disco duro:] 1 GB de espacio libre en disco para la instalación.
                    li.mb-0
                      i.fas.fa-circle
                      span #[b Resolución:] Resolución de pantalla de 1024 × 768 o superior.


                .col-md-6.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/26.png',style="max-width: 400px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 #[em Selenium]

                  ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                    li 
                      i.fas.fa-circle
                      span #[b Sistema operativo:] Microsoft Windows 10 32/64 bits.
                    li 
                      i.fas.fa-circle
                      span #[b Procesador:] Intel Core 2 Duo 2 GHz o superior.
                    li
                      i.fas.fa-circle
                      span #[b RAM:] 4 GB de RAM en otros sistemas operativos.
                    li.mb-0
                      i.fas.fa-circle
                      span #[b Disco duro:] 2 GB de espacio libre en disco para la instalación.


                .col-md-6.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/32.png',style="max-width: 400px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 #[em Squish]

                  ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                    li 
                      i.fas.fa-circle
                      span #[b Sistema operativo:] Microsoft Windows 7 SP1 o superior 32/64 bits.
                    li 
                      i.fas.fa-circle
                      span #[b Procesador:] Intel Core 2 Duo 2 GHz o superior.
                    li
                      i.fas.fa-circle
                      span #[b RAM:] 4 GB de RAM
                    li.mb-0
                      i.fas.fa-circle
                      span #[b Disco duro:] 2 GB de espacio libre en disco para la instalación.


                .col-md-6.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src='@/assets/curso/temas/33.png',style="max-width: 400px;")

      

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
