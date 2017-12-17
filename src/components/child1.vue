<template>
	<div id="child">
	<p class="text-1">推荐分类</p>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/sj.jpg"/>
			<p>手机</p>
		</li>
		<li class="img-a">
			<img src="img/dn.jpg"/>
			<p>笔记本电脑</p>
		</li>
		<li class="img-a">
			<img src="img/xj.jpg"/>
			<p>数码相机</p>
		</li>
	</ul>
	<p class="text-1">推荐品牌</p>
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
		name:'child1'
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