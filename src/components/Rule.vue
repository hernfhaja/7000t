<template>
  <div class="main">
    <Logo></Logo>
  <h4>กติกาการเข้าร่วม</h4>
  <div class="rule">
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
  <button id="btn_confirm" @click="confirm">ยืนยัน</button>

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
    confirm(){
       this.$router.push('/Form');
    }
  }
}
</script>

<style >
.main{
margin:0px;
}

</style>
