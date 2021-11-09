<template>
  <div id="main">
    <div class="container">
      <input type="text" placeholder="Enter text here .." v-model="searchText" autofocus>

      <br>

      <table>

        <tr>
          <th>Result table</th>
        </tr>

        <tr v-for="item in items" :key="item">
          <td>{{ item }}</td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return { 
      searchText : '',
      items : [],
      itemsOriginal : [],
      filterList : []
    }
  },
  created() {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        this.itemsOriginal = data.data;
        this.items = this.itemsOriginal;
      });
  },
  watch: {
    searchText: function(val){
      console.log(val);
      if(val.length > 0){
        this.filterList = this.itemsOriginal.filter((item) => item.toLowerCase().indexOf(val.toLowerCase()) == 0)
        this.items = this.filterList;
      }else{
        this.items = this.itemsOriginal;
      }
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  table {
    border-collapse: collapse;
  }
  th,td {
    border: 1px solid #919191;
    padding: 0.125rem;
  }
  #main{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container {
    width: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
  }
  input, table {
    width: 100%;
  }
  input {
    padding: 0.125rem;
    border: 1px solid #919191;
  }
</style>
