<template>
  <div class="q-pa-md flex flex-center">
    <q-card class="vaccine-card">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="secondary"
        indicator-color="secondary"
      >
        <q-tab label="FIRST DOSE" name="one" />
        <q-tab
          label="SECOND DOSE"
          name="two"
          :disable="event.vaccine.length == 1"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated id="text-details">
        <q-tab-panel
          name="one"
          v-for="vaccine in event.vaccine"
          :key="vaccine.id"
        >
          <q-card-section class="text-left">
            <p>
              NAME: <span id="text-color">{{ vaccine.name }}</span>
            </p>
            <p>
              DATE: <span id="text-color">{{ vaccine.date }}</span>
            </p>
            <p>
              TIME: <span id="text-color">{{ vaccine.time }}</span>
            </p>
            <p>
              PLACE: <span>{{ vaccine.place }}</span>
            </p>
          </q-card-section>
        </q-tab-panel>

        <q-tab-panel
          name="two"
          v-for="vaccine in separateVaccine"
          :key="vaccine.id"
        >
          <q-card-section class="text-left">
            <p>
              NAME: <span id="text-color">{{ vaccine.name }}</span>
            </p>
            <p>
              DATE: <span id="text-color">{{ vaccine.date }}</span>
            </p>
            <p>
              TIME: <span id="text-color">{{ vaccine.time }}</span>
            </p>
            <p>
              PLACE: <span>{{ vaccine.place }}</span>
            </p>
          </q-card-section>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["event"],
  computed: {
    separateVaccine: function () {
      const length = this.event.vaccine.length;
      const array_slice = this.event.vaccine.slice();
      let vaccine_dose2 = null;
      for (let i = 1; i <= length; i++) {
        vaccine_dose2 = array_slice.slice(1);
      }
      return vaccine_dose2;
    },
  },
  setup() {
    return {
      tab: ref("one"),
    };
  },
};
</script>

<style>
.vaccine-card {
  border-radius: 10px !important;
  width: 100%;
  max-width: 600px;
  border: 1px solid #68b2a0;
}
#text-details {
  font-size: 20px;
}
#text-color {
  color: #2c6975;
}
.q-tab__label {
  font-size: 25px !important;
}
</style>