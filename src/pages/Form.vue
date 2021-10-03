<template>
<div class="main">
  <Logo></Logo>

  <div class="ex">
    <div class="in">
  <h2 >กรอกข้อมูล</h2>
    </div>
  </div>


  <div class="form">
    <div class="form_sub">
        <label  class="form_label" for="">ชื่อ</label>
        <input class="form_input" type="text">
    </div>
    <div class="form_sub">
        <label class="form_label" for="">นามสกุล</label>
        <input class="form_input" type="text">
    </div>
    <div class="form_sub">
        <label class="form_label" for="">ที่อยู่</label>
        <textarea class="form_area" id="textarea" value="ทดสอบ" >
         </textarea>
    </div>


    <button id="btn_confirm2" @click="confirm2" class="bt">ยืนยัน</button>


  </div>

</div>

</template>

<script>

import Logo from '../components/Logo'
import "../assets/main.css"

export default {
  components: { 'Logo': Logo },
  data () {
    return {
    }
  },
  methods : {
    confirm2(){
       this.$router.push('/AppointMent');
    }
  }
}
</script>

<style >
.main{
  margin:0px;
}
.form{
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center ;
}
.form_sub{
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 10%;
}

.form_input{

  border-image-slice: 0.5;
  border-width: 0.01px;
  padding: 12px 20px;
  border-image-source: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
}

.bt{
  margin-top: 20%;
   height: 50px;
    width: 180px;
   background: rgb(247,201,104);
 background: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
    color: white;
    border-radius: 20px;
    border: 2px solid #f6cc87;
    font-size: 20px;
}
.form_area{
   height: 200px;
    width: 100%;
   background:white;
    border-radius: 5px;
    border: 2px solid #f6cc87;
    font-size: 20px;
}

</style>
