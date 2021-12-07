<template>
  <b-row>
    <b-col cols="12">
      <b-card-code title="Rack">
        <div class="m-2">
          <div class="row">
            <div class="d-flex align-items-center justify-content-start mb-1 mb-md-0 col-md-6 col-12">
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
            </div>
            <div class="col-md-6 col-12">
              <div class="d-flex align-items-center justify-content-end">
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  style="margin-botton: 15px;"
                  v-b-modal.modal-racks
                >
                  Add Rack
                </b-button>
              </div>
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
              <card-advance-app-design2 />
            </b-col>
          </b-row>
        </div>
      </b-card-code>
    </b-col>

    <!-- modal login-->
    <b-modal
      id="modal-racks"
      cancel-variant="outline-secondary"
      ok-title="Add"
      cancel-title="Cancel"
      centered
      title="Add Rack"
    >
      <b-form>
        <b-form-group>
          <label for="email">Name:</label>
          <b-form-input
            id="name"
            type="text"
            placeholder="S19J Pro"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Location</label>
          <b-form-input
            type="text"
            placeholder="1st floor"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">height</label>
          <b-form-input
            type="text"
            placeholder="3"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">weight</label>
          <b-form-input
            type="text"
            placeholder="5x"
          />
        </b-form-group>
      </b-form>
    </b-modal>
  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BRow, BCol, BButton, BDropdown, BDropdownItem, BDropdownDivider, VBModal, BForm, BFormInput, BFormGroup } from 'bootstrap-vue'
import CardAdvanceAppDesign from './CardAdvanceAppDesign.vue'
import CardAdvanceAppDesign2 from './CardAdvanceAppDesign2.vue'
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
    CardAdvanceAppDesign2,
    BForm,
    BFormInput,
    BFormGroup,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
