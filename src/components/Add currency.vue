<template>
   <div>
     <h1>{{money}}</h1>
            <select v-model="currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GPB">GPB</option>
            </select> 
            <br>
            <input v-model="number" type="number"/>
            <br> 
            <button v-on:click="addCurrency()">Save currency</button> 
        </div>
</template>

<script>



export default {
  name: 'Add',
  data:function(){
    return{
      currency:"",
      number:0
    }
  },

methods: {
  addCurrency() {
    this.$store.dispatch('addCurrency',{
      currency:this.currency,
      rate:this.number,
    })
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


input[type=text],[type="number"], select {
  width: 26%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
  background-color: blue;
}

h3 {
  margin: 40px 0 0;
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
