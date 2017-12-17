<template>
	<div id="class">
		<ul id='classification'>
		<li></li>全部分类
		</ul>
		<div id="rou-class">
		<ul class="rou-class">
		<a @click='abc1' style="display: flex;">
			<router-link to='/a1' class="tab" :class='{tab1}'>热门推荐</router-link></a>
		<a @click='abc2' :class='{tab2}' style="display: flex;">
			<router-link to='/a2' class="tab" :class='{tab2}'>手机通讯</router-link></a>
		<a @click='abc3' :class='{tab3}' style="display: flex;">
			<router-link to='/a3' class="tab" :class='{tab3}'>电脑整机</router-link></a>
		<a @click='abc4' :class='{tab4}' style="display: flex;">
			<router-link to='/a4' class="tab" :class='{tab4}'>摄影摄像</router-link></a>
		<a @click='abc5' :class='{tab5}' style="display: flex;">
			<router-link to='/a5' class="tab" :class='{tab5}'>DIY组装机</router-link></a>
		<a @click='abc6' :class='{tab6}' style="display: flex;">
			<router-link to='/a6' class="tab" :class='{tab6}'>智能设备</router-link></a>
		<a @click='abc7' :class='{tab7}' style="display: flex;">
			<router-link to='/a7' class="tab" :class='{tab7}'>外设存储</router-link></a>
		</ul>
		<ul><router-view></router-view></ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'vue2',
		data:function(){return {
			tab1:true,tab2:false,tab3:false,tab4:false,tab5:false,tab6:false,tab7:false,
		}},
		methods:{
			abc1:function(){
			this.tab1=true,this.tab2=false,this.tab3=false,
			this.tab4=false,this.tab5=false,this.tab6=false,this.tab7=false
			},
			abc2:function(){
			this.tab1=false,this.tab2=true,this.tab3=false,
			this.tab4=false,this.tab5=false,this.tab6=false,this.tab7=false
			},
			abc3:function(){
		this.tab1=false,this.tab2=false,this.tab3=true,
			this.tab4=false,this.tab5=false,this.tab6=false,this.tab7=false
			},
			abc4:function(){
			this.tab1=false,this.tab2=false,this.tab3=false,
			this.tab4=true,this.tab5=false,this.tab6=false,this.tab7=false
			},
			abc5:function(){
			this.tab1=false,this.tab2=false,this.tab3=false,
			this.tab4=false,this.tab5=true,this.tab6=false,this.tab7=false
			},
			abc6:function(){
			this.tab1=false,this.tab2=false,this.tab3=false,
			this.tab4=false,this.tab5=false,this.tab6=true,this.tab7=false
			},
			abc7:function(){
			this.tab1=false,this.tab2=false,this.tab3=false,
			this.tab4=false,this.tab5=false,this.tab6=false,this.tab7=true
			},
		}
	}
</script>

<style>
	*{
		margin: 0;padding: 0;list-style: none;
	}
	#class{
		padding-bottom:2.3rem ;
		background:white;
		box-sizing: border-box;
		min-height: 30.1rem;
	}
	#classification{
		border-bottom:1px solid #e0e0e0;
		background-color: #f9f9f9;
		text-align:center;
		height: 1.064rem;
		padding:0.3rem 0.3rem 0.3rem 0.6rem;
		font-size:0.8rem;
		color: #333;
	}
	#classification li{
		margin-top:0.2rem; ;
		float:left;
		width:0.5rem;
		height: 0.5rem;
		border-bottom: 0.1rem solid black;
		border-left: 0.1rem solid black;
		transform:rotate(45deg);
	}
	#rou-class{
	display: flex;
	}
	.rou-class{
		display: flex;
		flex-direction: column;
		width: 3.712rem;
		height: 16.128rem;
	}
	.tab{
		text-decoration: none;
		background-color: #f9f9f9;
		flex-grow:1;
		text-align: center;
		line-height:2.30rem;
		font-size:0.6rem;
		font-weight:700;
		color: #333;
		border-right:1px solid #e0e0e0;
		border-bottom:1px solid #e0e0e0;
		}
		.tab1{color: red;background: white;border-right:none;}
		.tab2{color: red;background: white;border-right:none;}
		.tab3{color: red;background: white;border-right:none;}
		.tab4{color: red;background: white;border-right:none;}
		.tab5{color: red;background: white;border-right:none;}
		.tab6{color: red;background: white;border-right:none;}
		.tab7{color: red;background: white;border-right:none;}
</style>