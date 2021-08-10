<template>
  <h1>Person List</h1>
  <div class="home">

    
    <div class="row">
<Personcard v-for="data in datas" :key="data.id" :data="data" />

</div>

  <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'PersonList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'PersonList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page</router-link
      >
    </div>
  </div>



</template>

<script>
// @ is an alias to /src
import Personcard from '@/components/Personcard.vue'
import PersonService from '@/services/PersonService.js'
export default {
  name: "PersonList",
   props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    Personcard,
  },
  data() {
    return {
   datas: null,
   totalPersons: 0 // <--- Added this to store totalPersons
    }
  },

    // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    PersonService.getPersons(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.datas = response.data
          comp.totalPersons = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    PersonService.getPersons(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.datas = response.data // <-----
        this.totalPersons = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      let totalPages = Math.ceil(this.totalPersons / 4) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    }
  }

}
</script>
