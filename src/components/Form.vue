<template>
<div class="main">
    <Logo></Logo>
  <h4>กรอกข้อมูล</h4>

  <div class="form">
    <div class="form_input">
        <label for="">ชื่อ : </label>
        <input type="text">
    </div>
    <div class="form_input">
        <label for="">นามสกุล : </label>
        <input type="text">
    </div>
    <div class="form_">
        <label for="">ชื่อ : </label>
        <input type="text">
    </div>
    <textarea id="textarea" >
        At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
    </textarea>
  </div>
  <button id="btn_confirm2" @click="confirm2">ยืนยัน</button>
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

</style>
