<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" >
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Name: </div>
        <div class="text-subtitle2">Status: first dose</div>
      </q-card-section>
    </q-card>
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
};
</script>
