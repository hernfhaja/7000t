<template>
  <div class="hearder">
    <nav class="nav">
      <Logo></Logo>
      <ul class="nav_manu">
        <li class="nav_item">
          <a class="nav_link" href="">สมัคร</a>
          <a class="nav_link" href="">ดูข้อมูล</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  components: { 'Logo': Logo },
  data () {
    return {
    }
  }
}
</script>

<style >
.header{
  border: 2px solid plum;
}
.nav{
  border: 2px solid black;
}
.nav_manu{
  list-style-type:none;
}
.nav_item{
  border: 2px solid black;
}
.nav_link{
  border: 2px solid black;
}

</style>
