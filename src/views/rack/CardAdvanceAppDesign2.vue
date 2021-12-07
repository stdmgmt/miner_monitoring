<template>
  <b-card class="card-app-design">
    <b-badge variant="light-primary">
      <h3 class="text-primary">A2</h3>
    </b-badge>
    <div class="design-group d-flex"></div>
    <!--/ design group -->
    <div class="d-flex">
      <div
        @click.prevent="selectRack(37)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-037</span>
      </div>
      <div v-if="selected ===37" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(38)"
        style="cursor: pointer;"
        class="text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-038</span>
      </div>
      <div v-if="selected ===38" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(39)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-039</span>
      </div>
      <div v-if="selected ===39" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(40)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-040</span>
      </div>
      <div v-if="selected ===40" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(41)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-041</span>
      </div>
      <div v-if="selected ===41" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(42)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===42" class="mt-1">
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
        @click.prevent="selectRack(43)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-043</span>
      </div>
      <div v-if="selected ===43" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(44)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-044</span>
      </div>
      <div v-if="selected ===44" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(45)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-045</span>
      </div>
      <div v-if="selected ===45" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(46)"
        style="cursor: pointer;"
        class="text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-046</span>
      </div>
      <div v-if="selected ===46" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(47)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-047</span>
      </div>
      <div v-if="selected ===47" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(48)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-048</span>
      </div>
      <div v-if="selected ===48" class="mt-1">
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
        @click.prevent="selectRack(49)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-049</span>
      </div>
      <div v-if="selected ===50" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(51)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-051</span>
      </div>
      <div v-if="selected ===51" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(52)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-052</span>
      </div>
      <div v-if="selected ===52" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(53)"
        style="cursor: pointer;"
        class="text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-053</span>
      </div>
      <div v-if="selected ===53" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(55)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-055</span>
      </div>
      <div v-if="selected ===55" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(56)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-056</span>
      </div>
      <div v-if="selected ===56" class="mt-1">
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
        @click.prevent="selectRack(57)"
        style="cursor: pointer;"
        class="dropbown text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <span>A1-057</span>
      </div>
      <div v-if="selected ===57" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(58)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-058</span>
      </div>
      <div v-if="selected ===58" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(59)"
        style="cursor: pointer;"
        class="text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-059</span>
      </div>
      <div v-if="selected ===59" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(60)"
        style="cursor: pointer;"
        class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-060</span>
      </div>
      <div v-if="selected ===60" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(61)"
        style="cursor: pointer;"
        class="text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <span>A1-061</span>
      </div>
      <div v-if="selected ===61" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(62)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===62" class="mt-1">
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
        @click.prevent="selectRack(63)"
        style="cursor: pointer;"
        class="dropbown text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===63" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(64)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===64" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(65)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===65" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(66)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===66" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(67)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===67" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(68)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===68" class="mt-1">
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
        @click.prevent="selectRack(69)"
        style="cursor: pointer;"
        class="dropbown text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
      >
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===69" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(70)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===70" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(71)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===71" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(72)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===72" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(73)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===73" class="mt-1">
        <b-list-group>
          <b-list-group-item v-b-modal.modal-worker>Mount/Unmount</b-list-group-item>
          <b-list-group-item>Restart</b-list-group-item>
          <b-list-group-item>Reboot</b-list-group-item>
          <b-list-group-item>Shut down</b-list-group-item>
          <b-list-group-item v-b-modal.modal-config>Config</b-list-group-item>
        </b-list-group>
      </div>
      <div
        @click.prevent="selectRack(74)"
        style="cursor: pointer;"
        class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
        <feather-icon
          icon="PlusIcon"
          size="24"
        />
      </div>
      <div v-if="selected ===74" class="mt-1">
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
