<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Administración estratégica a partir del diagnóstico
    p.mb-5(data-aos="fade-right") Con el objetivo de profundizar sobre la administración estratégica a partir del diagnóstico y dar respuesta a preguntas como: ¿qué es?, ¿para qué sirve?, ¿cuáles son los tipos de estrategias administrativas? Lo invitamos a ver el siguiente video, el cual aborda la temática de manera específica:
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0ZLYKrw2_KM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p(data-aos="fade-left") Es así como el diagnóstico es el resultado documental de la recolección de una serie de información que debe ser considerada a la hora de tomar decisiones empresariales, porque permite obtener un estado del arte, una radiografía de lo que se tiene, para poder así proyectar lo que se debe hacer; esto forma parte de una buena administración estratégica, desde el reconocer para actuar.
    p.mb-5(data-aos="fade-left") En la Figura 2 se aprecian algunas de las variables que se analizan para el diagnóstico, tanto interno como externo:
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          p.mb-0 #[b Figura 2] 
          p.mb-0 #[em Variables que se analizan para el diagnóstico en el análisis estratégico] 
        figure
          img(src='@/assets/curso/tema3/img1.svg')
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 El análisis que se despliega a partir de la generación de información en la fase diagnóstica, proporciona a la organización la oportunidad de generar soluciones ante sus necesidades, dependiendo ellas de su situación en el mercado, su situación interna y sus objetivos a futuro. Existen dos tipos de diagnóstico: organizacional y cultural, y las técnicas para obtener esta información pueden ser cualitativas o cuantitativas.
    p.mb-5(data-aos="fade-down") Las cualitativas son:
    SlyderF.mb-5(columnas="col-9 col-md-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.color-secundario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img1.png' alt='AvatarTop')
          .col-12.p-4
            h4.text-center.text-white Observación
            p.text-center.text-white.mb-0 Se da cuando el observador lo realiza como parte del grupo, participando en actividades dispuestas para el ejercicio diagnóstico.
      .tarjeta.color-secundario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img2.png' alt='AvatarTop')
          .col-12.p-4
            h4.text-center.text-white Entrevista individual
            p.text-center.text-white.mb-0 Se da a partir de la generación de un ambiente de confianza y afinidad entre el entrevistador y el entrevistado.
      .tarjeta.color-secundario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img3.png' alt='AvatarTop')
          .col-12.p-4
            h4.text-center.text-white Análisis de documentos
            p.text-center.text-white.mb-0 Se reúnen documentos con el fin de ser analizados e interpretados.
      .tarjeta.color-secundario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img4.png' alt='AvatarTop')
          .col-12.p-4
            h4.text-center.text-white Discusión en pequeños grupos
            p.text-center.text-white.mb-0 Sesiones grupales y dirigidas.
      .tarjeta.color-secundario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img5.png' alt='AvatarTop')
          .col-12.p-4
            h4.text-center.text-white Dramatización
            p.text-center.text-white.mb-0 Proporciona información sobre la percepción que las personas tienen sobre diversos temas.
    p.mb-5(data-aos="fade-left") También se encuentran las técnicas cuantitativas. Las cuales son:
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-sm-10.col-md-6.col-lg-5.mb-4
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema3/img6.png")
          .crd_hover_txt--font
            .row.bg-c1.align-items-center
              .col.p-2
                h4.mb-0 Encuesta
            .row.bg-c2
              .col
                .p-2.p-lg-4
                  .row
                    .col
                      p.text-center Un cuestionario con preguntas que permitan aproximarse a la situación actual de estudio o análisis.
      .col-sm-10.col-md-6.col-lg-5.mb-4
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema3/img7.png")
          .crd_hover_txt--font
            .row.bg-c1.align-items-center
              .col.p-2
                h4.mb-0 Análisis de redes de comunicación
            .row.bg-c2
              .col
                .p-2.p-lg-4
                  .row
                    .col
                      p.text-center Se analiza cómo es la comunicación entre las personas, dentro de la organización.
    p.mb-5 Es así como la obtención de información viabiliza el uso de la misma para la toma de decisiones, a partir del análisis e interpretación y, para hacerlo, existen unas herramientas y técnicas, una vez que se cuente con el contenido del diagnóstico. A continuación, se esbozan algunas de estas herramientas.
    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img4.svg', style="width:20px")
      .col
        h3.mb-0 Instrumentos de análisis estratégico
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Existen instrumentos que apoyan y guían el levantamiento de la información necesaria para realizar un diagnóstico preciso y adecuado, porque en sí mismo, el diagnóstico es la herramienta de análisis. Contar con un diagnóstico integral impide cometer errores de forma reiterada o simplemente, generar acciones basadas en percepciones o creencias alejadas de la realidad, que terminan propiciando situaciones no deseadas.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img9.png', style="width:450px").m-auto
    
    p Algunos instrumentos de análisis estratégico son: 
    
    .tarjeta.tarjeta--amarilla.p-4.p-lg-5.mb-5(data-aos="fade-up")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h4 Análisis PEST
            p Puede ser utilizado para analizar el entorno en el que se quiere crear o establecer la empresa o proyecto, puesto que permite identificar cambios posibles en el entorno o en el sector, para detectar y capitalizar posibles oportunidades de crecimiento o expansión. El nombre PEST es un acrónimo que obedece a cuatro factores que se analizan: político, económico, sociocultural y tecnológico.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img5.svg', style="width:350px").m-auto
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h4 Análisis PESTEL
            p Es la herramienta que complementa a la anterior, en dos factores y, además de tener en cuenta las variables políticas, económicas, sociales y tecnológicas, se analizan también las ecológicas y las legales.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img2.svg', style="width:250px").m-auto
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h4 Análisis DOFA - FODA
            p Una herramienta de análisis estratégico que posibilita analizar la situación interna y externa de una empresa o proyecto; análogamente es como la fotografía de la empresa o el proyecto en un momento determinado de tiempo. El nombre de esta herramienta está representado por las siglas que significan: Fortalezas, Oportunidades, Debilidades y Amenazas. Las fortalezas y debilidades forman parte del análisis interno, de las cosas que se pueden controlar, mientras que las oportunidades y las amenazas hacen parte del análisis externo, es decir, de las cosas o variables que no dependen de la empresa y, por ende, no se pueden controlar.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img3.svg', style="width:350px").m-auto
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            h4 Factores claves de éxito (CSF)
            p Son aquellos objetivos generales que la organización debe alcanzar para cumplir con los objetivos estratégicos, pues su alineación y estrecha relación con la estrategia de la empresa es directa, y, por lo tanto, con alta influencia sobre los resultados estratégicos. Es decir que, si la empresa detecta estos factores críticos de éxito y logra potencializar sus resultados, esto materializará la generación de valor y resultados positivos, a nivel estratégico para la empresa. Por ejemplo, si se define como factor crítico de éxito el aumento de la conciencia de marca, termina siendo un objetivo ambicioso pero gran generador de valor y de presencia en el mercado. Para trabajar en el logro de este objetivo, es preciso y necesario que los equipos asignados para trabajar en el tema, puedan definir los indicadores claves de rendimiento (KPI) de manera cuantitativa, para tener claridad frente al panorama sobre lo que se debe hacer, cuándo y cómo.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img4.svg', style="width:350px").m-auto
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Los instrumentos de análisis representan entonces la posibilidad de obtener información que, en sí misma, no debe ser una decisión, sino que convoca a realizar interpretaciones del contexto y de las realidades que vive la empresa o el proyecto.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ahora bien, las matrices estratégicas son representaciones que muestran, de manera sintética, algunos parámetros o características para tener en cuenta en la toma de decisiones; es decir, definir la estrategia apropiada de intervención en función de las metas y los objetivos estratégicos de la empresa, teniendo en cuenta la situación del entorno, las capacidades internas y los recursos con los que se cuenta para proceder. Estas matrices combinan factores tanto internos, como externos, relacionados con la industria o el sector en el que se desenvuelve la empresa.
    p.mb-5(data-aos="fade-up") Con base en esta explicación, las matrices pueden venir de uno de los dos siguientes tipos:
    TabsC.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="Matrices de posicionamiento")
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img6.svg')
          .col-lg-6
            p Proporcionan la “posición” de un proyecto o empresa con referencia al entorno o al mercado en el que opera.
      .py-3.py-md-4(titulo="Matrices de evaluación")
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img7.svg')
          .col-lg-6
            p Proporcionan una valoración de aspectos internos o externos de la empresa, para proyectar una orientación acerca de la estrategia a emprender, de acuerdo con la realidad evidenciada.
    p.mb-5(data-aos="fade-right") Algunas de las matrices existentes, sirven para apoyar las diferentes etapas en las que se puede requerir el análisis estratégico; por ejemplo, hay matrices que resultan útiles para la recopilación de información, otras para el proceso de adaptación y otras para el proceso de decisión. 
    .row.justify-content-center(data-aos="fade-left")
      .col-10.bg-c3.p-4
        .row.align-items-center.justify-content-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img8.svg', style="width:60px").m-auto
          .col-lg.mb-4.mb-lg-0
            h4.mb-0 Matrices análisis estratégico
            p.mb-0 Para ampliar la información, lo invitamos a ver el documento Matrices análisis estratégico.
          .col-lg-auto
            a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank" type="application/pdf")
              span(style="color:#FFF") Descargar
              i.fas.fa-file-download(style="color:#FFF")

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
