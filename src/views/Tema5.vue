<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Informes organizacionales
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Finalizamos con los informes organizacionales. Recordemos que existen diversos planes que materializan la actividad y la reacción que debe tener una empresa para hacer realidad su objetivo. Esas acciones y esas mejoras que deben surgir del proceso de seguimiento, evaluación y control, deben ser documentadas y tomadas en cuenta a la hora de las decisiones; este ciclo está relacionado con el P-H-V-A (Planear, Hacer, Verificar, Actuar).
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img1.png', style="width:450px").m-auto
      .col-lg-7(data-aos="fade-left")
        p Ahora bien, existen metodologías y técnicas como la auditoría, parte fundamental de la gestión empresarial. La auditoría consiste en someter a análisis el actuar de un proceso, empresa o proyecto, para conocer de primera mano y con precisión, sus particularidades y fallos. Existen auditorías internas, que son aquellas que se producen al interior de la empresa, donde los auditores son colaboradores de la empresa que se preparan para desempeñar esa función; las auditorías externas, que son realizadas por auditores ajenos a la empresa, pero que pueden ser contratados por la misma, para garantizar la objetividad en el seguimiento, y la auditoría pública, que también es externa, pero desarrollada por una entidad pública por petición de un organismo público. Del desarrollo de las auditorías surge un informe, que es conocido como el documento que aporta datos de calidad muy importantes sobre el estado de la empresa, y, en consecuencia, permite alertar si se debe proceder con premura en las decisiones.
    p.mb-5(data-aos="fade-down") El informe de auditoría debe ser realizado por el auditor y puede presentar resultados asociados a los “hallazgos” que son generalmente no conformidades (incumplimientos), y por parte de la empresa, plantear las siguientes acciones:
    .row.justify-content-center.mb-1(data-aos="fade-right")
      .col-sm-10.col-md-6.col-lg-5.mb-4
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema6/img2.png")
          .crd_hover_txt--font
            .row.bg-c1.align-items-center
              .col.p-2
                h4.mb-0 Acciones preventivas
            .row.bg-c2
              .col
                .p-2.p-lg-4
                  .row
                    .col
                      p.text-center Son aquellas que se pueden tomar para prevenir una falla en el proceso, o un error en el procedimiento.
      .col-sm-10.col-md-6.col-lg-5.mb-4
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema6/img3.png")
          .crd_hover_txt--font
            .row.bg-c1.align-items-center
              .col.p-2
                h4.mb-0 Acciones correctivas
            .row.bg-c2
              .col
                .p-2.p-lg-4
                  .row
                    .col
                      p.text-center Son aquellas que se toman, pero ya luego de haber ocurrido la falla o el error en el procedimiento, y resulta necesario corregir y evitar recurrencia en la acción.
    p.mb-5(data-aos="fade-left") Tener presente: toda acción o estrategia que se emprenda para mejorar los procesos, aporta al funcionamiento adecuado de las empresas y todo ello se traduce en la permanencia, estabilidad y sostenibilidad de las organizaciones, ofertando en el mercado productos y servicios de calidad, a partir de la transparencia y perfeccionamiento de sus procesos.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados y material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema6',
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
