<template>
	<main>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">
				<p style="font-size: 20px;">验证码登录</p>
			</mt-tab-item>
			<mt-tab-item id="2">
				<p style="font-size: 20px;">账号密码登录</p>
			</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul>
					<li style="width: 20%;">
						<span style="font-size: 1.5rem;">+86</span>
					</li>
					<li style="width: 80%;">
						<input type="" name="" id="" value="" placeholder="请输入手机号码" style="width: 100%;height: 2rem;font-size: 1rem;" />
					</li>
				</ul><br /><br /><br />
				<ul>
					<li style="width: 20%;">
						<span style="font-size: 1.3rem;">验证码</span>
					</li>
					<li style="width: 80%;">
						<input type="" name="" id="" value="" placeholder="请输入手机验证码" style="width: 100%;height: 2rem;font-size: 1rem;" />
					</li>
				</ul><br /><br /><br />
				<div style="text-align: center;">
					<button>登录</button>
				</div>
				<ul>
					<li style="width: 75%;"></li>
					<li style="width: 25%;">
						<p style="font-size: 13px;color: grey;">注册</p>
					</li>
				</ul><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br />
				<div style="text-align: center;">
					<p style="font-size: 14px;">登录即代表您已阅读并同意《服务协议及隐私政策》</p>
				</div>
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
			</mt-tab-container-item>

			<mt-tab-container-item id="2">
				<ul>
					<li style="width: 20%;">
						<span style="font-size: 1.5rem;">+86</span>
					</li>
					<li style="width: 80%;">
						<input type="" name="" id="" value="" placeholder="请输入手机号码或邮箱" style="width: 100%;height: 2rem;font-size: 1rem;" />
					</li>
				</ul><br /><br /><br />
				<ul>
					<li style="width: 20%;">
						<span style="font-size: 1.3rem;">密码</span>
					</li>
					<li style="width: 80%;">
						<input type="" name="" id="" value="" placeholder="请输入密码" style="width: 100%;height: 2rem;font-size: 1rem;" />
					</li>
				</ul><br /><br /><br />
				<div style="text-align: center;">
					<button>登录</button>
				</div>
				<ul>
					<li style="width: 75%;">
						<p style="font-size: 13px;color: grey;width: 45%;">忘记密码?</p>
					</li>
					<li style="width: 25%;">
						<p style="font-size: 13px;color: grey;">注册</p>
					</li>
				</ul><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br />
				<div style="text-align: center;">
					<p style="font-size: 14px;">登录即代表您已阅读并同意《服务协议及隐私政策》</p>
				</div>
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
	
	button {
		outline: none;
		border: none;
		width: 85%;
		height: 2.8rem;
		background: #ff5346;
		color: white;
		font-size: 1.3rem;
		
	}
</style>