<template>
  <div class="main">
    <Navbar></Navbar>
    <div class="body">
     <div>
        <h1>body</h1>
     </div>
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
  margin: 0%;
  border: 5px solid red;
}
.navbar{
  border: 3px solid orange;
}
.body{
  border: 3px solid yellow;
}
</style>
