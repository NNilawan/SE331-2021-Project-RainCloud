<template>
  <div v-if="event">
    <div class="head">
      <h2>PERSONAL DETAILS</h2>
      <div class="q-pa-md q-gutter-sm nav-btn flex flex-center">
        <router-link :to="{ name: 'PersonDetails', params: { id } }">
          <q-btn
            @click="checkActive"
            :class="[isActive ? 'active' : '']"
            rounded
            color="orange"
            label="Person Details"
          />
        </router-link>
        <router-link :to="{ name: 'VaccineDetails', params: { id } }">
          <q-btn
            @click="checkActive"
            :class="[isActive ? 'active' : '']"
            outline
            rounded
            color="orange"
            label="Vaccine Details"
          />
        </router-link>
        <router-link :to="{ name: 'DoctorRecommendation', params: { id } }">
          <q-btn
            @click="checkActive"
            :class="[isActive ? 'active' : '']"
            outline
            rounded
            color="orange"
            label="Doctor Recommendation"
          />
        </router-link>
      </div>
      <router-view :event="event" />
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
      isActive: true,
    };
  },
  computed: {
    checkActive: function () {
      let check = this.isActive;
      if (check) {
        check = false;
      } else {
        check = true;
      }
      return check;
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
  /* created() {
    PersonService.getPerson(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
           this.$router.push({
            name: '404Resource',
            params: { resource: 'person' }
          })
        } else {
          return { name: "NetworkError" };
        }
      });
  },
}; */
};
</script>

<style>
.nav-btn a {
  text-decoration: none;
      margin-top: -50px;
}

.head{
  text-align: center;
}

.block {
  font-size: 20px;
}
</style>