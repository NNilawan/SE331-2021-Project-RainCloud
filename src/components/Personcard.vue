<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <router-link
    class="event-link"
    :to="{ name: 'PersonDetails', params: { id: data.id } }"
  >
    <q-card class="my-card" >
      <img v-bind:src=data.picture>

      <q-card-section>
        <div class="text-h4">Name: {{ data.name }} {{ data.surname }}</div>
        <div class="text-h5">Status: {{vaccine}}</div>
      </q-card-section>
    </q-card>
      </router-link>
  </div>
</template>

<style>
.my-card{
width: 100%;
  max-width: 250px;
 color: white;
border-radius: 30px !important;
background-color: #68b2a0 !important; 
text-align: center;
}
  
</style>

<script>
export default {
  name: "Personcard",
  props: {
  	data: {
   		type: Object,
    	required: true
      }
   },
   computed: {
    vaccine: function () {
      var dose2 = this.data.status_does2;
      if (dose2 === true) {
        return "Already get second dose";
      } else {
        return "Get the first dose";
      }
    },
  },
}
</script>
