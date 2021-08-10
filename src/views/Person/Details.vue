<template>
  <div class="detail">
    <h2>PERSONAL DETAILS</h2>
    <div v-if="event">
      <div class="q-pa-md row items-start q-gutter-md flex flex-center">
        <q-card class="my-card">
          <q-card-section horizontal>
            <q-img :src="event.picture">
              <div class="text-h4 absolute-bottom text-right">
                NAME: {{ event.name }} {{ event.surname }}
              </div>
            </q-img>
          </q-card-section>
          <q-card-section class="text-left">
            <div class="text-h5">STATUS: {{ dose1 }} {{ dose2 }}</div>
            <div class="text-h5">AGE: {{ event.age }}</div>
            <div class="text-h6">HOMETOWN: {{ event.hometown }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import PersonService from "@/services/PersonService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  computed: {
    dose1: function () {
      var dose1 = this.event.status_does1;
      if (dose1 === true) {
        return "Dose1: Get the first dose";
      } else {
        return " ";
      }
    },
    dose2: function () {
      var dose2 = this.event.status_does2;
      if (dose2 === true) {
        return ", Dose2: Get the second dose";
      } else {
        return " ";
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
};
</script>



<style>
.menu {
  margin-top: -50px;
}

.detail {
  text-align: center;
}
.my-card {
  max-width: 700px !important;
  width: 100%;
  max-width: 350px;
}
</style>

