<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Teoría general de sistemas
    .row.mb-0.mb-lg-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width:450px").m-auto
      .col-lg-7(data-aos="fade-left")
        p Surge de una serie de estudios interdisciplinarios cuyo propósito es el de explicar el funcionamiento e impacto de los sistemas en todos los niveles. El sistema como un todo, está constituido por partes que se encuentran interrelacionadas y dependen unas de las otras; el cambio en una de esas partes del sistema afecta a las demás. El crecimiento positivo de un sistema depende de la capacidad de adaptación al entorno y a las dinámicas cambiantes. La teoría de sistemas tiene como objetivo descubrir las condiciones y las restricciones que se presentan para discernir la aplicación de una acción ampliamente, en lugar de hacerlo de manera particular. Esta teoría tuvo su origen en el campo de la biología; sin embargo, los resultados obtenidos mostraron la posibilidad y oportunidad de generar su influencia en otros ámbitos.
    p.mb-5(data-aos="fade-up") Existen dos tipos de sistemas:
    .row.mb-5(data-aos="fade-right")
      .col-lg-6.bg-c4.p-5
        figure.mb-5
          img(src='@/assets/curso/tema4/img1.svg', style="width:450px").m-auto
        h3.text-center Abierto
        p.text-center.mb-0 Está en constante relación con el ambiente o su entorno.
      .col-lg-6.bg-c5.p-5
        figure.mb-5
          img(src='@/assets/curso/tema4/img2.svg', style="width:320px").m-auto
        h3.text-center Cerrado
        p.text-center.mb-0 No hay relación con el entorno, porque no lo necesita para cumplir con su función.
    p.mb-5(data-aos="fade-left") Con la llegada de esta teoría, se dio paso a la conformación y estructuración de modelos que permiten el funcionamiento planeado y organizado de la empresa como, por ejemplo, el sistema de gestión de la calidad, el cual es un conjunto de elementos que le posibilita a las empresas aplicar el ciclo PHVA en las actividades requeridas y necesarias para el cumplimiento de la misión, la visión y los objetivos organizacionales, estableciendo políticas, normas, procesos y procedimientos que permitan ofertar, al mercado, servicios y productos con estándares de calidad altos, así como también generar confianza entre los usuarios o clientes y propiciar sostenibilidad en el tiempo.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los principios que rigen el sistema de gestión de la calidad son:
              br
              br
              ul.lista-ul
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Liderazgo.
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Enfoque al usuario o cliente.
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Mejora continua.
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Decisiones orientadas en pruebas.
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Compromiso de las personas.
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Enfoque a procesos.
                li.mb-0
                  i.fas.fa-check(style="color:#F85316")
                  | Gestión de las relaciones.
    p(data-aos="fade-right") Todos estos principios, orientados hacia el logro de los objetivos y metas de la empresa, y con la aplicación adecuada de un Sistema de Gestión de Calidad, pueden llegar a alcanzar: reducción en los costos, incremento de la rentabilidad del negocio, aumento de la satisfacción de los clientes, mejora de la imagen de la empresa en el mercado, diferenciación positiva con relación a la competencia, entre otros.
    p.mb-5(data-aos="fade-down") Por otra parte, existen varios conceptos asociados al Sistema de Gestión de la Calidad, que obran y actúan con objetivos específicos; estos conceptos son:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row(titulo="Control de calidad")
        .col-lg.mb-4.mb-lg-0
          p Se define como el mecanismo de control determinado para verificar las condiciones de calidad de un producto o servicio durante su proceso de producción, con el propósito de evitar fallas en el mercado. El control de calidad también permite evaluar el nivel de eficiencia de los sistemas, obteniendo la evidencia de procesos susceptibles de mejorar o de corregir, conociendo además las causas que los producen. Para implementar el control de calidad es preciso realizar un diagnóstico de las etapas claves a ser revisadas en el proceso productivo, y además un instrumento o herramienta para la evaluación de estas etapas. 
          p.mb-0 Es importante aclarar que, el control de calidad no se encuentra solamente en una parte de la etapa productiva, sino también durante toda la etapa de producción, a partir de los procesos administrativos de verificación, chequeo visual, testeo y análisis. Por otra parte, el control de calidad es posible que sea realizado por cualquier persona de la organización y, en cualquier momento; por lo tanto, es responsabilidad de todos los que intervienen en la elaboración de productos y servicios, prevenir errores y alertar sobre fallas o procesos ejecutados de manera incorrecta.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/img3.png', style="width: 350px").m-auto
      .row(titulo="Estándar de calidad")
        .col-lg.mb-4.mb-lg-0
          p Se define como los puntos de referencia que son utilizados para puntualizar un grupo pequeño (en la mayoría de los casos) de condiciones, con el interés que las características y elementos de un producto o servicio, sean también recibidos por el cliente y consumidor, por su capacidad de satisfacer las diversas expectativas y necesidades de este. Algunas de las características de los estándares de calidad son:
          ul.lista-ul
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              | Plantear una cantidad precisa del producto.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              | Establecer un ritmo de distribución puntual.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              | Fijar precios con relación a las variables de oferta y demanda.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              | Garantizar agilidad en servicio al cliente.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              | Brindar facilidades de uso.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              | Proponer niveles óptimos de seguridad.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/img4.png', style="width: 350px").m-auto
      .row(titulo="Criterio de calidad")
        .col-lg.mb-4.mb-lg-0
          p Es un indicador que resume en la medida de las posibilidades, la condición de calidad del proceso o producto. Un indicador debidamente formulado debe tener validez y asegurar que realmente se mida lo que se pretende, porque debe ser útil para que, de los resultados, puedan surgir acciones de mejora.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/img5.png', style="width: 350px").m-auto
      .row(titulo="Aseguramiento de calidad")
        .col-lg.mb-4.mb-lg-0
          p Puede definirse como el conjunto de acciones que se desarrollan con la intención de poder entregar al mercado y a los consumidores, productos y servicios con el nivel de calidad esperada; su aplicación genera confianza y seguridad a la hora de colocar bienes en el mercado. Para el desarrollo e implementación del modelo de aseguramiento de la calidad, se debe tener en cuenta lo siguiente:
          ul.lista-ul
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              |
              p.mb-0 #[b Convencimiento de los directivos:] para el cumplimiento del aseguramiento de la calidad, es necesario que los directivos se encuentren convencidos.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              |
              p.mb-0 #[b Elección del sistema y comunicación:] se deberá elegir el modelo de aseguramiento de calidad a utilizar y, posteriormente, esta información debe comunicarse a todos en la empresa, para obtener su participación y compromiso.
            li.mb-0
              i.fas.fa-check(style="color:#F85316")
              |
              p.mb-0 #[b Selección del responsable de la implementación:] se debe elegir a una persona que asuma el mando, como responsable para desarrollar todo el proceso e implementación del proyecto, apoyada por un comité de calidad.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/img6.png', style="width: 350px").m-auto
    .row.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img7.png', style="width:450px").m-auto
      .col-lg-7(data-aos="fade-left")
        p Como parte del Sistema de Gestión de la Calidad, se encuentra también el marco normativo, que, en aras de estandarizar esos criterios de calidad, proporciona pautas a seguir.
        p Para el planteamiento de los estándares de calidad, existe la Organización Internacional de Normalización -ISO-, federación (no gubernamental) mundial de organismos nacionales de normalización, que reúne expertos para debatir y compartir experiencia y conocimientos en materia de normatividad internacional; es la organización responsable de la elaboración de normas y guías que contienen lineamientos en todos los sectores e industrias, facilitando el intercambio de productos y servicios y ejercer de estímulo para la cooperación intelectual, tecnológica, económica y científica, a nivel mundial. El trabajo de preparación de las normas internacionales es realizado a partir de los comités técnicos de ISO. Para conocer más a profundidad el proceder de esta entidad, lo invitamos a consultar el material complementario.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 El estándar de normas de calidad más común y extendido actualmente, es el planteado por las ISO; a partir de ahí, se propone la condición para llevar adelante la gestión de la calidad y el desarrollo de los sistemas de calidad y mejora continua en una empresa.
    p.mb-5(data-aos="fade-down") Estos estándares no solo hacen referencia al área de calidad, sino que contemplan la estructura funcional de la organización, los procesos, procedimientos y recursos del sistema:
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        LineaTiempoB.color-acento-contenido(:datos="datosLineaTiempoB")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo:
          'Norma ISO 9000. Sistemas de gestión de la calidad, fundamentos y conceptos',
        texto:
          'Esta norma contiene los elementos conceptuales, vocabulario y aspectos generales; además, contiene los principios de gestión de calidad que se consolidan como base para aplicar la norma.',
        icono: require('@/assets/curso/tema4/img3.svg'),
      },
      {
        titulo: 'Norma ISO 9001. Sistemas de gestión de calidad, requisitos',
        texto:
          'Contiene las exigencias mínimas para la certificación de una empresa en sistema de gestión de calidad.',
        icono: require('@/assets/curso/tema4/img4.svg'),
      },
      {
        titulo:
          'Norma ISO 9004. Gestión de la calidad. Calidad en la organización. Orientación para lograr el éxito sostenido',
        texto:
          'Contiene los lineamientos orientados para conseguir el éxito de manera que permanezca en el tiempo y para que las expectativas del cliente o consumidor se sostengan a lo largo del tiempo.',
        icono: require('@/assets/curso/tema4/img5.svg'),
      },
      {
        titulo:
          'Norma ISO 19011. Directrices para la auditoría de los sistemas de gestión',
        texto:
          'Contiene la descripción de los elementos requeridos al momento de ejecutar las auditorías al sistema de gestión de calidad.',
        icono: require('@/assets/curso/tema4/img6.svg'),
      },
      {
        titulo:
          'Norma ISO 27001. Sistema de gestión de seguridad de la información',
        texto:
          'Constituida por elementos para mejorar el cumplimiento de los requisitos de seguridad de la información, la protección de los datos y la prevención del riesgo en términos de información personal identificable. Esta norma ayuda a las organizaciones a establecer un enfoque integral de la seguridad de la información; además de esto garantiza la confidencialidad de la información, que solo sea accesible a las personas que corresponda y también la protección contra el fraude informático.',
        icono: require('@/assets/curso/tema4/img7.svg'),
      },
      {
        titulo: 'Norma ISO 14001. Sistema de gestión ambiental',
        texto:
          'Proporciona a las empresas un marco con el cual se busca la protección del medio ambiente y dar respuesta a las condiciones ambientales fluctuantes, propendiendo por el equilibrio con las necesidades sociales y económicas del entorno. Se detallan todos los requisitos para instaurar un Sistema de Gestión Ambiental eficaz, estableciendo un enfoque sistémico para la gestión del medio ambiente, generando que las directivas empresariales cuenten con información suficiente para garantizar su implementación con éxito a largo plazo.',
        icono: require('@/assets/curso/tema4/img8.svg'),
      },
      {
        titulo: 'Norma ISO 45001. Sistema de Seguridad y Salud en el Trabajo',
        texto:
          'Esta norma se centra en proporcionar a la empresa la información sobre elementos importantes que puedan llegar a afectar tanto positiva como negativamente y cómo se logra la gestión de responsabilidad de la empresa hacia los colaboradores en salud y seguridad en el trabajo (enfermedades laborales, accidentes, incidentes, seguridad, riesgos, entre otros).',
        icono: require('@/assets/curso/tema4/img9.svg'),
      },
    ],
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
