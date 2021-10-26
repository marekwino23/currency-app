<template>
  <div>
    <h2>Nested Pages</h2>
    <div class="nav-nested">
      <router-link to="/nested/one">Add currency</router-link>
      <router-link to="/nested/two">Currency table</router-link>
      <router-link to="/nested/three">Exchange converter</router-link>
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
.nav-nested{
  display: flex;
  justify-content: space-evenly;
}
</style>