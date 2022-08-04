<template>
<div class="main">
  <div v-if="confirmed" class="alert alert-success">
        <h4>Your registration has been successfully completed!!</h4>
        <h4>Confirm in your email</h4>
      </div> 
    <div class="form" v-if="!confirmed">
    <h1>New User</h1>
        <form>
            <div class="row">
                <label for="usarname">Username</label>
                <input v-model="form.username" class="ml-3" type="text">
            </div>

            <div class="row">
                <label for="email">Email</label>
                <input v-model="form.email" class="ml-2" type="email">
            </div>

            <div class="row">
                <label for="password">Password</label>
                <input v-model="form.password" class="ml-3" type="password">
            </div>
    

            <div class="btnRegister">
                <button v-on:click="enviarDadosCadastro" class="btn btn-dark">Register</button>
            </div>

        </form>
    </div>
  </div>


</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

    data() {
        return {
            form: {
                username: "", 
                email: "", 
                password: '',
                confirmed: false
            }, 
            
        }
    }, 

    computed: {
        ...mapState(['user']),
    },

    methods: {
        ...mapActions('user', ['usersRegisterAction', 'emailConfirmed']),


        async enviarDadosCadastro() {

            const user = {
                email: this.form.email, 
                username: this.form.username, 
                password: this.form.password
            }

            alert(user.email + " " + user.username + " " + user.password);

            await this.usersRegisterAction(user);

            const email = {
                emailTo: user.email, 
                subject: "Registration Confirmation", 
                text: `<a href="http://localhost:8080/#/register-email?email=${user.email}">Register confirm</a>`
            }

            await this.emailConfirmed(email)
            this.confirmed = true;
           
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