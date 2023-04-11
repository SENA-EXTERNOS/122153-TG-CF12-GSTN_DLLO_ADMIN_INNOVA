export default {
  global: {
    componenteFormativo:
      'Planificación estratégica y toma de decisiones organizacionales',
    descripcionCurso:
      'El contenido de este componente está asociado a los modelos de gerencia y de estructura administrativa, a la importancia de la planeación estratégica en las empresas, y a la relevancia de los diagnósticos y el uso de las herramientas, instrumentos, metodologías y técnicas de “organización de la acción”, para obtener elementos de informe y apoyo, al momento de tomar las decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modelos gerenciales y estructura administrativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Administración estratégica a partir del diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Teoría general de sistemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Métricas y planes de acción en las empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Indicadores de gestión',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Los planes en la administración',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Informes organizacionales',
        desarrolloContenidos: true,
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
      tema: 'Estructura administrativa',
      referencia:
        'Growp. (2017). <em>La estructura organizacional</em>. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NpsflJIWNIg&t=1s',
    },
    {
      tema: 'Administración estratégica a partir del diagnóstico',
      referencia:
        'Barrios, C. (2021). <em>Tema: Análisis y Diagnóstico. Administración Estratégica</em>.  (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2Zh0UbT95pA',
    },
    {
      tema: 'Teoría general de sistemas',
      referencia:
        'ISO. (s.f.). <em>ISO 9001:2015(es) Sistemas de gestión de calidad - Requisitos</em>. ',
      tipo: 'Página web',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    //{
    //tema: 'Indicadores de gestión',
    //referencia:
    //  'Convocatorias e Inscripciones SENA 2022. (2022). <em>Qué son los Indicadores de Gestión Sena 2022</em>.',
    //tipo: 'Video',
    //link: 'https://www.youtube.com/watch?v=5QGuWriJFh8',
    //},
  ],
  glosario: [
    {
      termino: 'Actores',
      significado:
        'personas que buscan defender sus intereses haciendo uso del poder que tienen.',
    },
    {
      termino: 'Administración estratégica',
      significado:
        'aquella que apunta a dar lineamiento y orientación desde los estamentos directivos en una organización, teniendo en cuenta el estado interno y externo de la misma, diagnosticando lo que sucede para alinear y asegurar que la toma de decisiones impacte directamente la necesidad o la intención.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'estrategia que parte de valorar las funciones de la empresa con base en las funciones de otra y en condiciones de ventaja, de tal manera que se identifiquen los puntos a mejorar y se capitalice el aprendizaje y la experiencia de otros.',
    },
    {
      termino: 'Calidad',
      significado:
        'condición de cumplimiento y satisfacción de expectativas del usuario o cliente.',
    },
    {
      termino: 'Contingencia',
      significado: 'posibilidad que una cosa suceda o no.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'es el resultado documental de la recolección de una serie de información que debe ser considerada a la hora de tomar decisiones empresariales.',
    },
    {
      termino: 'Matrices de evaluación',
      significado:
        'proporcionan una valoración de aspectos internos o externos de la empresa, para proyectar una orientación acerca de la estrategia a emprender, de acuerdo con la realidad evidenciada.',
    },
    {
      termino: 'Matrices de posicionamiento',
      significado:
        'proporcionan la “posición” de un proyecto o empresa, con referencia al entorno o al mercado en el que opera.',
    },
    {
      termino: 'Sistema',
      significado:
        'se define como una entidad con límites y con partes interrelacionadas e interdependientes cuya suma es mayor a la suma de sus partes.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'aquella característica o servicio extra con el que cuenta un producto, servicio o proceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arbaiza Fermini, L. (2014). <em>Administración y organización: un enfoque contemporáneo</em>. Cengage Learning. ',
      link: 'https://issuu.com/cengagelatam/docs/adminorgan_issuu',
    },
    {
      referencia:
        'Bohlander, G., Morris, S. S. & Snell, S. A. (2018). <em>Administración de recursos humanos</em>. Cengage Learning. ',
      link: 'https://issuu.com/cengagelatam/docs/bohlander_issuu_2017',
    },
    {
      referencia:
        'Evans, J. R. y Lindsay, W. M. (2020). <em>Administración y control de la calidad</em>. Cengage Learning. ',
      link: 'https://issuu.com/cengagelatam/docs/9786075269528_issuu',
    },
    {
      referencia:
        'García Cediel, G. y Carrillo Bautista, M. (2016). <em>Indicadores de gestión. Manual básico de aplicación para Mipyme</em>. Ediciones de la U. ',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/1060/1/Indicadores%20de%20gestion-correccion%201%20%282%29.pdf',
    },
    {
      referencia:
        'González Millán, J. J. y Rodríguez Díaz, M. T. (2020). <em>Manual práctico de planeación estratégica</em>. Díaz de Santos. ',
      link: 'https://www.editdiazdesantos.com/wwwdat/pdf/9788490522424.pdf',
    },
    {
      referencia:
        'Quinteros Camacho, J. y Hamann Pastorino, A. (2017). <em>Planeamiento estratégico prospectivo: métodos MACTOR y SMIC</em>. Ecoe Ediciones. ',
      link:
        'https://www.ecoeediciones.mx/wp-content/uploads/2017/05/Planeamiento-estrat%C3%A9gico-prospectivo-1ra-Edici%C3%B3n.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
