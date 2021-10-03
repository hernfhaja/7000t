<template>

  <div class="header">
    <Logo></Logo>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'

export default {
  props:["bgcolor"],
  components: { 'Navbar': Navbar ,
  'Logo': Logo  },
  data () {
    return {
      av : bgcolor
    }
  }
}
</script>

<style >
.header{

}
</style>
