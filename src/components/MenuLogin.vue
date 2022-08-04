<template>
  <div class="main">
  <div class="login">
    <div v-if="token || session" class="greeting mr-4 mt-2">

    </div>
      <div class="buttons">
        <router-link to="/login" v-if="!token || !session">
          <button class="btn btn-dark ml-2">Sing In</button>
        </router-link>
        <router-link to="/register" v-if="!token || !session">
          <button class="btn btn-dark ml-2">Sing Up</button>
        </router-link>
    
        <button v-if="token || session" v-on:click="resetLogin()" class="btn btn-dark ml-2">Logout</button>
       
      </div>
    </div>

  </div>
</template>

<script>
export default {

    data() {
    return {
      session: false
    } 
  },

  computed: {
    username(){
      return localStorage.username 
    },

    token() {
      return this.$store.state.user.user.token
    }
  }, 
  mounted(){
    if(localStorage.token) {
      this.session = true;
    }
  },

    methods: {
        resetLogin() {
            localStorage.removeItem('token'); 
            localStorage.removeItem('username');
            this.$router.go(); 
           
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        display:flex; 
        flex-direction: column;
        justify-content: stretch;

        .login{
            width: 100%;
            display:flex;
            justify-content: flex-end;
     
         .buttons{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 0%;

      }
    }
    }
</style>