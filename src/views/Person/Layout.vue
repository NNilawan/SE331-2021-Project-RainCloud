<template>
  <div v-if="event">
    <div class="title">
      <h2>{{ title }}</h2>
      <div class="q-pa-md nav flex flex-center">
        <q-item id="nav-btn" class="q-gutter-md">
          <router-link :to="{ name: 'PersonDetails', params: { id } }">
            <q-item clickable v-ripple id="nav-content">
              <q-section>
                <span class="material-icons-outlined"> account_circle </span>
                Person Details
              </q-section>
            </q-item>
          </router-link>

          <router-link :to="{ name: 'VaccineDetails', params: { id } }">
            <q-item clickable v-ripple id="nav-content">
              <q-section>
                <q-icon name="vaccines" />
                Vaccine Details
              </q-section>
            </q-item>
          </router-link>

          <router-link :to="{ name: 'DoctorRecommendation', params: { id } }">
            <q-item clickable v-ripple id="nav-content">
              <q-section>
                <span class="material-icons-outlined"> reviews </span>
                Doctor Recommendation
              </q-section>
            </q-item>
          </router-link>
        </q-item>
      </div>
      <router-view :event="event" />
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
      isActive: true,
    };
  },
  computed: {
    title() {
      let title_name = "";
      if (this.$route.name == "PersonDetails") {
        title_name = "PERSON DETAILS";
      }
      if (this.$route.name == "VaccineDetails") {
        title_name = "VACCINE DETAILS";
      }
      if (this.$route.name == "DoctorRecommendation") {
        title_name = "DOCTOR RECOMMENDATION";
      }
      return title_name;
    },
  },
  created() {
    PersonService.getPerson(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "person" },
          });
        } else {
          return { name: "NetworkError" };
        }
      });
  },
  setup() {
    return {
      model: ref("one"),
      secondModel: ref("one"),
    };
  },
};
</script>

<style>
.title {
  text-align: center;
}

.nav {
  margin-top: -50px;
}

#nav-btn {
  background-color: transparent;
  font-size: 23px;
}

#nav-btn a {
  font-weight: bold;
  color: #fd9927;
  text-decoration: none;
}

#nav-btn a.router-link-exact-active {
  color: #ffffff;
  background-color: #fd9927;
  border-radius: 35px;
}

#nav-content {
  border: 2px solid #fd9927;
  border-radius: 35px;
}

.block {
  font-size: 20px;
}
</style>