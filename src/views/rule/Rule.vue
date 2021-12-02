<template>
  <b-row>
    <b-col cols="12">
      <b-card-code title="Model">

        <!-- search input -->
        <div class="custom-search d-flex justify-content-end" style="margin-bottom: 15px !important;">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            style="margin-botton: 15px;"
            v-b-modal.modal-login
          >
            Add Model
          </b-button>
        </div>

        <!-- table -->
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :rtl="direction"
          :search-options="{
            enabled: true,
            externalQuery: searchTerm }"
          :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          }"
          :pagination-options="{
            enabled: true,
            perPage:pageLength
          }"
        >
          <template
            slot="table-row"
            slot-scope="props"
          >

            <!-- Column: Name -->
            <span
              v-if="props.column.field === 'fullName'"
              class="text-nowrap"
            >
              <!-- <b-avatar
                :src="props.row.avatar"
                class="mx-1"
              /> -->
              <span class="text-nowrap">{{ props.row.fullName }}</span>
            </span>

            <!-- Column: Status -->
            <span v-else-if="props.column.field === 'status'">
              <b-badge :variant="statusVariant(props.row.status)">
                {{ props.row.status }}
              </b-badge>
            </span>

            <!-- Column: Action -->
            <span v-else-if="props.column.field === 'action'">
              <span>
                <b-dropdown
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template v-slot:button-content>
                    <feather-icon
                      icon="MoreVerticalIcon"
                      size="16"
                      class="text-body align-middle mr-25"
                    />
                  </template>
                  <b-dropdown-item>
                    <feather-icon
                      icon="Edit2Icon"
                      class="mr-50"
                    />
                    <span v-b-modal.modal-login>Edit</span>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <feather-icon
                      icon="TrashIcon"
                      class="mr-50"
                    />
                    <span>Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
              </span>
            </span>

            <!-- Column: Common -->
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template>

          <!-- pagination -->
          <template
            slot="pagination-bottom"
            slot-scope="props"
          >
            <div class="d-flex justify-content-between flex-wrap">
              <div class="d-flex align-items-center mb-0 mt-1">
                <span class="text-nowrap ">
                  Showing 1 to
                </span>
                <b-form-select
                  v-model="pageLength"
                  :options="['3','5','10']"
                  class="mx-1"
                  @input="(value)=>props.perPageChanged({currentPerPage:value})"
                />
                <span class="text-nowrap"> of {{ props.total }} entries </span>
              </div>
              <div>
                <b-pagination
                  :value="1"
                  :total-rows="props.total"
                  :per-page="pageLength"
                  first-number
                  last-number
                  align="right"
                  prev-class="prev-item"
                  next-class="next-item"
                  class="mt-1 mb-0"
                  @input="(value)=>props.pageChanged({currentPage:value})"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
              </div>
            </div>
          </template>
        </vue-good-table>

      </b-card-code>
    </b-col>
    <b-col cols="12">
      <b-card-code title="Rule">

        <!-- search input -->
        <div class="custom-search d-flex justify-content-end" style="margin-bottom: 15px !important;">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            style="margin-botton: 15px;"
            v-b-modal.modal-select2
          >
            Add Rule
          </b-button>
        </div>

        <!-- table -->
        <vue-good-table
          :columns="columns2"
          :rows="rows2"
          :rtl="direction"
          :search-options="{
            enabled: true,
            externalQuery: searchTerm }"
          :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          }"
          :pagination-options="{
            enabled: true,
            perPage:pageLength
          }"
        >
          <template
            slot="table-row"
            slot-scope="props"
          >

            <!-- Column: Name -->
            <span
              v-if="props.column.field === 'fullName'"
              class="text-nowrap"
            >
              <!-- <b-avatar
                :src="props.row.avatar"
                class="mx-1"
              /> -->
              <span class="text-nowrap">{{ props.row.fullName }}</span>
            </span>

            <!-- Column: Status -->
            <span v-else-if="props.column.field === 'status'">
              <b-badge :variant="statusVariant(props.row.status)">
                {{ props.row.status }}
              </b-badge>
            </span>

            <!-- Column: Action -->
            <span v-else-if="props.column.field === 'action'">
              <span>
                <b-dropdown
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template v-slot:button-content>
                    <feather-icon
                      icon="MoreVerticalIcon"
                      size="16"
                      class="text-body align-middle mr-25"
                    />
                  </template>
                  <b-dropdown-item>
                    <feather-icon
                      icon="Edit2Icon"
                      class="mr-50"
                    />
                    <span v-b-modal.modal-login>Edit</span>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <feather-icon
                      icon="TrashIcon"
                      class="mr-50"
                    />
                    <span>Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
              </span>
            </span>

            <!-- Column: Common -->
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template>

          <!-- pagination -->
          <template
            slot="pagination-bottom"
            slot-scope="props"
          >
            <div class="d-flex justify-content-between flex-wrap">
              <div class="d-flex align-items-center mb-0 mt-1">
                <span class="text-nowrap ">
                  Showing 1 to
                </span>
                <b-form-select
                  v-model="pageLength"
                  :options="['3','5','10']"
                  class="mx-1"
                  @input="(value)=>props.perPageChanged({currentPerPage:value})"
                />
                <span class="text-nowrap"> of {{ props.total }} entries </span>
              </div>
              <div>
                <b-pagination
                  :value="1"
                  :total-rows="props.total"
                  :per-page="pageLength"
                  first-number
                  last-number
                  align="right"
                  prev-class="prev-item"
                  next-class="next-item"
                  class="mt-1 mb-0"
                  @input="(value)=>props.pageChanged({currentPage:value})"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
              </div>
            </div>
          </template>
        </vue-good-table>

      </b-card-code>
    </b-col>
    <!-- modal login-->
    <b-modal
      id="modal-login"
      cancel-variant="outline-secondary"
      ok-title="Add"
      cancel-title="Cancel"
      centered
      title="Add Model"
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
          <label for="password">Hash</label>
          <b-form-input
            type="text"
            placeholder="min, max"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Frequency</label>
          <b-form-input
            type="text"
            placeholder="min, max"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Watt</label>
          <b-form-input
            type="text"
            placeholder="min, max"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Status</label>
          <b-form-input
            type="text"
            placeholder="A or B or C"
          />
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- select 2 demo -->
    <b-modal
      id="modal-select2"
      title="Add Rule"
      ok-title="submit"
      cancel-variant="outline-secondary"
    >
      <b-form>
        <b-form-group
          label="Rule Name"
          label-for="name"
        >
          <b-form-input
            id="name"
            placeholder="Enter name"
          />
        </b-form-group>
        <b-form-group
          label="Choose the model"
          label-for="vue-select"
        >
          <v-select
            id="vue-select"
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="option"
          />
        </b-form-group>
        <b-form-group
          label="Hash"
          label-for="zip-code"
        >
          <b-form-input
            id="zip-code"
            type="text"
            placeholder="man, max"
          />
        </b-form-group>
        <b-form-group
          label="Watt"
          label-for="watt"
        >
          <b-form-input
            id="watt"
            type="text"
            placeholder="man, max"
          />
        </b-form-group>
        <b-form-group
          label="Frequency"
          label-for="freq"
        >
          <b-form-input
            id="freq"
            type="text"
            placeholder="man, max"
          />
        </b-form-group>
      </b-form>
    </b-modal>
  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BButton, BModal, VBModal, BForm, BFormInput, BFormGroup, BCardText,
  BRow, BCol, BAvatar, BBadge, BPagination, BFormSelect, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { VueGoodTable } from 'vue-good-table'
import Ripple from 'vue-ripple-directive'
import store from '@/store/index'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BForm,
    BFormInput,
    BCardText,
    BFormGroup,
    vSelect,
    BRow,
    BCol,
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormSelect,
    BDropdown,
    BDropdownItem,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: 'Name',
          field: 'fullName',
        },
        {
          label: 'Hash/Avg',
          field: 'email',
        },
        {
          label: 'Frequency',
          field: 'salary',
        },
        {
          label: 'Watt/avg',
          field: 'startDate',
        },
        {
          label: 'Status',
          field: 'status',
        },

        {
          label: 'Action',
          field: 'action',
        },
      ],
      columns2: [
        {
          label: 'Name',
          field: 'fullName',
        },
        {
          label: 'Hash',
          field: 'email',
        },
        {
          label: 'Watt',
          field: 'salary',
        },
        {
          label: 'Frequency',
          field: 'startDate',
        },
        {
          label: 'Exec',
          field: 'status',
        },

        {
          label: 'Action',
          field: 'action',
        },
      ],
      rows: [],
      rows2: [],
      searchTerm: '',
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info',
      }],
      selected: 'S19J',
      option: ['S19J', 'S9', 'L3'],
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current      : 'light-primary',
        Professional : 'light-success',
        Rejected     : 'light-danger',
        Resigned     : 'light-warning',
        Applied      : 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.$http.get('/good-table/basic')
      .then(res => { this.rows = res.data })
    this.$http.get('/good-table/basic2')
      .then(res => { this.rows2 = res.data })
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
