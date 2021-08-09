<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card" >
      <q-card-section >
        <q-img
          class="col-5"
          src="https://i.ibb.co/4tjMx4R/55.jpg"
        ><div class="text-h6 absolute-bottom text-right"> NAME: John Doe </div>
        </q-img>
    <q-card-section >
        <div class="text-h5">STATUS: </div>
        <div class="text-h5">AGE: </div>
        <div class="text-h6">HOMETOWN:</div>
      </q-card-section>
    </q-card-section>

    </q-card>
  </div>
</template>

<style>
/* .q-img {
    width: 500px !important;
    height: 500px !important;
    } */
.my-card {
  width: 100%;
  max-width: 350px;
}
  
</style>

<script>
export default {
  name: "HelloWorld",
};
</script>
