<template>
  <b-card class="card-app-design">
    <b-badge variant="light-primary">
      <h3 class="text-primary">A1</h3>
    </b-badge>
    <div class="design-group d-flex"></div>
    <!--/ design group -->
    <div class="d-flex">
      <div
        @click.prevent="selectRack(1)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-001</span>
      </div>
      <div v-if="selected ===1" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(2)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-002</span>
      </div>
      <div v-if="selected ===2" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(3)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-003</span>
      </div>
      <div v-if="selected ===3" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(4)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-004</span>
      </div>
      <div v-if="selected ===4" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(5)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-005</span>
      </div>
      <div v-if="selected ===5" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(6)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-006</span>
      </div>
      <div v-if="selected ===6" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="d-flex">
      <div
        @click.prevent="selectRack(7)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-007</span>
      </div>
      <div v-if="selected ===7" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(8)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-008</span>
      </div>
      <div v-if="selected ===8" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(9)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-009</span>
      </div>
      <div v-if="selected ===9" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(10)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-010</span>
      </div>
      <div v-if="selcted ===10" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(11)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-011</span>
      </div>
      <div v-if="selected ===11" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(12)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-012</span>
      </div>
      <div v-if="selected ===12" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="d-flex">
      <div
        @click.prevent="selectRack(13)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-013</span>
      </div>
      <div v-if="selected ===13" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(14)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-014</span>
      </div>
      <div v-if="selected ===14" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(15)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-015</span>
      </div>
      <div v-if="selected ===15" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(16)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-016</span>
      </div>
      <div v-if="selected ===16" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(17)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-017</span>
      </div>
      <div v-if="selected ===17" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(18)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-018</span>
      </div>
      <div v-if="selected ===18" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="d-flex">
      <div
        @click.prevent="selectRack(19)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-019</span>
      </div>
      <div v-if="selected ===19" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(20)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-020</span>
      </div>
      <div v-if="selected ===20" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(21)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-021</span>
      </div>
      <div v-if="selected ===21" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(22)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-022</span>
      </div>
      <div v-if="selected ===22" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(23)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-023</span>
      </div>
      <div v-if="selected ===23" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(24)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-024</span>
      </div>
      <div v-if="selected ===24" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="d-flex">
      <div
        @click.prevent="selectRack(25)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-025</span>
      </div>
      <div v-if="selected ===25" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(26)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-026</span>
      </div>
      <div v-if="selected ===26" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(27)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-027</span>
      </div>
      <div v-if="selected ===27" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(28)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-028</span>
      </div>
      <div v-if="selected ===28" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(29)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-029</span>
      </div>
      <div v-if="selected ===29" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(30)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-030</span>
      </div>
      <div v-if="selected ===30" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="d-flex">
      <div
        @click.prevent="selectRack(31)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-031</span>
      </div>
      <div v-if="selected ===31" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(32)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-032</span>
      </div>
      <div v-if="selected ===32" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(33)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-033</span>
      </div>
      <div v-if="selected ===33" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(34)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-034</span>
      </div>
      <div v-if="selected ===34" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(35)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-035</span>
      </div>
      <div v-if="selected ===35" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(36)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-036</span>
      </div>
      <div v-if="selected ===36" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <!-- button -->
    <!-- <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      block
    >
      Join Team
    </b-button> -->
    <!-- modal login-->
    <b-modal
      id="modal-config"
      cancel-variant="outline-secondary"
      ok-title="Save change"
      cancel-title="Cancel"
      centered
      title="Modfig Rack"
    >
      <b-form>
        <b-form-group>
          <label for="email">Name:</label>
          <b-form-input
            id="name"
            type="text"
            value="S19J Pro"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Location</label>
          <b-form-input
            type="text"
            value="3rd floor"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">heigh</label>
          <b-form-input
            type="text"
            value="3"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">weight</label>
          <b-form-input
            type="text"
            value="5"
          />
        </b-form-group>
      </b-form>
    </b-modal>
    <!-- modal login-->
    <b-modal
      id="modal-worker"
      cancel-variant="outline-secondary"
      ok-title="Save change"
      cancel-title="Cancel"
      centered
      title="Mount worker"
    >
      <b-form>
        <b-form-group>
          <label for="email">Name:</label>
          <b-form-input
            id="name"
            type="text"
            placeholder="A1-01"
          />
        </b-form-group>
        <b-form-group
          label="Choose the worker"
          label-for="vue-select"
        >
          <v-select
            id="vue-select"
            v-model="workerd"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="option"
          />
        </b-form-group>
      </b-form>
    </b-modal>
  </b-card>
</template>

<script>
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
import {
  BCard, BBadge, BCardTitle, BCardText, BAvatar, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BDropdown,
  BDropdownItem, VBModal, BForm, BFormInput, BFormGroup,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardActions,
    BCard,
    BBadge,
    BButton,
    BAvatar,
    BCardTitle,
    BCardText,
    BCollapse,
    BListGroup,
    BListGroupItem,
    BDropdown,
    BDropdownItem,
    vSelect,
    BForm,
    BFormInput,
    BFormGroup,
  },
  directives: {
    'b-toggle': VBToggle,
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      selected: 0,
      fields: [
        'ACTION',
        { key: 'ICON', label: 'ICON' },
        'DETAILS',
      ],
      items: [
        { ACTION: 'Collapse', ICON: 'ChevronDownIcon', DETAILS: 'Collapse card content using collapse action.' },
        { ACTION: 'Refresh Content', ICON: 'RotateCwIcon', DETAILS: 'Refresh your card content using refresh action.' },
      ],
      workerd: 'A1-001',
      option: ['worker100', 'worker101', 'worker102'],
    }
  },
  methods: {
    // stop refreshing card in 3 sec
    refreshStop(cardName) {
      setTimeout(() => {
        this.$refs[cardName].showLoading = false
      }, 3000)
    },
    selectRack(num) {
      console.log('n', num)
      if (this.selected === num) {
        this.selected = 0
      } else {
        this.selected = num
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/ui-feather.scss';
</style>
