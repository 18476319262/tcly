<template>
	<main>
		<mt-header title="苏州">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">
				<p style="font-size: 20px;">热门推荐</p>
			</mt-tab-item>
			<mt-tab-item id="2">
				<p style="font-size: 20px;">跟团游</p>
			</mt-tab-item>
			<mt-tab-item id="3">
				<p style="font-size: 20px;">自由行</p>
			</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list01.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">玻洛洛卡光影水乐园</p>
							<p style="color: orange;width: 50%;">￥39起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">45条点评</p>
							<p style="width: 70%;">97%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list02.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">荷塘月色湿地公园</p>
							<p style="color: orange;width: 50%;">￥13起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">389条点评</p>
							<p style="width: 70%;">98%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list03.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">苏州湾梦幻水世界</p>
							<p style="color: orange;width: 50%;">￥120起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">66条点评</p>
							<p style="width: 70%;">92%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list04.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">苏州乐园森林水世界</p>
							<p style="color: orange;width: 50%;">￥128起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">166条点评</p>
							<p style="width: 70%;">97%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list05.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">昆山水之梦乐园</p>
							<p style="color: orange;width: 50%;">￥88起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">86条点评</p>
							<p style="width: 70%;">91%满意</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
			</mt-tab-container-item>

			<mt-tab-container-item id="2">
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list03.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">苏州湾梦幻水世界</p>
							<p style="color: orange;width: 50%;">￥120起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">66条点评</p>
							<p style="width: 70%;">92%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list01.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">玻洛洛卡光影水乐园</p>
							<p style="color: orange;width: 50%;">￥39起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">45条点评</p>
							<p style="width: 70%;">97%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list02.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">荷塘月色湿地公园</p>
							<p style="color: orange;width: 50%;">￥13起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">389条点评</p>
							<p style="width: 70%;">98%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list05.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">昆山水之梦乐园</p>
							<p style="color: orange;width: 50%;">￥88起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">86条点评</p>
							<p style="width: 70%;">91%满意</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list04.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">苏州乐园森林水世界</p>
							<p style="color: orange;width: 50%;">￥128起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">166条点评</p>
							<p style="width: 70%;">97%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
			</mt-tab-container-item>

			<mt-tab-container-item id="3">
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list04.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">苏州乐园森林水世界</p>
							<p style="color: orange;width: 50%;">￥128起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">166条点评</p>
							<p style="width: 70%;">97%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list02.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">荷塘月色湿地公园</p>
							<p style="color: orange;width: 50%;">￥13起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">389条点评</p>
							<p style="width: 70%;">98%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list03.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">苏州湾梦幻水世界</p>
							<p style="color: orange;width: 50%;">￥120起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">66条点评</p>
							<p style="width: 70%;">92%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list01.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">玻洛洛卡光影水乐园</p>
							<p style="color: orange;width: 50%;">￥39起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">45条点评</p>
							<p style="width: 70%;">97%满意度</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
				<ul>
					<li style="width: 30%;">
						<img src="../../assets/list/list05.jpg" style="width: 100%;" />
					</li>
					<li style="width: 70%;">
						<div style="float: left;">
							<p style="width: 120%;">昆山水之梦乐园</p>
							<p style="color: orange;width: 50%;">￥88起</p>
							<p style="border: 1px solid red;color: red; width: 45%;">今日订</p>
							<p style="width: 60%;">86条点评</p>
							<p style="width: 70%;">91%满意</p>
						</div>
					</li>
				</ul><br /><br /><br /><br /><br /><br /><br />
				<hr />
			</mt-tab-container-item>
		</mt-tab-container>
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
		/*顶部留白，非常通用*/
		margin-top: 1rem;
	}
	
	.mint-header {
		color: black;
		background: white;
	}
</style>