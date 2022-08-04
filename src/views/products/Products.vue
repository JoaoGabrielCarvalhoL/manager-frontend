<template>
  <div class="principal">
    <div class="topo">
        <h1>Products</h1>
        <button class="btn btn-dark"><router-link class="link" to="/product-register">Add Products</router-link></button>
    </div>

    <div>
        <ul>
            <li>
                <div class="dados" id="id"><strong>Id</strong></div>
                <div class="dados" id="description"><strong>Description</strong></div>
                <div class="dados" id="amount"><strong>Amount</strong></div>
                <div class="dados" id="price"><strong>Unit Price</strong></div>
                <div class="dados" id="options"><strong>Options</strong></div>
                
              
            </li>
        </ul>
    </div>

    <div v-for="dado in products.products" :key="dado.id">
        <ul>
            <li>
                <div class="dados" id="id">{{dado.id}}</div>
                <div class="dados" id="name">{{dado.productName}}</div>
                <div class="dados" id="amount">{{dado.amount}}</div>
                <div class="dados" id="price">{{ maskPrice(dado.unitPrice)  }}</div>
                <div class="dados" id="options">
                    <router-link v-bind:to="{name : 'product-update', params: { id: dado.id }}"  >
                        <button class="btn btn-dark"><i class="fas fa-edit"></i></button>
                    </router-link>
                    <button v-on:click="deleteProductById(dado.id)" class="btn btn-danger ml-2"><strong>x</strong></button>
                    
                </div>
              
            </li>
        </ul>
    </div>

    

    <hr/>
  </div>
</template>

<script>



import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
     
        };
    },

    methods: {

        ...mapActions('products' ,['getProducts', 'deleteProductById']),

        maskPrice(unitPrice) {
            let finalValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(unitPrice)
            return finalValue
        }
    }, 

    async deleteProduct(id) {
        try {
            await this.deleteProductById(id)
            this.$router.go
        } catch(err) {
            alert("Unable to delete selected item! Cause: " + err)
        }
    }, 

    computed: {
        ...mapState(['products'])
    }, 
    created() {
        this.getProducts()
    }
};
</script>

<style lang="scss" scoped> 
    .principal{
        padding: 1%;
        padding-top: 0.1%;
        margin-top: -1%;
        
        .topo {
            display: flex;
            justify-content: space-around;
            padding: 2.1%;

            .link {
                color: white;
                text-decoration: none;
            }

            .btn {
                max-height: 50px;
            }
        }
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

            #amount {
                min-width: 10%;
                
            }

            #price {
                min-width: 15%;
            }
        }
    }

</style>