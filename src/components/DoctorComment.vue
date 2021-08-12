<template>
  <div>
    <!-- <div class="q-pa-md row items-start q-gutter-md col-6">
      <ul> -->
        <q-card-section
          class="textbox"
          v-for="(review, index) in reviews"
          :key="index"
        >
          <div class="text-h6">
            Doctor Name:
            {{ review.name }} | Time: {{ review.time }}
            <br />
          </div>
          <div class="text-h5">
            Doctor recommend that:
            <br />
            {{ review.question }}
            <br />
          </div>
        </q-card-section>
      <!-- </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  inject: ['GStore'],
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
};
</script>
<style scoped>
.textbox {
  border-radius: 10px !important;
  width: 100%;
  max-width: 600px;
  /* border: 5px solid #68b2a0; */
  border: 3px solid white;
  text-align: left;
  margin: auto;
  padding: 20px 20px;
  background-color: #68b2a0;
}
</style>
