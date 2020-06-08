<template>
    <div class="footer">
        <div class="container">
           <div class="footer-menu">
                 
               </div>
               <div class="copy">
                  <p>Copywright WHITEWOLF</p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style scoped>

.footer {
	position: fixed;
	display: block;
	width: 100%;
	background: #025f93;
	bottom: 0;
	margin-bottom: 0;
}
.copy {
	position: relative;
	float: left;
}

.copy p {
		color: white;
		padding-top: 2px;
		margin-top: 1rem;
	}

.footer-menu {
	position: relative;
	float: right;
    top: 15px;
}

.footer-menu li {
		float: left;
		position: relative;
		display: block;
		letter-spacing: 1px;
		padding-right: 15px;
		color: white;
        cursor: pointer;
        list-style: none;
}

.footer-menu li:last-child {
			padding-right: 0;
		}

	a {
		font-size: 12px;
        color: white;
		text-decoration: none;
	}

	.footer-menu a:hover {
			color: #FAFF35;
	}

	.footer-menu a:focus {
		color: #FAFF35;
	}
	


</style>