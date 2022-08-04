<template>
<h1>Update Product</h1> 
  <div class="main" v-for="produto in products" :key="produto.id">

<div class="alert alert-success" v-if="ok">
    <h4>Item successfully updated!</h4>
</div>

<div class="alert" v-else-if="error">
    {{ message }}
</div>

 <div class="form">
        <form>
            <div class="row">
                <label for="productName">Name</label>
                <input v-model="produto.productName" class="ml-3" type="text">
            </div>

            <div class="row">
                <label for="amount">Amount</label>
                <input v-model="produto.amount" class="ml-3" type="text">
            </div>

            <div class="row">
                <label for="unitPrice">Price</label>
                <input v-model="produto.unitPrice" v-money="money" class="ml-3" type="text">
            </div>

            <div class="row mt-3">
                <label for="cat">Category</label>
            <select id="categorias" v-model="produto.category"> 
            
              <option value="">
                Escolha a categoria
              </option>
              <option value="1">
                Eletrônico
              </option>
              <option value="2">
                Papelaria
              </option>
              <option value="3">
                Cosméticos
              </option>
              <option value="4">
                Vestuário
              </option>
            </select>
          </div>
            
            <div class="btnRegister">
                <button v-on:click="updateProduct(produto, produto.unitPrice)" class="btn btn-dark">Update</button>
            </div>

        </form>
    </div>



  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { VMoney } from 'v-money'

export default {

    directives: { money: VMoney },

    data() {
        return {
            id: this.$route.params.id, 
            message: '', 
            ok: false, 
            error: false,        
                money: {
                    decimal: ',', 
                    thousands: '.', 
                    prefix: 'R$ ',
                    suffix: '', 
                    precision: 2, 
                    masked: false 

                }
        }
    }, 

    computed:{
        ...mapState(['products'])
    }, 

    methods: {
        ...mapActions('products', ['findProductById', 'updateProducts']),

     async updateProduct(produto, priceFormat) {
        priceFormat = priceFormat.replace(/\./g, '')
        priceFormat = priceFormat.slice(3).replace(',', '.')


            const update = {
                id:produto.id, 
                productName:produto.productName, 
                amount:Number(produto.amount), 
                unitPrice:Number(priceFormat), 
                category: { id: produto.category }
            } 

            try {
                await this.updateProducts(update)
                this.ok = true

            } catch(err) {
                err.data ? this.message = err.data.message : this.message ='Could not update item!'
                error = true
            }

           
        }


    }, 

    created() {
        this.findProductById(this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped>

.main{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    
    
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 1.5px gray;
        border-radius: 2%;
        width: 45%;
        padding: 1.4%;
        
        padding-right: 1.5%;

        .row {
      width: 100%;
      padding: 1%;
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
      label {
        align-items: flex-start;
        text-align: right;
        width: 21%;       
      }
      input {
        width: 69%;
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
      #categorias {
        
        border: none;
        background-color: white;
        border-bottom: 1px solid grey;
        margin-left: 4%;
        align-items: flex-end;
        
        option{
          direction: rtl;
         
        }
      }
      #categorias:focus {
        outline: none;
      }
    }
     
    }
}

</style>