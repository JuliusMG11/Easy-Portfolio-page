<template>
    <div class="container group">
        <div class="menu2">
            <router-link to="/"><a class="fas fa-home fa-2x"></a></router-link>
            <a v-on:click="showContact"><i class="fas fa-envelope fa-2x"></i></a>
             <div class="dropdown">
                    <button v-on:click="myFunction()" class="dropbtn"><a class="fa fa-bars"></a></button>
                    <div id="myDropdown" class="dropdown-content">
                        <router-link to="/category/graphic">Web design </router-link>
                    </div>
                  </div>
                  
                  
                  <div  class="contact" >
                      <div class="container group">
                       <div class="exitbtn" v-on:click="hideContact"><a class="fas fa-times fa-7x"></a></div>
                        
                       <ul class="social-icon-menu">
                    <li>
                      <a href="#"></a>
                        
                        <i></i>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                       <li>
                      <a href="#"></a>
                        
                        <i></i>
                        <i class="fab fa-instagram"></i>
                        </li>
                         <li>
                      <a href="#"></a>
                        
                        <i></i>
                        <i class="fab fa-twitter"></i>
                        </li>
                         <li>
                      <a href="#"></a>
                     
                        <i></i>
                        <i class="fab fa-linkedin-in"></i>
                        </li>
                  </ul>
                  
                  </div>
                  <h1>CONTACT</h1>
                  <div class="container group">
                  <p>juliuspetrik.mg@gmail.com<br>
                  +420 202 202</p>
                  </div>
                  </div>

          
                  
        </div>
    </div>

</template>

<script>
import $ from 'jquery';

export default {
     
    methods: {
         myFunction() {
            document.getElementById("myDropdown").classList.toggle("show")
              window.window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
              }
            }
          };
         },
            showContact: function() {
                var contact = $('.contact');

                contact.fadeIn("slow");
                console.log("HORAA");
            },
            hideContact: function() {

                $('.contact').fadeOut();
            }
    }   
}   
    
</script>

<style lang="scss">

$blue-color: #025f93;

.menu2 {
	position:relative;
	display: block;
	float: right;
	top: 1em;
  cursor: pointer;
  z-index: 1;

  a {
    padding-right: 15px;
  }

}


.menu2 a,
.fa-envelope {
    color: $blue-color;
    
}



.fa-envelope:hover,
.fa-home:hover {
    color:#E2E630 !important;
    transition: 0.4s;
    
 }

/* ROZBALOVACIE MENU */

.dropbtn {
	background-color: #025f93;
	color: white;
	padding: 5px 10px 5px 10px;
	font-size: 30px;
	border: none;
	cursor: pointer;
	margin-top: -8px;
  }

  .dropbtn:hover, .dropbtn:focus {
	  color: #025f93;
    background: #E2E630;
    transition: 0.8s;
  }
  
  
  .dropdown {
	position: relative;
	display: inline-block;
	float: right;
    
	
  }
  
  .dropdown-content {
	display: none;
	position: absolute;
	right: 0;
	background-color: #025f93;
	min-width: 160px;
	overflow: auto;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 2;
    transition: 2s;
  }
  
  .dropdown-content a {
	color: #fff;
	padding: 12px 16px;
	text-decoration: none;
  display: block;

  }
  
  .dropdown a:hover {
	  background-color:#fff;
	  color: #025f93;
    text-decoration: none;
  }
  
  .show {display: block;}

  .contact {
      background: #025f93fc;
      display: none;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
  }

.contact h1 {
  color: white;
  opacity: 0.1;
  font-size: 20em;
  font-weight: 800;
  position: relative;
  text-align: center;
  z-index: -2;
  top: 10%;
  right: 2%;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
}

.exitbtn {
  position: relative;
  z-index: 1;
  display: block;
  top: 4em;
  text-align: left;
  color: white;
  transition: 0.8s;
  width: 80px;
  height: 80px;
}

.exitbtn:hover {
  color: #E2E630;
}


.social-icon-menu {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  top: 6em;

  li {
  position: relative;
  list-style: none;
  width: 60px;
  height: 60px;
  margin: 0 10px;
  font-size: 2em;
  color: white;
  }

  li:before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background: #2a2a2a;
  transform-origin: top;
  transform: skewX(-41deg);
  }
}



ul li:after {
  content: '';
  position: absolute;
  left: -10px;
  width: 10px;
  height: 100%;
  background: #2a2a2a;
  transform-origin: right;
  transform: skewY(-41deg);

}

ul li i {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
 
  color: rgba(250,250,250,0.2);
  font-size: 30px !important;
  transition: 0.2s;
   

}

ul li:hover i {
  transition: 0.5s;
  color:#fff;
  box-shadow: -1px 1px 1px rgba(0,0,0,0.05);
}

ul li:hover i:nth-child(5) {
  transform: translate(40px, -40px);
  opacity: 1;
   

}

ul li:hover i:nth-child(4) {
  transform: translate(30px, -30px);
  opacity: 0.8;
}

ul li:hover i:nth-child(3) {
  transform: translate(20px, -20px);
  opacity: 0.6;
}

ul li:hover i:nth-child(2) {
  transform: translate(10px, -10px);
  opacity: 0.4;
}

ul li:hover i:nth-child(1) {
  transform: translate(0px, 0px);
  opacity: 0.2;
}

ul li:nth-child(1):hover i {
  background: #5A86E6;
}

ul li:nth-child(2):hover i {
  background-image: linear-gradient(#405de6, 
                 #c13584, #e1306c, #f56040, 
                  #f77737, #fcaf45, #ffdc80);
}

ul li:nth-child(3):hover i {
  background: #1da1f2;
}

ul li:nth-child(4):hover i {
  background: #5A86E6;
}

.contact p {

  text-align: right;
  color: #fff;
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 4em;
}


</style>