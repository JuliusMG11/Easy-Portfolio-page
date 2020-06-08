<template>
    <div>
      <div class="webdesign-3d-text">
		<h1>WEB DESIGN</h1>
	</div>
    <div class="bg-kategoria">
        <div class="component-category">
        </div>
    </div>
     <div class="container group">
                <div class="kategoria-content">
              <h1><strong>ABOUT ME |</strong></h1>
                <p>Apple pie brownie powder sweet toffee muffin macaroon. 
                  Liquorice sesame snaps cupcake. Bear claw cupcake pastry chupa 
                  chups apple pie tart candy canes tootsie roll. Ice cream tootsie roll sweet roll caramels 
                  bear claw powder cupcake macaroon jelly beans.</p>
                  <router-link to="/gallery">
                  <button  class="button-gallery">Pozri si viac v Galerii</button>
                  </router-link>
              </div>
                </div>

    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">

.bg-kategoria,
.component-category {
  height: 100vh;
}

.webdesign-3d-text h1 {
	opacity: 0.1;
  font-size: 8em;
  font-weight: 800;
  position: absolute;
  right: 0;
  bottom: 0;
  text-shadow: 2px 2px 2px #111111;
}


.bg-kategoria {
  background: url("../../assets/kategoria1.svg");
  width: 100%;
  background-repeat: no-repeat;
  background-size: 88%;
  position: absolute;
  top: 0;
} 

.component-category {
    background: url("../../assets/webdesign.png");
    background-position: 12% 40%;
    background-repeat: no-repeat;
    background-size: 45%;
}


.kategoria-content {
  position: relative;
    display: block;
    float: right;
    height: 200px;
    width: 700px;
    top: 15em;

  h1, p {
    text-align: right;
  }

}

.button-gallery {
  position: absolute;
	padding:.8rem 2.2rem;
	border: 3px solid transparent;
	border-radius:4px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    -ms-border-radius:4px;
	-o-border-radius:4px;
	cursor: pointer;
  font: normal 500 17px/20px 'Roboto';
  
  background-clip: padding-box;
	 background: linear-gradient(90deg, #4398c6 0%, #854fee 100%);
	 transition:  background .6 ease;
    -webkit-transition: background .6 ease;
    -moz-transition: background .6 ease;
    -ms-transition: background .6 ease;
    -o-transition: background.6 ease;
	box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
  color: white;
  right: 0;
  
  &:hover {
	background: whitesmoke;
	background-clip: padding-box;
	color: black
	}

	&::after {
	position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background: linear-gradient(90deg, #4398c6 0%, #854fee 100%);
    content: '';
    z-index: -1;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
		}
}



</style>