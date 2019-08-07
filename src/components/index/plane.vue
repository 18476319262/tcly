<template>
	<main>
		<mt-header title="机票预订">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<hr />
		<!--tab切换-->
		<mt-navbar v-model="selected">
			<mt-tab-item id="1"><p style="font-size: 20px;">国内</p></mt-tab-item>
			<mt-tab-item id="2"><p style="font-size: 20px;">国际·港澳台</p></mt-tab-item>
			<mt-tab-item id="3"><p style="font-size: 20px;">往返</p></mt-tab-item>
		</mt-navbar>

		<!-- tab-container 第一页-->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul>
					<li style="width: 33%;">
						<h2>上海</h2>
					</li>
					<li style="width: 33%;">
						<img src="../../assets/list/tab2.png" style="width: 30%;" />
					</li>
					<li style="width: 33%;">
						<h2>北京</h2>
					</li>
				</ul><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 50%;">
						<span style="font-size: 1.4rem;">07月16日</span>
						<span>明天出发</span>
					</li>

					<li style="width: 50%;">
						<span><img src="../../assets/list/top3.png" style="width: 15%;"/></span>
						<span>返程日期</span>
					</li>

				</ul><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 33%;">
						<h3>经济舱</h3>
					</li>
					<li style="width: 33%;">
						<span>携带儿童</span>
						<input type="checkbox" name="" id="" value="" />
						<p>2-12岁</p>
					</li>
					<li style="width: 33%;">
						<span>携带婴儿</span>
						<input type="checkbox" name="" id="" value="" />
						<p>14天-2岁</p>
					</li>
				</ul><br /><br /><br /><br />
				<hr /><br />
				<div style="text-align: center;">
					<button id="btn">飞机票查询</button>
				</div><br />
				<hr />
				<ul>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom01.png" />
						<p>机票订单</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom02.png" />
						<p>航班动态</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom03.png" />
						<p>在线值机</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom04.png" />
						<p>行程定制</p>
					</li><br /><br /><br /><br />
					<hr />
				</ul>
			</mt-tab-container-item>

			<!--第二页-->
			<mt-tab-container-item id="2">
				<ul>
					<li style="width: 33%;">
						<h2>上海</h2>
					</li>
					<li style="width: 33%;">
						<img src="../../assets/list/tab2.png" style="width: 30%;" />
					</li>
					<li style="width: 33%;">
						<h2>香港</h2>
					</li>
				</ul><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 50%;">
						<span style="font-size: 1.4rem;">07月16日</span>
						<span>明天出发</span>
					</li>

					<li style="width: 50%;">
						<span><img src="../../assets/list/top3.png" style="width: 15%;"/></span>
						<span>返程日期</span>
					</li>

				</ul><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 50%;">
						<p>经济/超级经济舱</p>
					</li>
					<li style="width: 50%;">
						<span>1成人</span>
						<span>0儿童</span>
						<span>0婴儿</span>
					</li>
				</ul><br /><br /><br />
				<hr /><br />
				<div style="text-align: center;">
					<button id="btn">飞机票查询</button>
				</div><br />
				<hr />
				<ul>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom01.png" />
						<p>机票订单</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom02.png" />
						<p>航班动态</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom03.png" />
						<p>在线值机</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom04.png" />
						<p>行程定制</p>
					</li><br /><br /><br /><br />
					<hr />
				</ul>
			</mt-tab-container-item>

			<!--第三页-->
			<mt-tab-container-item id="3">
				<ul>
					<li style="width: 33%;">
						<h2>上海</h2>
					</li>
					<li style="width: 33%;">
						<img src="../../assets/list/tab2.png" style="width: 30%;" />
					</li>
					<li style="width: 33%;">
						<h2>香港</h2>
					</li>
				</ul><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 50%;">
						<span style="font-size: 1.4rem;">07月16日</span>
						<span>明天出发</span>
					</li>

					<li style="width: 50%;">
						<span style="font-size: 1.4rem;">07月19日</span>
						<span>周五返回</span>
					</li>

				</ul><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 50%;">
						<p>经济/超级经济舱</p>
					</li>
					<li style="width: 50%;">
						<span>1成人</span>
						<span>0儿童</span>
						<span>0婴儿</span>
					</li>
				</ul><br /><br /><br />
				<hr /><br />
				<div style="text-align: center;">
					<button id="btn">往返飞机票查询</button>
				</div><br />
				<hr />
				<ul>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom01.png" />
						<p>机票订单</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom02.png" />
						<p>航班动态</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom03.png" />
						<p>在线值机</p>
					</li>
					<li style="width: 25%;">
						<img src="../../assets/list/bottom04.png" />
						<p>行程定制</p>
					</li><br /><br /><br /><br />
					<hr />
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				selected: "2",
			}
		}
	}
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
	
	#btn {
		width: 90%;
		background: #23beae;
		color: white;
		height: 3rem;
		border-radius: 30px;
		font-size: 1.3rem;
	}
</style>