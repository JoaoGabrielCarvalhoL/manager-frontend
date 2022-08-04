<template>
<div class="main">
    <h1>New Product</h1>
    <div class="form">
        <form>
            <div class="row">
                <label for="productName">Name</label>
                <input v-model="form.productName" class="ml-3" type="text">
            </div>

            <div class="row">
                <label for="amount">Amount</label>
                <input v-model="form.amount" class="ml-3" type="text">
            </div>

            <div class="row">
                <label for="unitPrice">Price</label>
                <input v-model="unitPrice" v-money="money" class="ml-2" type="text">
            </div>

            <div class="row mt-3">
                <label for="cat">Category</label>
            <select id="categorias" v-model="form.category"> 
            
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
                <button v-on:click="addProd" class="btn btn-dark">Register</button>
            </div>

        </form>
    </div>

</div>
</template>

<script>

import { mapActions } from 'vuex'
import { VMoney } from 'v-money'

export default {

    directives: {money: VMoney}, 

    data() {
        return {
            form: {
                productName: "", 
                amount: "", 
                category: ''
            }, 
            unitPrice: "0", 
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

    methods: {
        ...mapActions('products', ['addProducts']),
        
        addProd(add) {
            this.unitPrice = this.unitPrice.replace(/\./g, '')
            this.unitPrice = this.unitPrice.slice(3).replace(',', '.')


            add = {
                productName: this.form.productName, 
                amount: Number(this.form.amount), 
                unitPrice: Number(this.unitPrice), 
                category: { id: parseInt(this.form.category) }
                
            }

            this.addProducts(add)
            console.log(add)

            this.form.productName = '' 
            this.form.amount = ''
            this.unitPrice = ''
        }
        

    }
}
</script>

<style lang="scss" scoped>

.main {
 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
    .form {
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
    .row2 {
      width: 100%;
      padding: 0.5%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-left: 10%;
      label {
        align-items: flex-start;
        text-align: right;
        width: 11%;       
      }
      input {
        width: 28%;
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
      #categorias {
        width: 70%;
        border: none;
        background-color: white;
        border-bottom: 1px solid grey;
        margin-left: 10%;      
        display: flex;        
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