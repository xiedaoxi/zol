<template>
	<div id="child">
	<p class="text-1">DIY整机</p>
	<ul class="fenle">
		<li class="img-b">
			<img src="img/zuzji1.jpg"/>
			<p>DIY整机</p>
		</li>
	</ul>
		<p class="text-1">DIY硬件</p>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/zuzji2.jpg"/>
			<p>显示器</p>
		</li>
		<li class="img-a">
			<img src="img/zuzji3.jpg"/>
			<p>显卡</p>
		</li>
		<li class="img-a">
			<img src="img/zuzji4.jpg"/>
			<p>主板</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/zuzji5.jpg"/>
			<p>固态硬盘</p>
		</li>
		<li class="img-a">
			<img src="img/zuzji6.jpg"/>
			<p>内存</p>
		</li>
		<li class="img-a">
			<img src="img/zuzji7.jpg"/>
			<p>CPU</p>
		</li>
	</ul>
	<ul class="fenle">
		<li class="img-a">
			<img src="img/zuzji8.jpg"/>
			<p>散热器</p>
		</li>
		<li class="img-a">
			<img src="img/zuzji9.jpg"/>
			<p>机箱</p>
		</li>
		<li class="img-a">
			<img src="img/zuzji10.jpg"/>
			<p>电源</p>
		</li>
	</ul>
	</div>
</template>

<script>
	export default{
		name:'child5'
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