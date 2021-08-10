<template>
  <div class="vaccine-details">
    <h2>VACCINE DETAILS</h2>
    <div v-if="event">
      <div class="q-pa-md flex flex-center">
        <q-card class="vaccine-card">
          <q-tabs v-model="tab" class="text-teal">
            <q-tab label="FIRST DOSE" name="one" />
            <q-tab label="SECOND DOSE" name="two" />
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PersonService from "@/services/PersonService.js";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  computed: {
    separateVaccine: function () {
      const length = this.event.vaccine.length;
      const array_slice = this.event.vaccine.slice();
      for (let i = 1; i <= length; i++) {
        const vaccine_dose2 = array_slice.slice(1);
        return vaccine_dose2;
      }
    },
  },
  created() {
    PersonService.getPerson(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setup() {
    return {
      tab: ref("one"),
    };
  },
};
</script>

<style>
.vaccine-details {
  text-align: center;
}
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