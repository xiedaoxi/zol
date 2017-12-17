<template>
  <div id="main">
  	<ul id="router">
  	<router-link to='/' class='rou'>
  		<a @click='rou1' class='rou2'>
  		<img class="Shopping" src="../img/1-1.png" :src='[jia1?"../img/1-1.png":"../img/1-2.png"]'>
  		<p class="rou-text" :class='{red1}'>首页</p></a>
  	</router-link>
  	<router-link to='/B2' class='rou'>
  		<a @click='rou2' class='rou2'>
  		<img class="Shopping" src="../img/2-2.png" :src='[jia2?"../img/2-1.png":"../img/2-2.png"]'>
  		<p class="rou-text" :class='{red2}'>分类</p></a>
  	</router-link>
  		<router-link to='/B3' class='rou'>
  			<a @click='rou3' class='rou3'>
  		<img class="Shopping" src="../img/3-2.png" :src='[jia3?"../img/3-1.png":"../img/3-2.png"]'>
  		<p class="rou-text" :class='{red3}'>购物车</p></a>
  	</router-link>
  	<router-link to='/B4' class='rou'>
  		<a @click='rou4' class='rou4'>
  		<img class="Shopping" src="../img/4-2.png" :src='[jia4?"../img/4-1.png":"../img/4-2.png"]'>
  		<p class="rou-text" :class='{red4}'>我</p></a>
  	</router-link>
  	</ul>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){ return {
  	img1:'../img/1-1.png',img2:'../img/2-1.png',img3:'../img/3-1.png',img4:'../img/4-1.png',
  	jia1:true,jia2:false,jia3:false,jia4:false,
  	red1:true,red2:false,red3:false,red4:false
  }},
  methods:{
  	rou1:function(){
  		this.red1=true,this.red2=false,this.red3=false,this.red4=false,
  		this.jia1=true,this.jia2=false,this.jia3=false,this.jia4=false
  	},
  	rou2:function(){
  		this.red1=false,this.red2=true,this.red3=false,this.red4=false,
  		this.jia1=false,this.jia2=true,this.jia3=false,this.jia4=false
  	},
  	rou3:function(){
  		this.red1=false,this.red2=false,this.red3=true,this.red4=false,
  		this.jia1=false,this.jia2=false,this.jia3=true,this.jia4=false
  	},
  	rou4:function(){
  		this.red1=false,this.red2=false,this.red3=false,this.red4=true,
  		this.jia1=false,this.jia2=false,this.jia3=false,this.jia4=true
  	},
  }
}
</script>

<style>
#router{
	background: white;
	padding-top: 0.34135rem;
	width: 100%;
	height: 2.24rem;;
	position: fixed;
	bottom: 0;
	display: flex;
	box-sizing: border-box;
}
.rou{
	display: flex;
	width: 5rem;
	}
	.rou2{
		display: flex;
		flex-grow:1;
		flex-direction: column;
		text-align: center;
	}
		.rou3{
		display: flex;
		flex-grow:1;
		flex-direction: column;
		text-align: center;
	}
		.rou4{
		display: flex;
		flex-grow:1;
		flex-direction: column;
		text-align: center;
	}
	.Shopping{
	margin: 0 auto;
	width: 1.152rem;
	height: 1.152rem;
	}
	.rou-text{
	color: #666;
	font-size: 0.5rem;
	}
	.red1{color:red;}.red2{color:red;}.red3{color:red;}.red4{color:red;}
</style>
