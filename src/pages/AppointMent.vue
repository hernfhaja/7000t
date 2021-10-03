<template>
<div class="main">
    <Logo></Logo>
  <div class="img">
    <img src="../assets/img/test.jpg" alt="">
  </div>
  <div class="btn">
    <button class="btn_share" id="btn_share" @click="share">  แชร์  </button>
    <button class="btn_complete" id="btn_complete" @click="complete">ตกลง</button>
  </div>

</div>

</template>

<script>
import "../assets/main.css"
import Logo from '../components/Logo'

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
.img{padding-top: 40px;
text-align: center;
margin:0px;
}

.img > img{
  justify-content: center;
  width: 250px;
  height: 385px;
margin:0px;
}
.btn{
  margin-top: 50px;
  text-align: center;
  display: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
}
.btn_complete{
  border-style:none;
  color: white;
  margin-left: 15px;
  width: 125px;
  font-size: 20px;
  padding: 20px 25px;
  border-radius: 50px;
  background: rgb(247, 201, 104);
  background: linear-gradient(
    90deg,
    rgba(247, 201, 104, 1) 0%,
    rgba(247, 178, 68, 1) 100%,
    rgba(247, 178, 68, 1) 100%
  );
}
.btn_share{
  border-style:none;
  color: white;
  width: 125px;
  font-size: 20px;
  padding: 20px 25px;
  border-radius: 50px;
  background-image:linear-gradient(90deg, rgb(151, 198, 241) 0%, rgb(87, 182, 226) 100%, rgb(36, 33, 192) 100%);
}

</style>
