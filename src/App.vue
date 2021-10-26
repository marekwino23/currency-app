<template>
<div>
 <div id="nav">
   <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/nested" class="row1 col4">Operation</router-link></li>
   </ul>
  </div>
  <router-view />
</div>
</template>

<script>


export default {
  name: 'App',
  data:function(){
    return{
      status:false,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color:#4EB1CC;
}

ul {
    list-style-type: none;
    margin: 0;
    background-color: #809984;
    padding: 0;
    overflow: hidden;
    border: 2px solid white;
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
  background-color:green;
}

.active {
  background-color: #04AA6D;
}

#nav{
  display: flex;
  justify-content: space-around;
}
</style>
