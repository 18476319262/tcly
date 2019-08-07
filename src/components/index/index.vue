<template>
	<main>
		<router-view></router-view>
		<header>
			<img src="../../assets/index/top1.png" id="img1" />
			<nav id="s1">
				<mt-search placeholder="目的地/酒店/景点/关键字"></mt-search>
			</nav>
			<router-link to="/login">
				<img src="../../assets/index/top2.png" id="img2" />
			</router-link>
		</header>
		<router-link to='/carousel'>
			<section id="swipe">
				<mt-swipe :auto="4000" :showIndicators="true">
					<mt-swipe-item><img src="../../assets/index/carousel01.png" /></mt-swipe-item>
					<mt-swipe-item><img src="../../assets/index/carousel02.png" /></mt-swipe-item>
					<mt-swipe-item><img src="../../assets/index/carousel03.png" /></mt-swipe-item>
				</mt-swipe>
			</section>
		</router-link>
		<ul>
			<li style="width: 25%;">
				<router-link to="/train">
					<img src="../../assets/index/blogo01.png" class="img1" />
				</router-link>
				<p>火车票</p>
			</li>
			<li style="width: 25%;">
				<router-link to="/plane">
					<img src="../../assets/index/blogo02.png" class="img1" />
				</router-link>
				<p>机票</p>
			</li>
			<li style="width: 25%;">
				<router-link to="/hotel">
					<img src="../../assets/index/blogo03.png" class="img1" />
				</router-link>
				<p>酒店住宿</p>
			</li>
			<li style="width: 25%;">
				<router-link to="/scenic">
					<img src="../../assets/index/blogo04.png" class="img1" />
				</router-link>
				<p>景点门票</p>
			</li>
		</ul><br /><br /><br /><br /><br />
		<hr />
		<ul>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo01.png" class="img2" />
				</router-link>
				<p>汽车票</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo02.png" class="img2" />
				</router-link>
				<p>周边自由</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo03.png" class="img2" />
				</router-link>
				<p>周边跟团</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo04.png" class="img2" />
				</router-link>
				<p>国内游</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo05.png" class="img2" />
				</router-link>
				<p>邮轮</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo06.png" class="img2" />
				</router-link>
				<p>出境游</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo07.png" class="img2" />
				</router-link>
				<p>海外玩乐</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo08.png" class="img2" />
				</router-link>
				<p>签证</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/play'>
					<img src="../../assets/index/slogo09.png" class="img2" />
				</router-link>
				<p>全球WiFi</p>
			</li>
			<li style="width: 20%;">
				<router-link to='/service'>
					<img src="../../assets/index/slogo10.png" class="img2" />
				</router-link>
				<p>全部服务</p>
			</li>
		</ul><br />
		<hr />
		<ul>
			<li style="width: 49%;border: 1px solid gray;">
				<div style="float: left;margin-top: 10%;">
					<p>一元玩景点</p>
					<p class="txt1">PLUS会员</p>
				</div>
				<img src="../../assets/index/ilogo1.png" style="width: 40%;" />
			</li>
			<li style="width: 49%;border: 1px solid gray;">
				<div style="float: left;margin-top: 10%;">
					<p>国内游特卖</p>
					<p class="txt1">优质低价</p>
				</div>
				<img src="../../assets/index/ilogo2.png" style="width: 40%;" />
			</li>
		</ul><br /><br /><br /><br /><br />
		<img src="../../assets/index/appimg.jpg" style="width: 100%;" />
		<h4 style="color: red;text-align: center;">热门推荐</h4>
		<ul>
			<li class="txt3">曼谷</li>
			<li class="txt3">巴厘岛</li>
			<li class="txt3">大阪</li>
			<li class="txt3">冲绳</li>
			<li class="txt3">. . .</li>
		</ul><br /><br /><br /><br />

		<ul>
			<li id="img11">
				<p class="txt2">今年最火的10大古镇</p>
			</li>
			<li id="img22">
				<p class="txt2">适合秋冬出游的海岛</p>
			</li>
			<li id="img33">
				<p class="txt2">中国8大经典自驾线路</p>
			</li>
			<li id="img44">
				<p class="txt2">10月旅行目的地推荐</p>
			</li>
		</ul>
		<br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br />
		<p style="color: blue;text-align: center;">查看更多玩法</p><br />
		<hr />
		<ul>
			<li style="width: 100%;"><img src="../../assets/index/sslogo01.png" />
				<div style="float: right;width: 80%;">
					<p>价格公正</p>
					<p>价格公开透明，请安心购买</p>
				</div>
			</li>
			<li style="width: 100%;"><img src="../../assets/index/sslogo02.png" />
				<div style="float: right;width: 80%;">
					<p>产品丰富</p>
					<p>出行产品，全品类覆盖，一站式服务</p>
				</div>
			</li>
			<li style="width: 100%;"><img src="../../assets/index/sslogo03.png" />
				<div style="float: right;width: 80%;">
					<p>品质保证</p>
					<p>精挑细选，产品优选，放心出行</p>
				</div>
			</li>
			<li style="width: 100%;"><img src="../../assets/index/sslogo04.png" />
				<div style="float: right;width: 80%;">
					<p>专业顾问</p>
					<p>24小时专业客服，一对一服务</p>
				</div>
			</li>
		</ul>
		<hr />
		<ul>
			<li style="width: 33%;"><img src="../../assets/index/sslogo05.png" style="width: 25%;" />
				<p>客服电话</p>
			</li>
			<li style="width: 33%;"><img src="../../assets/index/sslogo06.png" style="width: 25%;" />
				<p>下载客户端</p>
			</li>
			<li style="width: 33%;"><img src="../../assets/index/sslogo07.png" style="width: 25%;" />
				<p>我的同程</p>
			</li>
		</ul>
		<ul style="font-size: 13px;color: grey;">
			<li style="width: 33%;">
				<p style="width: 145%;">电脑版</p>
			</li>
			<li style="width: 33%;">
				<p>简体中文</p>
			</li>
			<li style="width: 33%;">
				<p style="width: 55%;">意见反馈</p>
			</li>
		</ul>
		<br /><br /><br /><br /><br /><br />
		<p style="text-align: center;font-size: 13px;color: grey;">@2019同程旅游</p>
		<br />
	</main>
</template>

<style>
	/*这两个css在点进去其他页面时会生效，但在其他页面刷新后会失效*/
	
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
	
	#s1 .mint-searchbar {
		/*固定定位居中，学到了*/
		width: 80%;
		margin: 0 auto;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
	}
	
	.mint-search {
		height: 3.5rem;
	}
	
	#swipe {
		width: 100%;
		height: 6rem;
	}
	
	#swipe img {
		width: 100%;
		/*padding-bottom: 30%;*/
	}
	
	#img1 {
		width: 14%;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	#img2 {
		width: 12%;
		position: fixed;
		top: 0;
		right: 0;
	}
	
	.img1 {
		width: 55%;
	}
	
	.img2 {
		width: 40%;
	}
	
	#img11 {
		width: 50%;
		height: 8em;
		background-image: url(../../assets/index/boximg1.jpg);
		background-repeat: no-repeat;
	}
	
	#img22 {
		width: 50%;
		height: 8em;
		background-image: url(../../assets/index/boximg2.jpg);
		background-repeat: no-repeat;
	}
	
	#img33 {
		width: 50%;
		height: 8em;
		background-image: url(../../assets/index/boximg3.jpg);
		background-repeat: no-repeat;
	}
	
	#img44 {
		width: 50%;
		height: 8em;
		background-image: url(../../assets/index/boximg4.jpg);
		background-repeat: no-repeat;
	}
	
	.txt1 {
		border-radius: 10px;
		border: 1px solid yellow;
		color: yellow;
	}
	
	.txt2 {
		color: white;
		margin-top: 6.7em;
	}
	
	.txt3 {
		background: lightgray;
		border: 1px solid white;
		border-radius: 10px;
		width: 24%;
	}
</style>