<template>
   <div>
     <h1>Currency table</h1>
           <table>
             <th>currency</th>
             <th>Exchange rate</th>
             <tr v-for="product in products" :key="product.id">
               <td>{{product[0]}}</td>
               <td>{{product[1]}}</td>
             </tr>
           </table>
        </div>
</template>

<script>

import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Currency',
  setup(){
    const store = useStore();

    const products = computed(function () {
      return Object.entries(store.state).filter(item => item[1]);
    })
    return {
      products
    }
  },
  data:function(){
    return{
      currency:"",
      number:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

h1{
  color:white;
}

ul {
  list-style-type: none;
  padding: 0;
}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr{
  background-color: rgb(78 177 204);
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color:aqua;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
