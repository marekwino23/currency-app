<template>
   <div>
           <h1>Exchange</h1>
           <input v-model="number" type="number">
           <select id="currency">
                <option value=""></option>
                <option v-for="currency in currencies" :key="currency.id" :value="currency">{{currency.toUpperCase()}}</option>
            </select> 
            <button @click="convertCurrency()">converter to PLN</button>
            <br>
            <label>Data after converted: <input type="number" :value="this.converted_number"/> PLN</label>
        </div>
</template>

<script>

import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Exchange',
  setup(){
      const store = useStore()
      const currencies = computed(function () {
      return Object.keys(store.state);
    });
    return{
        currencies: currencies.value
    }

  },
  data:function(){
    return{
      number:0,
      converted_number:0,
    }
  },
  methods:{
      convertCurrency(){
          let select = document.getElementById('currency');
          let money = select.options[select.selectedIndex].value
          if(money === "" && this.number === 0){
            this.$swal('lack of number');
          }
          else{
              if(money === "usd"){
                  this.converted_number = this.number * 3.95 
              }
              else if(money === "eur"){
                  this.converted_number = this.number * 4.6 
              }
              else if(money === "gpb"){
                  this.converted_number = this.number * 5.45
              }
            this.$swal('Convert done');
          }
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

h1,p{
  color:white;
}

input[type=text],[type="number"], select {
  width: 26%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label{
  color:white;
  font-weight: bold;
}

button {
  width: 25%;
  background-color:#4ca1af;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover{
  background-color: rgb(24, 151, 173);
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
