
<template>
<div>
	<div class="webdesign-3d-text">
		<h1>WEB DESIGN</h1>
	</div>
	<div class="gallery-test">
    <agile 
		:navButtons="true"
		ref="carousel"
		>
        <div class="slide">
            <img src="../assets/navrh2.png" href="#" alt="image">
			<h1 class="title-slide">Herbert.sk</h1>
			<p class="title-text">Návrh dizajnu</p>
        </div>
        
        <div class="slide">
            <video autoplay muted loop controls class="video1">
  				<source src="../fajnotu.mp4" type="video/mp4">
			</video>
			<h1 class="title-slide-video">Margecianskefajnoty.eu</h1>
        </div>
		 <div class="slide">
            <img src="../assets/Nabytok.png" href="#" alt="image">
			<h1 class="title-slide">Stopka.cz</h1>
			<p class="title-text">Návrh dizajnu</p>
        </div>
    </agile>
	</div>
	<div class="container">
		<div @click="$refs.carousel.goToNext()" class="button-next">NEXT</div>
		<div @click="$refs.carousel.goToPrev()" class="button-prev">PREV</div>
	</div>
	
</div>

</template>
<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
     agile: VueAgile 
  }
}
</script>


<style lang="scss">

.video1 {
	width: 700px;
	border: 0.8rem 0px 10px 30px rgba(57, 56, 61, 0.205) solid;
	border-radius: 1rem;
}


.button-next,
.button-prev {
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

.button-prev {
	left: 5rem;
	top: 45%;
	
}

.button-next {
	right: 5rem;
	top: 45%;
	
	}

.title-slide-video {
	color: black;
	font-size: 2em;
  	font-weight: 400;
	position: absolute;
	z-index: 3;
	font-weight: 600;
	bottom: 0em;
	width: 400px;
}

.title-slide {
	color: black;
	font-size: 2em;
  	font-weight: 400;
	position: absolute;
	z-index: 3;
	bottom: 1em;
	font-weight: 600;
}

.title-text {
	color: black;
	font-size: 1em;
	position: absolute;
	z-index: 3;
	bottom: 0;
	font-weight: 600;
	width: 200px;
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


// Basic VueAgile styles
.agile {

	&__slides {
		margin-top: 2em;
		height: 500px;
		display: flex;
		z-index: 1;
	}

	&__slides img {
		position: relative;
		height: 500px;
	}
	
	&__actions {
		margin-top: 20px;
		position: relative;
		display: none;
  }

  &__nav-button {
		background: transparent;
		border: none;
		color: #ccc;
		cursor: pointer;
		font-size: 24px;
		transition-duration: .3s;
  }
  &:hover {
			color: #888;
  }
  &__dot {
		margin: 0 10px;
		display: none;
  }

  button {
			border: none;
			border-radius: 50%;
			cursor: pointer;
			display: block;
			height: 10px;
			font-size: 0;
			line-height: 0;
			margin: 0;
			padding: 0;
			transition-duration: .3s;
			width: 10px;
  }

  &--current,
		&:hover button {
				background-color: #888;
    }
}

.slide {
	align-items: center;
	color: #fff;
	display: flex;
	height: 300px;
	justify-content: center;

  .slide h3 {
		font-size: 32px;
		font-weight: 300;
  }


}

  </style>