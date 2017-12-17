<template>
	<div id="wode">
	<ul class="wode">
		<li></li>
		<li>Z商城买家中心</li>
		<li>退出</li>
	</ul>
	<div id="zh">
		<img src="img/zole.jpg"/><br>
		<span>qq_152451673</span>
		<li>
			<p>账号管理</p>
			<p></p>
		</li>
	</div>
	<div id="dindan">
		<p>我的订单</p>
	</div>
	<ul class="did">
		<li><img src="img/did1.png"/><p>待付款</p></li>
		<li><img src="img/did2.png"/><p>待收货</p></li>
		<li><img src="img/did3.png"/><p>待收货</p></li>
		<li><img src="img/did4.png"/><p>带评价</p></li>
		<li><img src="img/did5.png"/><p>全部订单</p></li>
	</ul>
	<ul class="diz">
		<li>
		<p>退款/售后</p>
		<p></p>
		</li>
		<li>
		<p>收货地址管理</p>
		<p></p>
		</li>
		<li>
		<p>我的优惠劵</p>
		<p></p>
		</li>
		<li>
		<p>客服电话:400-688-1999</p>
		<p></p>
		</li>
	</ul>
	</div>
</template>

<script>
	export default{
		name:'vue4',
	
	}
</script>

<style>
	*{
		margin: 0;padding: 0;list-style: none;
	}
	#wode{

	}
	.wode{
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0;
		color:white;
		background: #cd2934;
		height: 2.045rem;
		padding:0 0.5rem;
		line-height:  2.045rem;
	}
	.wode li:nth-child(1){
		margin-top: 0.7rem;
		width:0.5rem;
		height:0.5rem;
		border-bottom:1px solid white;
		border-left:1px solid white;
		transform: rotate(45deg);
	}
	.wode li:nth-child(2){
		font-size:0.85rem;
	}
	.wode li:nth-child(3){
		font-size:0.7rem;
	}
	#zh{
		text-align: center;
		height: 6.178rem;
		position:relative;
		font-size:0.7rem;
	}
	#zh img{
		width:3rem;
		height:3rem;
		border-radius:50%;
		margin-bottom: 0.4rem;
	}
	#zh li{
		display: flex;
		position:absolute;
		right:0.6rem;top:0.6rem;
	}
	#zh li>p:nth-child(2){
		width: 0.5rem;
		height:0.5rem;
		border-bottom: 2px solid white;
		border-right: 2px solid white;
		margin:0.2rem 0 0 0.2rem;
		transform: rotate(-45deg);
	}
	#dindan{
		padding: 0 0.44446rem;
		display: flex;
		height: 1.667rem;
		background:white;
		border-bottom: 1px solid #e6e6e6;
	}
	#dindan p{
		width: 3.2rem;
		color:#cd2934;
		line-height:1.667rem ;
		font-size:0.8rem;
		box-sizing: border-box;
		border-bottom: 2px solid #cd2934;
	}
	.did{
		display: flex;
		background: white;
		height: 3.4227rem;
		font-size:0.6rem;
		margin-bottom:0.5rem ;
	}
	.did li{
		text-align: center;
		flex-grow:1;
	}
	.did img{
		margin:0.7rem 0 0.2rem 0;
		width: 1rem;
		height: 0.8rem;
	}
	.diz{
		display: flex;
		flex-direction: column;
		height:7.8229rem;
		color: #333;
		font-size:0.7rem;
		padding-left: 0.5rem;
		padding-right:0.6rem;
		background: white;
	}
	.diz li{
		display: flex;
		line-height: 1.8rem;
		flex-grow:1;
		justify-content: space-between;
		border-bottom:1px solid  #e6e6e6;
	}
	.diz li:nth-child(4){
		border-bottom:none;
	}
	.diz li>p:nth-child(2){
		width: 0.5rem;
		height:0.5rem;
		margin-top: 0.7rem;
		border-bottom: 1px solid;
		border-right: 1px solid;
		transform: rotate(-45deg);
	}
</style>