<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se conocerán las herramientas utilizadas para realizar el reconocimiento del estado interno y externo de las empresas a partir del diagnóstico; asimismo, los planes de acción a tomar, según los objetivos estratégicos, la programación, los indicadores de gestión y la cultura de calidad y de mejoramiento continuo (Sistema de Gestión de la Calidad), a partir de estándares internacionales que facilitan la evaluación de estos al interior de la empresa. El conocimiento de estas temáticas, llevará a una toma de decisiones, basada en criterios de calidad, de conocimiento del entorno y de estrategia. 
    p.mb-5(data-aos="fade-up") En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RwgcCyvZXNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
