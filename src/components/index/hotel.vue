<template>
	<main>
		<mt-header title="酒店预订">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<hr />
		<ul>
			<li style="width: 50%;">
				<h3 style="margin-top: 0.3rem;">广州</h3>
			</li>
			<li style="width: 50%;">
				<span style="font-size: 1.5rem;"> > </span>
				<img src="../../assets/list/top4.png" style="vertical-align: middle;width: 30%;" />
			</li>
		</ul><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 33%;">
				<p>入住</p>
				<span style="font-size: 1.25rem;">07月15日</span>
				<span>周一</span>
			</li>
			<li style="width: 33%;">
				<div>共1晚</div>
			</li>
			<li style="width: 33%;">
				<p>离店</p>
				<span style="font-size: 1.25rem;">07月16日</span>
				<span>周二</span>
			</li>
		</ul><br /><br /><br /><br />
		<hr /><br />
		<input type="" name="" id="" value="" placeholder="搜索关键字/酒店名/地址
			            >" />
		<br />
		<input type="" name="" id="" value="" placeholder="价格/星级                   
			            >" />
		<ul>
			<li style="width: 70%;">
				<button id="btn1">查找酒店</button>
			</li>
			<li style="width: 30%;">
				<button id="btn2">附近酒店</button>
			</li>
		</ul><br /><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 49%;">
				<img src="../../assets/list/logo01.png" style="vertical-align: middle;width: 15%;" />
				<span>历史记录.收藏</span>
			</li>
			<li style="width: 2%;">
				<p>|</p>
			</li>
			<li style="width: 49%;">
				<img src="../../assets/list/logo02.png" style="vertical-align: middle;width: 15%;" />
				<span>我的订单</span>
			</li>
		</ul><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 33%;">
				<img src="../../assets/list/bottom05.png" />
				<p>特惠酒店</p>
			</li>
			<li style="width: 33%;">
				<img src="../../assets/list/bottom06.png" />
				<p>民宿客栈</p>
			</li>
			<li style="width: 33%;">
				<img src="../../assets/list/bottom05.png" />
				<p>经济酒店</p>
			</li>
		</ul><br /><br /><br /><br />
		<hr />
		<ul style="width: 80%;margin: 0 auto;font-size: 13px;color: grey;">
			<li style="width: 25%;">
				客服电话||
			</li>
			<li style="width: 25%;">
				客户端||
			</li>
			<li style="width: 25%;">
				关于同程|
			</li>
			<li style="width: 25%;">
				电脑版
			</li>
		</ul><br /><br />
		<p style="text-align: center;font-size: 13px;color: grey;">@2019同程旅游</p>
		<br />
		<hr />
	</main>
</template>

<script>
</script>

<style scoped="scoped">
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
	
	li>div {
		border: 1px solid lightgray;
		border-radius: 20px;
		width: 50%;
		margin: 0 auto;
	}
	
	input {
		width: 100%;
		height: 2.5rem;
		font-size: 1.3rem;
	}
	
	#btn1 {
		width: 90%;
		background: #ff7800;
		color: white;
		height: 3rem;
		border-radius: 10px;
		font-size: 1.3rem;
	}
	
	#btn2 {
		width: 90%;
		background: white;
		color: #2bc429;
		height: 3rem;
		border-radius: 10px;
		font-size: 1.3rem;
	}
</style>