<template>
  <div class="main">
    <div class="login">
        <h2>Manager Software</h2>
        <label class="mt-2" for="username">Username</label>
        <input v-model="username" type="text" class="text">

        <label class="mt-3" for="password">Password</label>
       <input v-model="password" type="password">

        <button class="btn btn-danger mt-4" v-on:click="enviarDadosLogin()">Get in</button>

        <span class="mt-4"><a href="#" style="color: white;">Esqueceu sua senha?</a></span>
       
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapActions } from 'vuex'

export default {

    data() {
        return {
            username: this.$route.params.username ? this.$route.params.username: '', 
            password: ''
        }
    }, 

    methods: {
        ...mapActions('user', ['setUserLogin']),
        enviarDadosLogin() {
            const dados = {
                username: this.username, 
                password: this.password
            }
            
            Axios.post('http://localhost:8081/manager/login', dados).then(response => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.username)
                this.setUserLogin()
            });

            this.$router.push('/')
            
        }
    }

}
</script>

<style lang="scss" scoped>

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    color: white;
    .login{
        display:flex;
        flex-direction: column;
        background-color: rgb(54, 50, 50);
        width: 40%;
        padding: 4%;
        border-radius: 5%; 

        input {
            margin: 2%;
            border:none;
            border-bottom: solid 0.5px black;
        }

        input:focus {
            outline: none;
            
        } 

        button {
            width: 100px;
            margin-left: 150px;
            
        }
    }
}
</style>