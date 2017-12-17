<template>
	<div id="child">
	<p class="text-1">手机配件</p>
	<ul class="fenle">
		<li class="img-c">
			<img src="img/dinao1.jpg"/>
			<p>笔记本电脑</p>
		</li>
		<li class="img-c">
			<img src="img/dinao2.jpg"/>
			<p>平板电脑</p>
		</li>
		<li class="img-c">
			<img src="img/dinao3.jpg"/>
			<p>台式机</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-d">
			<img src="img/dinao4.jpg"/>
			<p>一体机</p>
		</li>
		<li class="img-d">
			<img src="img/dinao5.jpg"/>
			<p>游戏笔记本</p>
		</li>
		<li class="img-d-k">
		</li>
	</ul>
	<p class="text-1">笔记本配件</p>
	<ul class="fenle">
		<li class="img-c">
			<img src="img/dinao6.jpg"/>
			<p>笔记本包</p>
		</li>
		<li class="img-c">
			<img src="img/dinao7.jpg"/>
			<p>笔记本电池</p>
		</li>
		<li class="img-c">
			<img src="img/dinao8.jpg"/>
			<p>笔记本底座</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-d">
			<img src="img/dinao9.jpg"/>
			<p>笔记本电源</p>
		</li>
		<li class="img-d">
			<img src="img/dinao10.jpg"/>
			<p>笔记本配件</p>
		</li>
		<li class="img-d-k">
		</li>
	</ul>
	<p class="text-1">工作站</p>
	<ul class="fenle">
		<li class="img-b">
			<img src="img/dinao11.jpg"/>
			<p>手机</p>
		</li>
	</ul>
		<p class="text-1">热门品牌</p>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/dinao12.jpg"/>
			<p>Acer</p>
		</li>
		<li class="img-a">
			<img src="img/dinao13.jpg"/>
			<p>三星</p>
		</li>
		<li class="img-a">
			<img src="img/dinao14.jpg"/>
			<p>Thinkpad</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/dinao15.jpg"/>
			<p>微星</p>
		</li>
		<li class="img-a">
			<img src="img/dinao16.jpg"/>
			<p>苹果</p>
		</li>
		<li class="img-a">
			<img src="img/dinao17.jpg"/>
			<p>微软</p>
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