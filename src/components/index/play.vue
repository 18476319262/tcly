<template>
	<main>
		<mt-header title="海外玩乐">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>''
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<section id="swipe">
			<mt-swipe :auto="4000" :showIndicators="true">
				<mt-swipe-item><img src="../../assets/index/carousel01.png" /></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/index/carousel02.png" /></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/index/carousel03.png" /></mt-swipe-item>
			</mt-swipe>
		</section>
		<mt-search placeholder="请输入你要前往的目的地"></mt-search>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">
				<p style="font-size: 20px;">热门</p>
			</mt-tab-item>
			<mt-tab-item id="2">
				<p style="font-size: 20px;">日本</p>
			</mt-tab-item>
			<mt-tab-item id="3">
				<p style="font-size: 20px;">港澳台</p>
			</mt-tab-item>
			<mt-tab-item id="4">
				<p style="font-size: 20px;">东南亚</p>
			</mt-tab-item>
			<mt-tab-item id="5">
				<p style="font-size: 20px;">欧美澳</p>
			</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play01.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">香港</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play02.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">东京</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play03.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">新加坡</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play04.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">清迈</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play05.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">澳门</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play06.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">墨尔本</p>
					</li>
				</ul>
			</mt-tab-container-item>

			<mt-tab-container-item id="2">
				<ul>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play06.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">墨尔本</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play02.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">东京</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play01.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">香港</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play04.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">清迈</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play03.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">新加坡</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play05.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">澳门</p>
					</li>
				</ul>
			</mt-tab-container-item>

			<mt-tab-container-item id="3">
				<ul>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play03.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">新加坡</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play02.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">东京</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play05.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">澳门</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play01.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">香港</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play06.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">墨尔本</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play04.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">清迈</p>
					</li>
				</ul>
			</mt-tab-container-item>

			<mt-tab-container-item id="4">
				<ul>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play01.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">香港</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play04.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">清迈</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play03.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">新加坡</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play02.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">东京</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play05.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">澳门</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play06.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">墨尔本</p>
					</li>
				</ul>
			</mt-tab-container-item>

			<mt-tab-container-item id="5">
				<ul>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play04.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">清迈</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play02.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">东京</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play03.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">新加坡</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play06.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">墨尔本</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play05.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">澳门</p>
					</li>
					<li style="width: 33.3%;height: 6rem;background-image: url(src/assets/list/play01.jpg);background-repeat: no-repeat;">
						<p style="color: white;margin-top: 4.2rem;">香港</p>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container><br />
		<div style="text-align: center;">
			<p style="color: grey;">查看全部></p>
		</div><br />
		<hr />
		<ul>
			<li style="width: 25%;">
				<img src="../../assets/list/list11.png" style="width: 50%;" />
				<p>景点门票</p>
			</li>
			<li style="width: 25%;">
				<img src="../../assets/list/list22.png" style="width: 50%;" />
				<p>一日游</p>
			</li>
			<li style="width: 25%;">
				<img src="../../assets/list/list33.png" style="width: 50%;" />
				<p>WIFI</p>
			</li>
			<li style="width: 25%;">
				<img src="../../assets/list/list44.png" style="width: 50%;" />
				<p>交通出行</p>
			</li>
		</ul><br /><br /><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 25%;">
				<h4>热卖产品</h4>
			</li>
			<li style="width: 75%;"></li>
		</ul><br /><br />
		<ul>
			<li style="width: 30%;">
				<img src="../../assets/list/list06.jpg" style="width: 100%;margin-left: 10%;" />
			</li>
			<li style="width: 40%;">
				<div style="width: 110%;margin-top: 20%;">
					<p>香港迪士尼乐园</p>
					<p style="color: blue;">主题门票 | 香港</p>
					<p style="color: red;">￥77起</p>
				</div>
			</li>
			<li style="width: 30%;">
				<p style="width: 110%;margin-top: 65%;color: gray;">月销1715</p>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br /><hr />
		<ul>
			<li style="width: 30%;">
				<img src="../../assets/list/list07.jpg" style="width: 100%;margin-left: 10%;" />
			</li>
			<li style="width: 40%;">
				<div style="width: 110%;margin-top: 20%;">
					<p>香港海洋公园</p>
					<p style="color: blue;">主题门票 | 香港</p>
					<p style="color: red;">￥86起</p>
				</div>
			</li>
			<li style="width: 30%;">
				<p style="width: 110%;margin-top: 65%;color: gray;">月销3769</p>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br /><hr />
		<ul>
			<li style="width: 30%;">
				<img src="../../assets/list/list08.jpg" style="width: 100%;margin-left: 10%;" />
			</li>
			<li style="width: 40%;">
				<div style="width: 110%;margin-top: 20%;">
					<p>日本大阪环球影城</p>
					<p style="color: blue;">主题门票 | 大阪</p>
					<p style="color: red;">￥350起</p>
				</div>
			</li>
			<li style="width: 30%;">
				<p style="width: 110%;margin-top: 65%;color: gray;">月销10848</p>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br /><hr />
		<ul>
			<li style="width: 30%;">
				<img src="../../assets/list/list09.jpg" style="width: 100%;margin-left: 10%;" />
			</li>
			<li style="width: 40%;">
				<div style="width: 110%;margin-top: 20%;">
					<p>香港杜莎夫人蜡像馆</p>
					<p style="color: blue;">主题门票 | 香港</p>
					<p style="color: red;">￥175起</p>
				</div>
			</li>
			<li style="width: 30%;">
				<p style="width: 110%;margin-top: 65%;color: gray;">月销302</p>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br /><hr />
		<ul>
			<li style="width: 30%;">
				<img src="../../assets/list/list10.jpg" style="width: 100%;margin-left: 10%;" />
			</li>
			<li style="width: 40%;">
				<div style="width: 110%;margin-top: 20%;">
					<p>沙巴红树林一日游</p>
					<p style="color: blue;">一日游 | 亚庇</p>
					<p style="color: red;">￥149起</p>
				</div>
			</li>
			<li style="width: 30%;">
				<p style="width: 110%;margin-top: 65%;color: gray;">月销25</p>
			</li>
		</ul><br /><br /><br /><br /><br /><br /><br /><hr />
	</main>
</template>

<script>
	export default {
		data() {
			return {
				selected: "1",
			}
		}
	}
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
		margin-top: 1rem;
	}
	
	.mint-header {
		color: black;
		background: white;
	}
	
	.mint-search {
		height: 3rem;
	}
	
	.mint-searchbar {
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
</style>