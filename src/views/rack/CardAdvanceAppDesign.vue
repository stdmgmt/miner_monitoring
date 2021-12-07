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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(8)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-009</span>
      </div>
      <div v-if="selected ===9" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(10)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0010</span>
      </div>
      <div v-if="selected ===10" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(11)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0011</span>
      </div>
      <div v-if="selected ===11" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(12)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0012</span>
      </div>
      <div v-if="selected ===12" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(15)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0015</span>
      </div>
      <div v-if="selected ===15" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(16)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0016</span>
      </div>
      <div v-if="selected ===16" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(17)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0017</span>
      </div>
      <div v-if="selected ===17" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(18)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-0018</span>
      </div>
      <div v-if="selected ===18" class="mt-1">
        <b-list-group>
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
        </b-list-group>
      </div>
    </div>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
          <b-list-group-item>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item>Config</b-list-group-item>
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
  </b-card>
</template>

<script>
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
import {
  BCard, BBadge, BCardTitle, BCardText, BAvatar, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
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
  },
  directives: {
    'b-toggle': VBToggle,
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
