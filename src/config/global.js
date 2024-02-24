export default {
  global: {
    componenteFormativo: 'Automatización de pruebas de <em>software</em>',
    descripcionCurso:
      'En este componente, el aprendiz identificará las herramientas de pruebas de <em>software</em> que serán requeridas al momento de realizar una prueba de automatización, con el objetivo de verificar que la calidad del producto sea óptima y sin errores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas de pruebas de <em>software</em> por código',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de pruebas de <em>software</em> de GUI',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desarrollo guiado por pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Calidad del código fuente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métricas de indicadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Caso de prueba herramienta SonarQube',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Calidad del código fuente',
      referencia:
        'Dapozo, G., Greiner, C., Irrazabal, E. y Chiapello, J. (s. f.). <em>Análisis de código fuente orientado a la calidad del producto</em>. Universidad Nacional del Nordeste.',
      tipo: 'Artículo',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/45740/Documento_completo.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Automatización de pruebas de <em>software</em>',
      referencia:
        'Mascheroni, M., Cogliolo, M. e Irrazabal, E. (2016). <em>Automatización de pruebas de compatibilidad web en un entorno de desarrollo continuo de software</em>. 17º Simposio Argentino de Ingeniería de Software.',
      tipo: 'Tesis',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/57081/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Herramientas de pruebas de <em>software</em> por código',
      referencia:
        'Serna, E. y Serna, A. (2012). Una evaluación a las herramientas libres para pruebas de software. <em>Revista Virtual Universidad Católica Del Norte</em>, (37), p. 44–61.',
      tipo: 'Documento',
      link:
        'https://revistavirtual.ucn.edu.co/index.php/RevistaUCN/article/view/387',
    },
    {
      tema: 'Herramientas de pruebas de <em>software</em> de GUI',
      referencia:
        'Fernández, S. (2018). <em>Herramientas de automatización para pruebas de software</em>. Universidad Técnica Federico Santa María.',
      tipo: 'Tesis',
      link:
        'https://repositorio.usm.cl/bitstream/handle/11673/47825/3560900259665UTFSM.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Acoplamiento',
      significado:
        'es la medida en que un componente o clase dependen de otro, generando cambios externos o alterando la funcionalidad del mismo (cuando se modifican los atributos de una clase, se tienen que modificar los atributos de otra).',
    },
    {
      termino: 'Cohesión',
      significado:
        'es la medida en la que un componente o clase realiza únicamente la tarea para la cual fue diseñado (una clase debe de hacer lo que respecta a su entidad y no hacer acciones que involucren a otra clase o entidad).',
    },
    {
      termino: '<em>FindBugs</em>',
      significado:
        'analiza el código para encontrar cualquier falla de diseño y posibles errores.',
    },
    {
      termino: 'GitHub',
      significado:
        'es un servicio basado en la nube que aloja un sistema de control de versiones (VCS) llamado Git. Este permite a los desarrolladores colaborar y realizar cambios en proyectos compartidos, a la vez que mantienen un seguimiento detallado de su progreso.',
    },
    {
      termino: 'SOLID',
      significado:
        'se compone de una serie de principios aplicables a la Programación Orientada a Objetos que, si se utilizan correctamente, ayudarán a escribir <em>software</em> de calidad en cualquier lenguaje de programación orientada a objetos. Gracias a ellos, se podrá crear código que será más fácil de leer, testear y mantener.',
    },
    {
      termino: 'TDD',
      significado:
        'permite una verificación de las funcionalidades desarrolladas en ciclos más pequeños, lo que permite la detección de errores y, asimismo, su solución temprana.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abel Quintana Lopez. (2020). Automatizando pruebas desde cero - WebdriverIO - Desafío#1 - Solución. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=fnTvy_ZEcgM&t=337s',
    },
    {
      referencia:
        'Abel Quintana Lopez. (2020). WebdriverIO - Desafío # 1. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=Rv28n_rT1BM',
    },
    {
      referencia:
        'Alvarez, N. (2019). Cap #2 | Curso RobotFramework| Preparando ambiente. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?app=desktop&v=x1klhk_ovZo',
    },
    {
      referencia:
        'Dapozo, G., Greiner, C., Irrazabal, E. y Chiapello, J. (s. f.). <em>Análisis de código fuente orientado a la calidad del producto</em>. Universidad Nacional del Nordeste.',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/45740/Documento_completo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'De la Roca, A., Santa, L., Estrada, A., Aranda, B. y Villavicencio, L. (2014). <em>Implementación de Herramientas de Software para mejorar la Aplicación de Pruebas Unitarias en la Etapa de Construcción del Proceso de Desarrollo y Mantenimiento de Software de la Norma NMX-I-059-NYCE-2011</em>. ECORFAN.',
      link:
        'https://www.ecorfan.org/handbooks/Ciencias%20de%20la%20Ingenieria%20y%20Tecnologia%20T-VI/ARTICULO%2010.pdf',
    },
    {
      referencia:
        'Fatto Consultoría y Sistemas. (2020). Webinar: Automatización de pruebas de software. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=xgJcWRQhDmY',
    },
    {
      referencia:
        'Fernández, S. (2018). <em>Herramientas de automatización para pruebas de software</em>. Universidad Técnica Federico Santa María.',
      link:
        'https://repositorio.usm.cl/bitstream/handle/11673/47825/3560900259665UTFSM.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'JoanMedia. (2020). <em>Cómo INSTALAR CYPRESS | Cómo USAR Cypress | TUTORIAL de Cypress | Cypress.io</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=VimuR2V5Gf0',
    },
    {
      referencia:
        'JoanMedia. (2020). Cómo INSTALAR CYPRESS | Cómo USAR Cypress | TUTORIAL de Cypress | Cypress.io  [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=VimuR2V5Gf0',
    },
    {
      referencia:
        'Manuel Zapata. (2020). Pruebas unitarias y Test-Driven Development | Ejemplo desde cero. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=YuRdaR6wwWU',
    },
    {
      referencia:
        'Mascheroni, M., Cogliolo, M. e Irrazabal, E. (2016). <em>Automatización de pruebas de compatibilidad web en un entorno de desarrollo continuo de software</em>. 17º Simposio Argentino de Ingeniería de Software.',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/57081/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Pull Request. (2023). Cómo DESCARGAR e INSTALAR Sonarqube y ANALIZAR proyecto. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=5UoygWLrBqo',
    },
    {
      referencia:
        'Serna, E. y Serna, A. (2012). Una evaluación a las herramientas libres para pruebas de software. <em>Revista Virtual Universidad Católica Del Norte</em>, (37), p. 44–61.',
      link:
        'https://revistavirtual.ucn.edu.co/index.php/RevistaUCN/article/view/387',
    },
    {
      referencia:
        'Testing Bolivia (2019). Webinar - Conociendo Serenity BDD - Framework de Automation. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=609y4K4ph6s',
    },
    {
      referencia:
        'TestProject. (2018). How to Create Web Tests with TestProject  [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?app=desktop&v=hbMbcjm492c',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
