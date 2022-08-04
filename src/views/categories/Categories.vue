<template>
  <div>
    <div class="principal">
      <h1>Categories</h1>
 <div>
        <ul>
            <li>
                <div class="dados" id="id"><strong>Id</strong></div>
                <div class="dados" id="description"><strong>Description</strong></div>
            </li>
        </ul>
 </div>

      <div v-for="cat in categories.categories" :key="cat.id">
      <div>
        <ul>
          <li>
            <div class="dados" id="id"> {{ cat.id }} </div>
            <div class="dados" id="description"> 
              <button class="btn btn-dark" v-on:click="showProducts(cat.id)">
                {{ cat.description }} 
              </button>
            </div>
            <div class="row" v-for="produto in products" :key="produto.id">
            <div v-if="produto.category" class="produtos">
            <ul v-if="produto.category.id == productId && cat.id === productId">
              <li>
                {{ produto.name }}
              </li>
            </ul>
           </div>
      </div>
            
          </li>
       </ul>
      </div>
      </div>

  

    </div>
  </div>
</template>

<script>
 
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      productId: ''
    }
  },

  methods: { 
    
    
    //getCategories() {
      //axios.get('http://localhost:8081/manager/category/findAll').then(resp => {
        //this.categories = resp.data
        //})
    //}
   ...mapActions(['categories','getCategories']), 
   ...mapActions(['products', 'getProducts']), 

    showProducts(id) {
      id != this.productId ? this.productId = id : this.productId = ''
    }
  },

created() {
  this.getCategories();
  this.getProducts();
}, 

computed: {
  ...mapState(['categories', 'products'])
}

};
</script>

<style lang="scss" scoped>

/*
.categories{
    align-items: center;
    text-align: center;
    list{
      align-items: center;
      padding: 1%;
      display: flex;
      justify-content: center;

      .dados{
        padding: 0.7%;
      }
    }
  }

*/

  .principal{
        padding: 1%;
        padding-top: 0.1%;
        margin-top: -1%;
        
        ul{
            list-style: none;
            li{
                display: flex;
                justify-content: space-around;
                border: solid 1px grey;
                padding: 1%;
            }

            .dados{
                padding: 0.7%;
                color: grey;

            }

            .row {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #id {
                min-width: 10%;
            }

            #name {
                min-width: 35%;
                color: black;
            }

            #description {
                min-width: 35%;
            }
        }
    }
</style>