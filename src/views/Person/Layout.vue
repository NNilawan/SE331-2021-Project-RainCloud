<template>
  <div class="q-pa-md q-gutter-sm">
    <router-link :to="{ name: 'PersonDetails', params: { id } }">
      <q-btn outline rounded color="primary" label="Person Details" />
    </router-link>
    <router-link :to="{ name: 'VaccineDetails', params: { id } }">
      <q-btn outline rounded color="primary" label="VaccineDetails" />
    </router-link>
    <router-link :to="{ name: 'DoctorRecommendation', params: { id } }">
      <q-btn outline rounded color="primary" label="Doctor Recommendation" />
    </router-link>
  </div>
</template>

<script>
import PersonService from "@/services/PersonService.js";
export default {
  name: "Layout",
  props: ["id"],
  data() {
    return {
      event: null,
    };
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
#sidebar {
  background-color: #2c6975;
  font-size: 23px;
}
#sidebar a {
  font-weight: bold;
  color: #979797;
  text-decoration: none;
}

#sidebar a.router-link-exact-active {
  color: #bbffe0;
}
</style>