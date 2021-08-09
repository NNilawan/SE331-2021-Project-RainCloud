<template>
  <div v-if="data">
    <h1>{{ data.name }}</h1>
    <p>{{ data.name }} on {{ data.surname }} @ {{ data.hometown }}</p>
    <p>{{ data.picture }}</p>
  </div>
</template>

<script>
import PersonService from '@/services/PersonService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    PersonService.getPerson(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
