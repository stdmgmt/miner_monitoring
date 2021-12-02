<template>
  <b-row>
    <b-col cols="12">
      <b-card-code title="Model">
        <div class="icon-search-wrapper my-3 mx-auto">
          <div class="navbar-container d-flex content align-items-center">
            <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
              <b-dropdown
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                split
                text="Select Rack"
                variant="primary"
                right
              >
                <b-dropdown-item>
                  A1
                </b-dropdown-item>
                <b-dropdown-item>
                  A2
                </b-dropdown-item>
                <b-dropdown-item>
                  A3
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>B1</b-dropdown-item>
                <b-dropdown-item>B2</b-dropdown-item>
                <b-dropdown-item>B3</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="navbar-nav nav align-items-center ml-auto">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                style="margin-botton: 15px;"
              >
                Add Model
              </b-button>
            </div>
          </div>
        </div>
        <div
          id="icons-container"
          class="d-flex flex-wrap"
        >
          <!-- add modal -->
          <b-row class="match-height">
            <b-col
              lg="6"
              md="6"
            >
              <card-advance-app-design />
            </b-col>
            <b-col
              lg="6"
              md="6"
            >
              <card-advance-app-design />
            </b-col>
          </b-row>
        </div>
      </b-card-code>
    </b-col>
  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BRow, BCol, BButton, BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue'
import CardAdvanceAppDesign from './CardAdvanceAppDesign.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BCardCode,
    BButton,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    CardAdvanceAppDesign,
  },
  directives: {
    Ripple,
  },
}
</script>

<style>

</style>
