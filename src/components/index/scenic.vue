<template>
	<main>
		<mt-header title="景点门票">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>''
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<nav id="s2">
			<mt-search placeholder="城市/景点/主题"></mt-search>
		</nav>
		<section id="swipe">
			<mt-swipe :auto="4000" :showIndicators="true">
				<mt-swipe-item><img src="../../assets/index/carousel01.png" /></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/index/carousel02.png" /></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/index/carousel03.png" /></mt-swipe-item>
			</mt-swipe>
		</section>
		<ul>
			<li style="width: 50%;margin-top: 0;">
				<p style="width: 50%;font-size: 13px;">离你最近</p>
			</li>
			<li style="width: 50%;margin-top: 0;">
				<p style="width: 140%;font-size: 13px;">查看全部></p>
			</li>
		</ul>
		<ul>
			<li style="width: 33%;">
				<img src="../../assets/list/img01.jpg" style="width: 100%;" />
			</li>
			<li style="width: 33%;">
				<div style="width: 90%;">
					<p>留园</p>
					<p style="color: red;">￥53起</p>
					<p>7642条点评 99%满意</p>
					<p>销量:396份</p>
				</div>
			</li>
			<li style="width: 33%;">
				<br /><br /><br /><br />
				<p>1.93km</p>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 50%;">
				<img src="../../assets/list/img06.png" style="width: 100%;" />
			</li>
			<li style="width: 50%;">
				<img src="../../assets/list/img07.png" style="width: 100%;" />
			</li>
		</ul>
		<img src="../../assets/list/img03.png" style="width: 100%;" />
		<ul>
			<li style="width: 49%;border: 1px solid gray;">
				<div style="float: left;margin-top: 10%;">
					<h4>游苏州园林</h4>
					<p class="txt1">品苏式生活</p>
				</div>
				<img src="../../assets/list/img04.png" style="width: 40%;" />
			</li>
			<li style="width: 49%;border: 1px solid gray;">
				<div style="float: left;margin-top: 10%;">
					<h4>门票9.9起</h4>
					<p class="txt1">周周更新</p>
				</div>
				<img src="../../assets/list/img05.png" style="width: 40%;" />
			</li>
		</ul><br /><br /><br /><br /><br />
		<img src="../../assets/list/img02.jpg" style="width: 100%;" />
	</main>
</template>

<script>
</script>

<style>
	/*index页面的两个css，在这个页面点进来时生效，但刷新后又不生效了，所以这个页面继续加上这两个css*/
	
	* {
		margin: 0;
		padding: 0;
	}
	
	li {
		float: left;
		list-style: none;
		text-align: center;
		margin-top: 1rem;
	}
	
	.mint-header {
		color: black;
		background: white;
	}
	
	.mint-search {
		height: 3rem;
	}
	
	#s2 .mint-searchbar {
		position: static;
		width: 100%;
	}
	
	#swipe {
		width: 100%;
		height: 5.5rem;
	}
	
	#swipe img {
		width: 100%;
		/*padding-bottom: 30%;*/
	}
	
	.txt1 {
		border-radius: 10px;
		border: 1px solid black;
	}
</style>