<template>
  <div class="main">
    <Navbar></Navbar>
    <div class="body">
        <h1>โครงการ 1 ตำบล 1 แสงสว่าง</h1>
        <input type="text" placeholder="ตำบล..." />
        <button id="btn_search" >ค้นหา</button>
        <p>{{}}</p>
        <button id="btn_regis" @click="getNumber">สมัคร</button>

    </div>
  </div>
</template>

<script>

import Navbar from './Navbar'

export default {
  components: { 'Navbar': Navbar },
  data () {
    return {
    }
  },
  methods : {
    getNumber(){
       this.$router.push('/Rule');
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
