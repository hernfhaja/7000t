<template>
  <div>
    <Navbar></Navbar>
   <p>body</p>
  </div>
</template>

<script>

import Navbar from "./Navbar.vue"

export default {
  components : {
    'Navbar' : Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
