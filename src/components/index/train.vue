<template>
	<main>
		<mt-header title="同程艺龙火车票">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<hr />
		<section>
			<ul>
				<li style="width: 33%;">
					<p>出发城市</p>
					<h2>上海</h2>
				</li>
				<li style="width: 33%;">
					<img src="../../assets/list/tab.png" id="tab1" />
				</li>
				<li style="width: 33%;">
					<p>到达城市</p>
					<h2>请选择</h2>
				</li>
			</ul>
			<br /><br /><br /><br />
			<hr />
			<ul>
				<li style="width: 50%;">
					<span style="font-size: 1.4rem;">07月16日</span>
					<span>周二 明天</span>
				</li>
			</ul><br /><br /><br />
			<hr />
			<ul>
				<li style="width: 50%;">
					<span>学生票</span>
					<input type="checkbox" name="" id="" value="" />
				</li>
				<li style="width: 50%;">
					<span>高铁/动车</span>
					<input type="checkbox" name="" id="" value="" />
				</li>
			</ul><br /><br />
			<div style="text-align: center;">
				<button id="btn">火车票查询</button>
			</div><br />
			<hr />
		</section>
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
	
	#tab1 {
		margin-top: 0.8rem;
		width: 2.5rem;
	}
	
	#btn {
		width: 90%;
		background: #23beae;
		color: white;
		height: 3rem;
		border-radius: 30px;
		font-size: 1.3rem;
	}
</style>