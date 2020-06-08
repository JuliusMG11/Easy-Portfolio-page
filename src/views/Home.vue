<template>
  <div class="background-home" >
       <div class="title-text">
        <h1>/ WEB / DESIGN / MARKETING /</h1>
    
      </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
   
  }
}
</script>

<style scoped>

.background-home {
    background: url("../assets/background1.png") no-repeat;
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  
.title-text {
    position: relative;
    padding: 20px;
    text-align: center; 
    background: #025f93;
    color: white;
    
	  z-index: -1;
    width: 600px;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  .title-text h1 {
    font-size: 2em;
    margin: 0;
    font-weight: 700;
  }

</style>
