<template>
  <div>
    <b-card title="Kick start your project 🚀">
      <b-card-text>All the best for your new project.</b-card-text>
      <b-card-text>Please make sure to read our <b-link
        href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/"
        target="_blank"
      >
        Template Documentation
      </b-link> to understand where to go from here and how to use our template.</b-card-text>
    </b-card>

    <b-card title="Want to integrate JWT? 🔒">
      <b-card-text>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</b-card-text>
      <b-card-text>Please read our  JWT Documentation to get more out of JWT authentication.</b-card-text>
    </b-card>
  </div>
  <!-- <section id="home">
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
        <ecommerce-medal :data="data.congratulations" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>
  </section> -->
</template>

<script>
import { BRow, BCol, BCard, BCardText, BLink } from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
  },
}
</script>

<style>

</style>
