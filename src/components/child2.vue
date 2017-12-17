<template>
	<div id="child">
	<p class="text-1">手机通讯</p>
	<ul class="fenle">
		<li class="img-b">
			<img src="img/sj.jpg"/>
			<p>手机</p>
		</li>
	</ul>
	<p class="text-1">手机配件</p>
	<ul class="fenle">
		<li class="img-c">
			<img src="img/sj1.jpg"/>
			<p>手机保护套</p>
		</li>
		<li class="img-c">
			<img src="img/sj2.jpg"/>
			<p>移动电源</p>
		</li>
		<li class="img-c">
			<img src="img/sj3.jpg"/>
			<p>手机充电线</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-d">
			<img src="img/sj4.jpg"/>
			<p>手机数据线</p>
		</li>
		<li class="img-d">
			<img src="img/sj5.jpg"/>
			<p>手机贴膜</p>
		</li>
		<li class="img-d-k">
		</li>
	</ul>
		<p class="text-1">热门品牌</p>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/pg.jpg"/>
			<p>苹果</p>
		</li>
		<li class="img-a">
			<img src="img/hw.jpg"/>
			<p>华为</p>
		</li>
		<li class="img-a">
			<img src="img/lg.jpg"/>
			<p>乐观</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/oppo.jpg"/>
			<p>OPPO</p>
		</li>
		<li class="img-a">
			<img src="img/vivo.jpg"/>
			<p>vivo</p>
		</li>
		<li class="img-a">
			<img src="img/kp.jpg"/>
			<p>酷派</p>
		</li>
	</ul>
	</div>
</template>

<script>
	export default{
		name:'child2'
	}
</script>

<style>
	*{
		margin: 0;padding: 0;list-style: none;
	}
	#child{
		width: 12.459rem;
		padding:0.768rem 0 0 0.512rem;
		box-sizing:border-box;
	}
	.text-1{
		margin-top:0.75rem ;
		color: #999;
		font-size:0.4rem;
	}
	.fenle{
		display: flex;
		/*height:5.5rem;*/
		padding:0.3rem 0 0.3rem 0 ;
		box-sizing: border-box;
	}
	.img-b{
		
	}
	.img-b img{
		width:3.627rem;
		height:3.627rem;
	}
	.img-b p{
		text-align: center;
		font-size:0.4rem;
	}
	.img-c{
		flex-grow:1;
		text-align: center;
	}
	.img-c img{
		width:3.627rem;
		height:3.627rem;
	}
	.img-c p{
		text-align: center;
		font-size:0.4rem;
	}
	.img-d{
		flex-grow:1;
		text-align: center;
	}
	.img-d-k{
		width: 4rem;
		height:4.5657rem;
	}
	.img-d img{
		width:3.627rem;
		height:3.627rem;
	}
	.img-d p{
		text-align: center;
		font-size:0.4rem;
	}
	.text-1{
		margin-top:0.75rem ;
		color: #999;
		font-size:0.4rem;
	}
	.fenle{
		display: flex;
		/*height:5.5rem;*/
		padding:0.3rem 0 0.3rem 0 ;
		box-sizing: border-box;
	}
	.img-a{
		flex-grow:1;
		text-align: center;
	}
	.img-a img{
		width:3.627rem;
		height:3.627rem;
	}
	.img-a p{
		text-align: center;
		font-size:0.4rem;
	}
</style>