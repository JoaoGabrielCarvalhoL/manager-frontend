<template>
  <div class="conteudo">
    <ul>
        <li>
            <img src="./../assets/lgo.png" alt="logo" >
        </li>
      <router-link to="/">
        <li>Home</li>
      </router-link>

      <router-link v-if="session || token.length > 12" to="/products">
        <li>Products</li>
      </router-link>

      <router-link v-if="session || token.length > 12" to="categories">
        <li>Categories</li>
      </router-link>

      <router-link to="/about">
        <li>About</li>
      </router-link>
    </ul>
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
  }


};
</script>

<style lang="scss" scoped>
.conteudo {
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    li {
      margin-left: 1%;
      width: 100px;
    }
  }
}
</style>