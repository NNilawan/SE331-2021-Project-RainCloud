<template>
  <div class="notfound">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'PersonList' }" class="text-h4">Back to the home page</router-link>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>

<style scoped>
.notfound {
  text-align: center;
}
</style>
