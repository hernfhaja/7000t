<template>
  <div class="main">
    <NavbarRegis></NavbarRegis>
    <div class="body">
        <h1>ใบนัดหมาย</h1>
       <h1>ภาพ</h1>

    </div>
  </div>
</template>

<script>

import NavbarRegis from './NavbarRegis'

export default {
  components: { 'NavbarRegis': NavbarRegis },
  data () {
    return {
    }
  },
  methods : {
    getNumber(){
       this.$router.push('/');
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
