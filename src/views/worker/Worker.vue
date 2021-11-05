<template>
  <section id="dashboard-analytics">
    <b-row>
      <b-col cols="12">
        <invoice-list />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'

export default {
  components: {
    BRow,
    BCol,
    InvoiceList,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
      .then(response => { this.data = response.data })
  },
}
</script>
