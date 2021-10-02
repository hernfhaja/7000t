<template>
  <div class="main">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
   <div class="body">
     <h1>body</h1>
   </div>
  </div>
</template>

<script>

import Navbar from './Navbar'

export default {
  components: { 'Navbar': Navbar },
  data () {
    return {
    }
  }
}
</script>

<style >
.main{
  border: 5px solid red;
}
.navbar{
  border: 3px solid orange;
}
.body{
  border: 3px solid yellow;
}
</style>
