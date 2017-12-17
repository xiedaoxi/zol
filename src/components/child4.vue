<template>
	<div id="child">
	<p class="text-1">数码摄像</p>
	<ul class="fenle">
		<li class="img-d">
			<img src="img/shuma1.jpg"/>
			<p>数码相机</p>
		</li>
		<li class="img-d">
			<img src="img/shuma2.jpg"/>
			<p>相机镜头</p>
		</li>
		<li class="img-d-k">
		</li>
	</ul>
	<p class="text-1">数码配件</p>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/shuma3.jpg"/>
			<p>相机镜头</p>
		</li>
		<li class="img-a">
			<img src="img/shuma4.jpg"/>
			<p>滤镜</p>
		</li>
		<li class="img-a">
			<img src="img/shuma5.jpg"/>
			<p>相机电池</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/shuma6.jpg"/>
			<p>闪光灯</p>
		</li>
		<li class="img-a">
			<img src="img/shuma7.jpg"/>
			<p>相机遥控器</p>
		</li>
		<li class="img-a">
			<img src="img/shuma8.jpg"/>
			<p>相机包</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-b">
			<img src="img/shuma9.jpg"/>
			<p>内存卡</p>
		</li>
	</ul>
	<p class="text-1">热门品牌</p>
	<ul class="fenle">
		<li class="img-cc">
			<img src="img/shuma10.jpg"/>
			<p>佳能</p>
		</li>
		<li class="img-c">
			<img src="img/shuma11.jpg"/>
			<p>索尼</p>
		</li>
		<li class="img-c">
			<img src="img/shuma12.jpg"/>
			<p>尼康</p>
		</li>
	</ul>
	</div>
</template>

<script>
	export default{
		name:'child4'
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
	.img-cc img{
		width:3.627rem;
		height:1.835rem;
		margin-bottom: 1.792rem;
	}
	.img-c p,.img-cc p{
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