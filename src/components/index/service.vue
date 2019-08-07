<template>
	<main>
		<mt-header title="全部服务">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-search placeholder="搜索想要的服务"></mt-search>
		<hr />
		<h3>&nbsp;&nbsp;&nbsp;交通出行</h3>
		<ul>
			<li style="width: 20%;">
				<p>火车票</p>
			</li>
			<li style="width: 20%;">
				<p>火车抢票</p>
			</li>
			<li style="width: 20%;">
				<p>国内机票</p>
			</li>
			<li style="width: 20%;">
				<p>国际机票</p>
			</li>
			<li style="width: 20%;">
				<p>汽车票</p>
			</li>
			<li style="width: 20%;">
				<p>船票</p>
			</li>
		</ul><br /><br /><br /><br /><br /><hr />
		<h3>&nbsp;&nbsp;&nbsp;酒店住宿</h3>
		<ul>
			<li style="width: 20%;">
				<p>国内酒店</p>
			</li>
			<li style="width: 20%;">
				<p>民宿·客栈</p>
			</li>
		</ul><br /><br /><br /><hr />
		<h3>&nbsp;&nbsp;&nbsp;旅游度假</h3>
		<ul>
			<li style="width: 20%;">
				<p>景点门票</p>
			</li>
			<li style="width: 20%;">
				<p>周边自由</p>
			</li>
			<li style="width: 20%;">
				<p>周边跟团</p>
			</li>
			<li style="width: 20%;">
				<p>国内游</p>
			</li>
			<li style="width: 20%;">
				<p>出境游</p>
			</li>
			<li style="width: 20%;">
				<p>邮轮</p>
			</li>
			<li style="width: 20%;">
				<p>海外玩乐</p>
			</li>
			<li style="width: 20%;">
				<p>定制旅行</p>
			</li>
			<li style="width: 20%;">
				<p>签证</p>
			</li>
			<li style="width: 20%;">
				<p>全球WiFi</p>
			</li>
			<li style="width: 20%;">
				<p>购物·换汇</p>
			</li>
			<li style="width: 20%;">
				<p>攻略游记</p>
			</li>
		</ul><br /><br /><br /><br />
		<br /><br /><br /><hr />
		<h3>&nbsp;&nbsp;&nbsp;服务/工具</h3>
		<ul>
			<li style="width: 20%;">
				<p>客服咨询</p>
			</li>
			<li style="width: 20%;">
				<p>保险</p>
			</li>
			<li style="width: 20%;">
				<p>联盟合作</p>
			</li>
			<li style="width: 20%;">
				<p>百旅·旅居</p>
			</li>
		</ul><br /><br /><br /><hr />
	</main>
</template>

<script>
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	li {
		float: left;
		list-style: none;
		text-align: center;
		/*顶部留白，非常通用*/
		margin-top: 1rem;
		margin-left: 1rem;
	}
	
	.mint-header {
		color: black;
		background: white;
	}
	
	.mint-search {
		height: 4rem;
	}
	
	p{
		background: #f5f5f5;
	}
</style>