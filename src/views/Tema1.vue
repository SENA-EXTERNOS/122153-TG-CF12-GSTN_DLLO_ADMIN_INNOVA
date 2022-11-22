<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Modelos gerenciales tradicionales y contemporáneos
    figure(data-aos="fade-up")
      img(src='@/assets/curso/tema1/img1.svg')
    p(data-aos="fade-right") Para dar inicio a este tema se definirán los modelos gerenciales como estrategias de gestión operativa de administración, los cuales son necesarios para dar dirección a la empresa. Si bien existen varias corrientes de pensamiento administrativo, cada una de ellas no responde estrictamente a un modelo gerencial; sin embargo, sí hay diferentes tipos y modelos gerenciales que pueden denominarse tradicionales o contemporáneos, según la afinidad de sus enfoques.
    p.mb-5 Esos tipos de modelos gerenciales son los siguientes:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row.align-items-center(titulo="Planificación estratégica")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img2.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Este modelo se encarga de estructurar el proceso administrativo de manera formal, organizando todas las líneas de acción que permitan a la empresa alcanzar los objetivos estratégicos. Busca que, al ser aplicado adecuadamente, las directivas puedan realizar un planteamiento de acciones que conlleven al éxito de los proyectos.
      .row.align-items-center(titulo="Calidad total o excelencia")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img3.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Está encaminado a llegar a la satisfacción plena del cliente o grupos de interés, a través del mejoramiento continuo y el logro de la calidad máxima. Es un modelo de competitividad, que busca garantizar procesos de producción de forma continua y que posibiliten a una empresa obtener los mejores estándares de calidad (certificación ISO).
      .row.align-items-center(titulo="Reingeniería")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img4.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Modelo que hace alusión a un conjunto de actividades o tareas que propician la salida de productos con valor agregado. Se gestionan los procesos en lugar de las funciones y se realizan cambios radicales (empezar de nuevo) con el propósito de mejorar y hacer las cosas de manera más eficiente.
      .row.align-items-center(titulo="Justo a tiempo")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img5.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Este modelo representa un sistema de producción para fábricas que buscan el crecimiento limpio, seguro y organizado; un lugar cómodo de trabajo, garantizando la entrega adecuada y a tiempo, de los productos. Determina la eficiencia de su proceder muy orientada al tiempo y a la eficacia en su utilización.
      .row.align-items-center(titulo="<em>Kaizen</em> o mejoramiento continuo")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img6.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Modelo encaminado al mejoramiento armónico de todas las áreas de la empresa y sus componentes; tiene por objetivo la maximización de la producción a través de la mejora permanente del esquema productivo empresarial, minimizando las ineficiencias, para incrementar la competitividad de la empresa en el mercado.
      .row.align-items-center(titulo="<em>Outsourcing</em>")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img7.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Modelo que implementa un sistema de contratación externa de mano de obra para realizar determinados procesos; representa la acción de tercerizar servicios, es decir, de encargar a otra empresa para desarrollar procesos que permitan alivianar la carga de trabajos realizados al interior de la empresa y así encaminarse a ascender en productividad y eficiencia.
      .row.align-items-center(titulo="<em>Empowerment</em>")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img8.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Este modelo de gestión, asimila un concepto de liderazgo fundamentado en desarrollar las capacidades de los colaboradores para que, de esta forma, puedan desempeñar sus funciones y su trabajo eficientemente. A partir de ahí, las directivas de la empresa tienen más tiempo para destinar en la llegada o creación de nuevos proyectos y en las mejoras de la empresa; por su parte los colaboradores pueden mejorar sus competencias profesionales.
      .row.align-items-center(titulo="<em>Benchmarking</em>")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img9.svg', style="width: 80px").m-auto
        .col
          p.mb-0 Se refiere a modelos basados en la competencia, su medición y comparación frente a ella, tomando como referencia la situación de los demás y aprendiendo a partir de la experiencia. Esta dinámica ayuda a las empresas a mantenerse a la vanguardia y adaptarse al cambio con más naturalidad.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Ahora bien, los modelos gerenciales son importantes porque determinan la manera de operar una estrategia; sin embargo, estos modelos deben estar acompañados por una estructura organizacional que permita el fluir de la información, la garantía de las responsabilidades que se asumen desde cada área y la capacidad para dar respuesta a la demanda de información o sucesos, según el modelo gerencial que se adopte.
      
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
