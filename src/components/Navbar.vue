<template>

  <div class="divExtranal">
    <div   class="nav1"  @click="sendData" >สมัคร</div>
    <div class="nav2" :class="{nav1 : available}" @click="getData" >ดูข้อมูล</div>
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  components: { 'Logo': Logo },
  data () {
    return {
    }
  },
  methods: {
    sendData(){
        this.$router.push('/');
      },
      getData(){
        this.$router.push('/StatResult');
      }
    }
}
</script>

<style >

.divExtranal{
 display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center ;
  height: 50px;
  background: white;
  border-radius: 10px;
  width: 100%;
-webkit-box-shadow: 2px 2px 6px -3px #000000;
box-shadow: 2px 2px 6px -3px #000000;
}

.nav1{

  /* background: rgb(247,201,104); */
background: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
   color: white;
   border-radius: 18px;
   border: 2px solid ;
border-radius: 18px;
width: 70%;
 height: 90%;
 display: flex;
  align-items: center;
  justify-content: center ;
}

.nav2{

  background: white ;
   color: black;
   border-radius: 18px;
   border: 2px solid white ;
border-radius: 18px;
width: 70%;
 height: 90%;
 display: flex;
  align-items: center;
  justify-content: center ;
}

.nav3{

  /* background: rgb(247,201,104); */
background: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
   color: white;
   border-radius: 18px;
   border: 2px solid ;
border-radius: 18px;
width: 70%;
 height: 90%;
 display: flex;
  align-items: center;
  justify-content: center ;
}

</style>
