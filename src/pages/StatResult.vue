<template>
  <div class="main">
    <Logo ></Logo>
    <div class="divExtranal">
    <div   class="nav2"  @click="sendData" >สมัคร</div>
    <div class="nav1" :class="{nav1 : available}" @click="getData" >ดูข้อมูล</div>
    </div>
    <div class="body">

    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

export default {
  components: { 'Navbar': Navbar,'Logo': Logo
   },
  data () {
    return {
    }
  },
  methods : {
    sendData(){
       this.$router.push('/');
    }
  }
}
</script>

<style >

.top{
display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:30px;
  margin-top: 30px;
}

.bottom{
display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}

.divinput{
 width: 50%;
 height: 30px;
margin-bottom: 30px;
}


.button1{
   height: 30px;
   width: 100px;
  background: rgb(247,201,104);
background: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
   color: white;
   border-radius: 18px;
   border: 2px solid ;
}

.button2{
   height: 40px;
   width: 150px;
  background: rgb(247,201,104);
background: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
   color: white;
   border-radius: 20px;
   border: 2px solid #f6cc87;
}

.Input{
   height: 100%;
   width: 100%;
    border-radius: 18px;
}
</style>
