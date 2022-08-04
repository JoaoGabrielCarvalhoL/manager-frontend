<template>
  <div class="home">
      <img src="./../assets/banner.png" alt="Trade">
      <div class="itens">


<div class="card text-white bg-secondary mb-3" style="max-width: 70%;">
  <div class="card-header">Categories</div>
  <div class="card-body">
    <h5 class="card-title">Categories</h5>
    <p class="card-text">The different types of products are divided into specific categories.</p>
  </div>
</div>


<div class="card text-white bg-dark mb-3" style="max-width: 70%;">
  <div class="card-header">Products</div>
  <div class="card-body">
    <h5 class="card-title">Products</h5>
    <p class="card-text">You can add to product type, or add, update and delete existing product..</p>
  </div>

  
</div>

<hr/><br/>
</div>      
  
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>

.home{
  display: flex;
  justify-content: space-around;
  img{
    max-width: 45%;
    height: 400px;
    margin-left: 50px;
    padding-left: 50px;
    
  }


  .itens{
    max-width: 50%;
  }
}
</style>