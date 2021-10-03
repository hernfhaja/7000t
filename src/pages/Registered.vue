<template>
<div class="main">
    <Logo></Logo>
    <NavbarRegis></NavbarRegis>

  <div class="img">
    <img src="../assets/img/test.jpg" alt="">
  </div>

</div>

</template>

<script>
import "../assets/main.css"
import Logo from '../components/Logo'
import NavbarRegis from '../components/NavbarRegis'

export default {
  components: { 'Logo': Logo ,'NavbarRegis': NavbarRegis},
  data () {
    return {
    }
  },
  methods : {
    complete(){
       this.$router.push('/Registered');
    }
  }
}
</script>

<style >
.main{
margin:0px;
}
.img{padding-top: 40px;
text-align: center;
margin:0px;
}

.img > img{
  justify-content: center;
  width: 250px;
  height: 385px;
margin:0px;
}


</style>
