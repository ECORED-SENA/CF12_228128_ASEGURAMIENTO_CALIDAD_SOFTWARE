<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 En este componente formativo, se estudiarán las diferentes herramientas para la automatización de pruebas de #[em software], por lo cual, en esta sección, se abordarán las siguientes áreas de aprendizaje: descripción de las herramientas de pruebas de software por código y de GUI, TDD y calidad del código fuente.

    .color-fondo-1.borde-10.p-4.mb-5
      .row.align-items-center
        .col-lg-2
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 168px;")
        .col-lg-10
          p.mb-0 Cabe resaltar que, cuando se desarrollan aplicaciones web, uno de los desafíos es verificar que la calidad del producto sea óptima y sin errores, y una actividad que permite lo anterior es automatizar los test, que empiezan con una primera etapa de pruebas manuales, para posteriormente ser automatizadas. Conocer las diversas herramientas de pruebas de #[em software] permite probar las funcionalidades definidas en el plan de pruebas, verificando por ejemplo que  un método de una clase específica funcione correctamente, así como asegurar que una serie de acciones en una interfaz de usuario se efectúen de forma correcta y que, además, retornen los resultados esperados. Lo invitamos a explorar el siguiente video y conocer más:
    
    p Para la elaboración de este componente, se abordaron varios autores conocidos en #[b automatización de pruebas de #[em software]], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del #[b aseguramiento de la calidad de #[em software]].

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
