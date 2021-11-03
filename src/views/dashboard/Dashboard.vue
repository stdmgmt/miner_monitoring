<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="12"
        md="12"
      >
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>
    
    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="12">
        <ecommerce-company-table :table-data="data.companyTable" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { getUserData } from '@/auth/utils'
import EcommerceStatistics from './EcommerceStatistics.vue'
import EcommerceCompanyTable from './EcommerceCompanyTable.vue'

export default {
  components: {
    BRow,
    BCol,

    EcommerceStatistics,
    EcommerceCompanyTable,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data

        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        // this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
