<template>

  <div class="logo">
     <img src="../assets/img/logo.png" alt="">
      <div class="text">
      <h3 class="h">จุดประทีป 7000 ตำบลทั่วไทย</h3>
      <p class="p">ธรรมล้านดวง</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style >
.logo{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.logo > img{
  flex-direction: column;
  width: 25%;
  height: 30%;
}
.logo > h1{
   display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  
}

.text{
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin-left: 20px;
}

.h{
  margin-bottom: 0;
}

.p{
  margin-top: 5px;
}
</style>
