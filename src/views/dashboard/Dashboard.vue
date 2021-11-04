<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="12"
        md="12"
      >
        <ecommerce-statistics :data="data.status.statisticsItems" />
      </b-col>
    </b-row>
    
    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="12">
        <ecommerce-company-table :table-data="data.status.companyTable" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <!-- <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.earning.subscribersGained"
          icon="UsersIcon"
          :statistic="kFormatter(data.earning.subscribersGained.analyticsData.subscribers)"
          statistic-title="BTC "
          :chart-data="data.earning.subscribersGained.series"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="data.earning.ordersRecevied"
          icon="PackageIcon"
          color="warning"
          :statistic="kFormatter(data.earning.ordersRecevied.analyticsData.orders)"
          statistic-title="Orders Received"
          :chart-data="data.earning.ordersRecevied.series"
        />
      </b-col> -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-earnings-chart :data="data.status.earningsChart" />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-earnings-chart2 :data="data.status.earningsChart" />
      </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-earnings-chart3 :data="data.status.earningsChart" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { getUserData } from '@/auth/utils'
// import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
// import { kFormatter } from '@core/utils/filter'
import EcommerceStatistics from './EcommerceStatistics.vue'
import EcommerceCompanyTable from './EcommerceCompanyTable.vue'
import EcommerceEarningsChart from './EcommerceEarningsChart.vue'
import EcommerceEarningsChart2 from './EcommerceEarningsChart2.vue'
import EcommerceEarningsChart3 from './EcommerceEarningsChart3.vue'

export default {
  components: {
    BRow,
    BCol,

    EcommerceStatistics,
    EcommerceCompanyTable,
    EcommerceEarningsChart,
    EcommerceEarningsChart2,
    EcommerceEarningsChart3,
    // StatisticCardWithAreaChart,
  },
  data() {
    return {
      data: {
        status: {},
        earning: {}
      },
    }
  },
  created() {
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data.status = response.data

        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        // this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
    // this.$http.get('/analytics/data')
    //   .then(response => {
    //     this.data.earning = response.data 
    //     console.log('aa', this.data)
    //     })
  },
  // methods: {
  //   kFormatter,
  // },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
