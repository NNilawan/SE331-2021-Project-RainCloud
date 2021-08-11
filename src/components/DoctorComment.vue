<template>
  <div class="q-pa-md row items-start q-gutter-md col-6">
      <ul> 
        <ul v-for="(review, index) in reviews" :key="index">
          Doctor Name:
          {{ review.name }} | 
          Time: {{ review.time }}
          <br />
         
          Doctor recommend that:
          <br />
          {{ review.question}}
          <br />
        </ul>
    </ul> 
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
};
</script>
