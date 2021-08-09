<template>
  <h1>Person List</h1>
  <div class="home">

    <Personcard v-for="data in datas" :key="data.id" :data="data" />

  </div>



</template>

<script>
// @ is an alias to /src
import Personcard from '@/components/Personcard.vue'
import PersonService from '@/services/PersonService.js'
export default {
  name: "PersonList",
  components: {
    Personcard,
  },
  data() {
    return {
   datas: null
    }
  },
  created(){
     // get events from mock db when component is created
  // axios
  // .get('http://localhost:3004/events')
  PersonService.getPersons()
  .then((response) => {
      this.datas = response.data
      })
.catch((error) => {
  console.log(error)
  })
  }

}
</script>
