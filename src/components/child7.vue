<template>
	<div id="child">
			<p class="text-1">外设装备</p>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/waishe1.jpg"/>
			<p>鼠标</p>
		</li>
		<li class="img-a">
			<img src="img/waishe2.jpg"/>
			<p>耳机</p>
		</li>
		<li class="img-a">
			<img src="img/waishe3.jpg"/>
			<p>键盘</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/waishe4.jpg"/>
			<p>键鼠套装</p>
		</li>
		<li class="img-a">
			<img src="img/waishe5.jpg"/>
			<p>鼠标垫</p>
		</li>
		<li class="img-a">
			<img src="img/waishe6.jpg"/>
			<p>音箱</p>
		</li>
	</ul>
	<p class="text-1">存储设备</p>
	<ul class="fenle">
		<li class="img-d">
			<img src="img/waishe7.jpg"/>
			<p>U盘</p>
		</li>
		<li class="img-d">
			<img src="img/waishe8.jpg"/>
			<p>移动硬件</p>
		</li>
		<li class="img-d-k">
		</li>
	</ul>
	<p class="text-1">路由器</p>
	<ul class="fenle">
		<li class="img-b">
			<img src="img/waishe9.jpg"/>
			<p>路由器</p>
		</li>
	</ul>
	</div>
</template>

<script>
	export default{
		name:'child7'
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