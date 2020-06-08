<template>
  <div id="app">
  <the-navigation />
    <router-view />
    <the-footer />
  </div>
</template>


<script>
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from './components/TheFooter.vue'




export default {
   name: 'App',
  components: {
    TheNavigation,
    TheFooter
	   
  }
}
</script>>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
	box-sizing: border-box;
	height: 100%;
	margin: 0;
}
* {
	box-sizing: inherit;
	&:before {
		box-sizing: inherit;
	}
	&:after {
		box-sizing: inherit;
	}
}
body {
	height: 100%;
	margin: 0;
	font-size: 100%;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
}

.container:before,
.group:before,
.menu:before,
.container:after,
.group:after,
.menu:after {
	content: "";
    display: table;
}
.container:after,
.group:after,
.menu:after { 
    clear: both;
} 
.container { 
	max-width: 1000px; 
    margin: 0 auto;
}

</style>
