<template>
  <div>
    <div class="nav-nested">
      <ul>
      <li><router-link to="/nested/one">Add currency</router-link></li>
      <li><router-link to="/nested/two">Currency table</router-link></li>
      <li><router-link to="/nested/three">Exchange converter</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'NestedPages'
  }
</script>

<style scoped>
div {
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:green;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color:rgb(76, 141, 76);
}

.active {
  background-color: #04AA6D;
}

.nav-nested{
  display: flex;
  justify-content: space-evenly;
}
</style>