<template>
  <div class="main">
    <Logo></Logo>
    <Navbar available="true"></Navbar>
    <div class="body">
     <div class="top">
        <p>ตัวแทนตำบล</p>
         <div class="divinput">
        <input type="text" placeholder="ตำบล..." class="Input"/>
         </div>
        <button class="button1" id="btn_search" @click="number = Math.round(Math.random()) , available = !available">ค้นหา</button>
     </div>

     <div class="bottom" :class="{dark: available}" id="bottom">
        <p>ขณะนี้มีผู้ลงทะเบียนทั้งสิ้น</p>
        <p>จำนวน  {{number}}   คน</p>
        <button id="btn_regis" @click="nextPage" class="button2">สมัครเป็นตัวแทน</button>
     </div>

    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'

export default {
  components: { 'Navbar': Navbar ,
  'Logo': Logo  },
  data () {
    return {
         available : true,
          number : 0
    }
  },
  methods : {
    nextPage(){
       this.$router.push('/Rule');
    },
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
.dark{
  visibility: hidden;
}
.Input{
   height: 100%;
   width: 100%;
    border-radius: 18px;
}

</style>
