<template>
	<div id="app">
		<div class="contentBox">
			<table border="" cellspacing="" cellpadding="" width="100%">
				<tr>
					<th colspan="3">{{msg}}</th>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%">
						<input type="tel" v-model="UserName" name="" id="" placeholder="请输入用户名" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%">
						<input type="password"  v-model="Psw" name="" id="" placeholder="密码" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%"> <input type="button" @keyup.enter="loginFun" @click="loginFun" id="loginBtn" value="登录" /> </td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%">
						还未注册帐号？<router-link to="/regin">注册o(￣▽￣)d</router-link><br />
						<router-link to="/forgetPwd">忘记密码 o(︶︿︶)o 唉</router-link>
					</td>
					<td width="10%"></td>
				</tr>
			</table>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				msg: '登录',
				UserName:'15216763957',
				Psw:'123456'
			}
		},
		methods: {
			loginFun: function(event) {
				var _this = this,
				token = 0,
				userid = 0;
				this.$ajax({
						method: 'get',
						baseURL: 'http://180.97.83.236:2009/API_A/',
						url: '/Student_Login',
						params: {
							UserName: this.UserName,
							Psw :this.Psw
						}
					})
					.then(function(data) {
						var res = JSON.parse(data.request.response);
						if(res.result==1){
							//登录成功 跳转到首页
							//commit 到mutations 
							_this.$store.dispatch('addTokenInfo',{token:res.data.Token,userId:res.data.UserID});	
							_this.$router.push({path:'index'});
						}else{
							_this.$router.push({path:'404'})
						}
					})
					.catch(function(err) {
						console.log(err);
					});

			}
		}
	}
</script>

<style>
	 table{
	 	width: 100%;
	 	height: 10rem;
	 }
	 table td{
	 	font-size: 0.5rem;
	 }
	 table td input{
	 	height: 1rem;
	 	width: 90%;
	 }
	  table td input[type='button']{
	 	height: 1rem;
	 	width: 90%;
	 	background-color: #42B983;
	 	border: none;
	 	color: #fff;
	 	font-size: 0.6rem;
	 }
	   table tr:last-child td{
	   	text-align: right;
	   } 
</style>