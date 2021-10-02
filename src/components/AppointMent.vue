<template>
<div class="main">
    <Logo></Logo>
  <h4>ใบนัดหมาย</h4>

  <div>
    <h4>ภาพ</h4>
  </div>

  <button id="btn_share" @click="share">แชร์</button>
  <button id="btn_complete" @click="complete">เรียบร้อย</button>
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

</style>
