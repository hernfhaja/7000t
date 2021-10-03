<template>
  <div class="main">
    <Logo></Logo>

  <div class="ex">
    <div class="in">
  <h2 >คุณสมบัติตัวแทนจุดประทีป</h2>
    </div>
  </div>

  <div class="rule1">
  <div class="rule2">

    <ol>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ol>
    </div>

  <div class="checkBox">
    <input type="checkbox" id="check1" value=""/>
    <label for="check1"> รับทราบ</label><br>
  </div>

  <button id="btn_confirm" @click="confirm" class="button2">ยืนยัน</button>

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
    confirm(){
       this.$router.push('/Form');
    }
  }
}
</script>

<style >
.main{
margin:0px;
height: 100%;
}

.h{
  text-align: center;
}

.checkBox{
  margin-top: 20%;
  margin-bottom: 10%;
}

.rule1{
   display: flex;
  align-items: center;
  justify-content: center ;
 margin-top: 20px;

 flex-direction: column;

}

.rule2{

 background: #f8f3ed;
 width: 70%;
height: 200px;
margin-top: 10%;
}
.ex{
display: flex;
 flex-direction: row;
  justify-content: flex-start ;
  width: 100%;
}

.in{
  text-align: center;
  width:90% ;
  border-radius: 0px 28px 28px 0px;
  background: rgb(247,201,104);
background: linear-gradient(90deg, rgba(247,201,104,1) 0%, rgba(247,178,68,1) 100%, rgba(247,178,68,1) 100%);
}

</style>
