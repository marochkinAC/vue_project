<template>
  <div class="navbar-wrapper">
    <ul class="nav navbar-nav">
      <li class="nav-item active"><a href="" data-value="1">Все SubID</a></li>
      <li class="nav-item"><a href="" data-value="2">Выбранные SubID</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "check_box"
}
</script>

<style scoped>
.navbar-wrapper {
  clear: both;
  background-color: #fafafa;
  margin: 0 -25px 15px -25px;
  height: 48px;
  padding: 0 25px 0 46px;
}

.navbar-nav {
  flex-direction: row;
}

.navbar-nav > li {
  font-family: "sans-serif";
  font-size: 14px;
  margin-right: 38px;
}

.navbar-nav > li.active {
  border-bottom: 1px solid #b2b2b2;
}

.nav > li {
  display: block;
  position: relative;
}
</style>