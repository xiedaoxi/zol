<template>
	<div>
	
	<div id="ShoppingMall">
		<ul class="search">
		<img class="img-s" src="img/logo.png"/>
		<p class="country">全国</p><p class="Arrow"></p>
		<ul class="Searchfor"><img src="img/fd.png"/><li>ipsds7</li></ul>
		</ul>
		<span style="font-size:0.5rem;line-height:1.3rem;
		color:white;margin-right: 0.4rem;">登录</span>
	</div>
	<div id="srcoll">
	<img style="width:16rem;height:7.467rem;" src="img/tab1.jpg"/>
	<div class="srcoll">
	<img src="img/tab2.jpg"/>
	<img src="img/tab1.jpg"/>
	</div>
	<ul id="spot">
	<li></li>
	<li></li>
	<li></li></ul>
	</div>
	<ul class="purchase">
		<a href="">团购</a>
		<a href="">z智选</a>
		<a href="">维修</a>
		<a href="">领劵</a>
	</ul>
	<ul class="purchase2">
		<a href="">手机</a>
		<a href="">电脑</a>
		<a href="">DIY</a>
		<a href="">相机</a>
	</ul>
	<ui id='shop'>
	<li>精选好店</li>
	<li>更多</li>
	</ui>
	<ul id="shop-child">
		<img src="img/qiu.jpg"/>
		<li class="shop-text">
		<p>印象通讯潮电馆</p>
		<p>新店开业，到店有惊喜！</p>
		<p>ZOL推荐商家</p>
		</li>
		<img src="img/qiu.jpg"/>
		<li class="shop-text">
		<p>爱科生活</p>
		<p>到店大礼包</p>
		<p>ZOL推荐商家</p>
		</li>
	</ul>
	<ui id='shop2'>
	<li>身边好物</li>
	<li>身边好物就在这里</li>
	</ui>
	<ul id="look">
		<li><img src="img/kk1.jpg"/>
			<p>苹果 iPhone 7 Plus（全网通）</p>
			<p>【全国包邮】【北京三小时送达】</p>
			<p>去看看</p>
		</li>
		<li><img src="img/kk2.jpg"/>
			<p>三星 Galaxy C9Pro（C9000）6+64G 枫叶金 全网通 4G手机 双卡双待</p>
			<p>三星 Galaxy C9Pro（C9000）6+64G 枫叶金 全网通 4G手机 双卡双待</p>
			<p>去看看</p>
		</li>
		<li><img src="img/kk3.jpg"/>
			<p>【apple授权专卖 顺丰包邮】苹果 iPad Pro 12.9英寸（128GB/WiFi版）</p>
			<p>自提先验货后付款京四环内货到付款</p>
			<p>去看看</p>
		</li>
		<li><img src="img/kk4.jpg"/>
			<p>索尼（SONY）HDR-PJ410 摄像机 索尼 HDR-PJ410   索尼PJ410摄像机</p>
			<p>光学防抖 内置投影 NFC/WIFI</p>
			<p>去看看</p>
		</li>
	</ul>
	<div style="height: 300px;background: white;"></div>
	</div>
</template>

<script>
	export default{
		name:'vue1',
		data(){
			return{ }
		},
		methods:{
		
		}
	}
</script>

<style>
	*{
		margin: 0;padding: 0;list-style: none;text-decoration: none;
	}
	#ShoppingMall{
		background:#ce1a1b;;
		height: 1.707rem;
		display: flex;
		justify-content: space-between;
		padding: 0.21334rem 0 0.21334rem 0.42665rem; 
		box-sizing:border-box;
	}
	.search{
		display: flex;
	}
	.country{
		margin-left: 0.42668rem;
		width:1.024rem;
		line-height:1.3rem;
		font-size:0.5rem;
		color:white;
	}
	.Arrow{
		margin:0.48rem 0 0 0.3rem;
		width:0.256rem;
		height:0.256rem;
		border-bottom:0.02rem white solid;
		border-left:0.02rem white solid;
		transform:rotate(-45deg);
	}
	.img-s{
		margin-top: 0.14933rem;
		width:2.1976rem;
		height:1.024rem;
	}
	.Searchfor{
		margin-left:0.64rem;
		border-radius:3px;
		background: #a90102;
		font-size:0.5rem;
		width:8.5338rem;
		line-height: ;
		position: relative;
	}
	.Searchfor img{
   	position: absolute;
    top: 0.34rem;
    left: .19rem;
    width: 0.6618rem;
    height: 0.6618rem;
	}
	.Searchfor li{
	color: #fc8889;
   	position: absolute;
    top: 0.3rem;
    left: 1.1rem;
    width: 0.64rem;
    height: 0.64rem;
	}
	#srcoll{
		position: relative;
		width:16rem;height:7.467rem;
		overflow: hidden;
	}
	.srcoll{
		width:32rem;
		position: absolute;
		top:0;
		right:-32rem;
	}
	.srcoll img{
		float:left;
		width:16rem;height:7.467rem;
	}
	#spot{
	position: absolute;
	bottom:0.256rem;
	width:100%;
	display: flex;
	justify-content: center;
	}
	#spot li{
	margin:0 0.128rem;
	width:0.427rem;
	height:0.427rem;
	border-radius:50%;
	background: #f5f5f5;
	}
	.purchase,.purchase2{
		background: white;
		display: flex;
		height: 3.456rem;
		box-sizing: border-box;
	}
	.purchase a{
		padding:2.34668rem 0 0.21334rem 0;
		font-size: 0.5rem;
		color:black;
		text-align: center;
		background:url(../../img/1.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
		box-sizing: border-box;
		flex-grow:1;
	}
	.purchase a:nth-child(2){
		width: 1.024rem;
		background:url(../../img/2.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
	}
	.purchase a:nth-child(3){
		width: 1.024rem;
		background:url(../../img/3.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
	}
	.purchase a:nth-child(4){
		width: 1.024rem;
		background:url(../../img/4.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
	}
	.purchase2{
		margin-bottom: 0.4rem;
		}
	.purchase2 a{
		padding:2.34668rem 0 0.21334rem 0;
		font-size: 0.5rem;
		color:black;
		text-align: center;
		background:url(../../img/5.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
		box-sizing: border-box;
		flex-grow:1;
	}
	.purchase2 a:nth-child(2){
		width: 1.024rem;
		background:url(../../img/6.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
	}
	.purchase2 a:nth-child(3){
		width: 1.024rem;
		background:url(../../img/7.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
	}
	.purchase2 a:nth-child(4){
		width: 1.024rem;
		background:url(../../img/8.png) no-repeat;
		background-size: 1.7rem 1.7rem;
		background-position:1.2rem 0.5rem;
	}
	#shop{
		background: white;
		display: flex;
		justify-content: space-between;
		height: 1.707rem;
		padding:0 0.42666rem;
	}
	#shop li:nth-child(1){
		line-height:1.707rem;
		font-size:0.6828rem;
	}
	#shop li:nth-child(2){
		padding-right: 0.384rem;
		line-height:1.707rem;
		font-size:0.5rem;
		background: url(../../img/jt.png)no-repeat;
		background-size: 0.5rem 0.5rem ;
		background-position:1rem 0.7rem;
	}
	#shop-child{
		margin-bottom: 0.4rem;
		background: white;
		display: flex;
		height: 3.2rem;
		box-sizing: border-box;
		padding:0 0 0.64rem 0.42666rem;
	}
	#shop-child img{
		width: 3.4138rem;
	}
	.shop-text{
		width: 4.3rem;
		font-size:0.6rem;
	}
	.shop-text p:nth-child(2){
		text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
		width: 4.3rem;
		font-size:0.5rem;
		color: #b8b8b8;
	}
	.shop-text p:nth-child(3){
		border: 1px solid red;
		border-radius:3px;
		width: 3.7rem;
		font-size:0.5rem;
		color:red;
		margin-top: 0.3rem;
	}
	#shop2{
		background: white;
		display: flex;
		height: 1.707rem;
		padding:0 0.42666rem;
	}
	#shop2 li:nth-child(1){
		line-height:1.707rem;
		font-size:0.6828rem;
	}
	#shop2 li:nth-child(2){
		padding-left: 0.2987rem;
		line-height:1.707rem;
		font-size:0.5rem;
		color: #b8b8b8;
	}
	#look{
		background: white;
		display: flex;
		height: 6.55rem;
	}
	#look li{
		flex-grow:1;
	}
	#look p{
	width:3.556rem;
	font-size:0.4rem ;
	text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
	}
	#look p:nth-child(4){
		color:white;
		height:0.8rem;
		border-radius:2px;
		margin: 0.3rem auto 0;
		width:2.556rem;
		background: #e40522;
		text-align: center;
	}
	#look img{
		width:3.556rem;
		height:3.556rem;
	}
</style>