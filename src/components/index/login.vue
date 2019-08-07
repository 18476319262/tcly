<template>
	<main>
		<mt-header title="我的同程">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>''
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<hr />
		<router-link to='/register'>
			<ul>
				<li style="width: 50%;background: #00c8b3;margin-top: 0;">
					<div style="width:120%;">
						<img src="../../assets/list/login.png" style="vertical-align: middle;border-radius: 50%;width: 27%;" />
						<span style="color: white;">登录/注册</span>
					</div>

				</li>
				<li style="width: 50%;background: #00c8b3;margin-top: 0;">
					<div style="width: 120%;">
						<img src="../../assets/list/login02.png" style="vertical-align: middle;width: 50%;" />
						<span style="color: white;">></span>
					</div>
				</li>
			</ul>
		</router-link>

		<ul>
			<li style="width: 91%;">
				<div style="width: 40%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>全部订单</span>
				</div>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul><br /><br /><br /><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 91%;">
				<div style="width: 30%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>奖金</span>
				</div>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul>
		<ul>
			<li style="width: 91%;">
				<div style="width: 30%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>立返</span>
				</div>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul>
		<ul>
			<li style="width: 91%;">
				<div style="width: 30%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>红包</span>
				</div>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 36%;">
				<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
				<span>常用信息</span>
			</li>
			<li style="width: 55%;">
				<p style="font-size: 1px;margin-top: 0.3rem;color: lightgrey;">旅客、地址、银行卡、发票抬头</p>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul>
		<ul>
			<li style="width: 72%;">
				<div style="width: 50%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>我的发票</span>
				</div>
			</li>
			<li style="width: 19%;">
				<span style="font-size: 1px;color: lightgrey;">发票查询</span>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul>
		<ul>
			<li style="width: 91%;">
				<div style="width: 40%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>我的收藏</span>
				</div>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul>
		<ul>
			<li style="width: 91%;">
				<div style="width: 40%;">
					<img src="../../assets/list/bottom04.png" style="vertical-align: middle;" />
					<span>关于同程</span>
				</div>
			</li>
			<li style="width: 9%;">
				>
			</li>
		</ul><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br />
		<hr />
		<ul style="width: 80%;margin: 0 auto;font-size: 13px;color: grey;">
			<li style="width: 25%;">
				客服电话|
			</li>
			<li style="width: 25%;">
				客户端|
			</li>
			<li style="width: 25%;">
				关于同程|
			</li>
			<li style="width: 25%;">
				电脑版
			</li>
		</ul><br /><br />
		<p style="text-align: center;font-size: 13px;color: grey;">@2019同程旅游</p>
	</main>
</template>

<script>
</script>

<style>
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
	}
	
	.mint-header {
		color: black;
		background: white;
	}
</style>