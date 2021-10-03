<template>

  <div class="header">
    <Logo></Logo>
    <NavbarRegis></NavbarRegis>
  </div>
</template>

<script>
import Logo from '../components/Logo';
import NavbarRegis from '../components/NavbarRegis'

export default {
  components: { 'NavbarRegis': NavbarRegis ,
  'Logo': Logo  },
  data () {
    return {
    }
  }
}
</script>

<style >
.header{

}
</style>
