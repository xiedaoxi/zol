<template>
	<div class="class-3" v-bind:class='{colo}'>
		<ul id='gouwuche'>
		<li></li>全部分类
		</ul>
	<div id="xieyi">
	<ul class="xieyi" v-on:click='xieyi'>
		<li>注</li>
		<li>购买前，我们推荐您阅读</li>
		<li class="ro" v-bind:class='{to}'></li>
	</ul>
	<ul class="texti-xy" v-bind:class='{top,an1}'>
		<li><span>1、</span><p>在您购买过程中,系统会给您填写的手机号发送确认短信,以方便您查询订单以及付款,请您务必保留。</p></li>
		<li><span>2、</span><p>您的货款将打到中关村商城账户，在您确认收货后货款才会打到商家账户，保障消费者权益最大化。</p></li>
		<li><span>3、</span><p>自商家发货起的10天内，如您收到商品并确认无误请您确认收货，商家发货超过10天如您未确认收货，货款将打到商家账户。</p></li>
	<p class="text-xy2">如有疑问，请致电中关村商城官方客服电话：</p>
	<div class="Telephone"><img src="img/dh.png"/>400-688-1999</div>
	</ul>
	</div>
	<div id="gouwuche-2">
		<li><img src="img/gouwuche.png"/></li>
		<p>购物车空空如也，快去逛逛吧！</p>
		<div>去逛逛</div>
	</div>
	</div>
</template>

<script>
	export default{  
		name:'vue3',
		data:function(){ return {
			to:false,top:false,an:false,an1:false,an2:true,colo:false
		}},
	methods:{
		xieyi:function(){
			this.to=!this.to,this.top=!this.top,this.colo=!this.colo,
			this.an1=!this.an1,this.an2=!this.an2
		}
	}
	}
</script>

<style>
	*{
		margin: 0;padding: 0;list-style: none;
	}
	
	.class-3{
		padding-bottom:2.3rem ;
		background:white;
		box-sizing: border-box;
		min-height:26.5rem;
	}
	#gouwuche{
		/*position:relative;
		z-index: 3;*/
		border-bottom:1px solid #e0e0e0;
		background-color: #f9f9f9;
		text-align:center;
		height: 1.064rem;
		padding:0.3rem 0.3rem 0.3rem 0.6rem;
		font-size:0.8rem;
		color: #333;
	}
	#gouwuche li{
		margin-top:0.2rem; ;
		float:left;
		width:0.5rem;
		height: 0.5rem;
		border-bottom: 0.1rem solid black;
		border-left: 0.1rem solid black;
		transform:rotate(45deg);
	}
	#xieyi{
		position:relative;
		overflow: hidden;
	}
	.xieyi{
		background: white;
		position:relative;
		z-index:3;
		display: flex;
		justify-content: center;
		border-bottom:1px solid #ddd;
		border-top:1px solid #ddd;
		padding:0.512rem 0.64rem;
		box-sizing: border-box;
		font-size:0.6rem;
		color: #1f94f5;;
	}
	.xieyi li:nth-child(1){
		width: 0.7rem;
		height:0.7rem;
		border-radius:50%;
		border: 1px solid #1f94f5;
		font-size:0.5rem;
		margin-right: 0.3rem;
	}
	.ro{
		width: 0.4rem;
		height:0.4rem;
		border-bottom:1px solid #ddd;
		border-left:1px solid #ddd;
		position:absolute;
		right:0.7rem;
		transform: rotate(-45deg);
	}
	.texti-xy{
		position:relative;
		top:-11rem;
		z-index: 2;
		background: white;
		/*display: none;*/
		font-size: 0.6rem;
		padding:0.2134rem 0.85334rem  3rem  0.85334rem;
	}
	.an1{
		animation:an1 0.5s;
	}
	.an2{
		animation:an2 0.5s;
	}
	@keyframes an1{
		0%{top:-10rem}
		100%{top:0rem}
	}
	@keyframes an2{
		0%{top:0rem}
		100%{top:-10rem}
	}
	.top{
		top:0rem;
		/*display: block;*/
	}
	.texti-xy li{
		margin-top: 0.2rem;
		line-height: 1rem;
		position:relative;
	}
	.texti-xy li>span{
		position:absolute;
		top:0;
		left: 0;
	}
	.texti-xy li>p{
		padding-left:0.66rem ;
	}
	.text-xy2{
		margin-top:0.3rem ;
		font-size:0.3rem;
	}
	.Telephone{
		color:white;
		margin: 0.6rem auto 0;
		height:1.707rem;
		text-align: center;
		line-height: 1.707rem;
		background:#f60;
	}
	.Telephone img{
		margin-right:0.3rem;
		width:0.512rem;
		height:0.5976rem;
	}
	.to{
		transform: rotate(135deg);
	}
	#gouwuche-2{
		position:absolute;
		top: 0;
		width:100%;
		text-align: center;
		margin-top:8rem;
	}
	#gouwuche-2 li{
		margin: 0 auto;
		width:4rem;
		height:4rem;
		border-radius: 50%;
		background: #f7f7f7;
	}
	#gouwuche-2 li>img{
		margin-top: 1rem;
		width:2rem;
		height:2rem;
	}
	#gouwuche-2 p{
		margin-top: 1.5rem;
		font-size:0.6rem;
	}
	#gouwuche-2 div{
		margin:1rem auto 0;
		border: 1px solid #ff6700;
		color:#ff6700;
		line-height:1.707rem;
		width:4.139rem;
		height:1.707rem;
		font-size: 0.6rem;
	}
	.colo{
		background: rgba(0,0,0,0.6);
	}
</style>