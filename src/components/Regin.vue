<template>
	<div id="regin">
		<div class="contentBox">
			<table class="regTab" border="" cellspacing="" cellpadding="" width="100%">
				<tr>
					<th colspan="3">{{msg}}</th>
				</tr>
				<tr>
					<td width="20%">手机号</td>
					<td width="70%">
						<input type="tel" maxlength="11" value="13817242305" v-model="mobileNum" name="" id="" placeholder="请输入手机号" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%">验证码</td>
					<td width="70%">
						<input type="tel" v-model="uname" name="" id="" placeholder="请输入验证码" />
					</td>
					<td width="10%"><input type="button" name="" @click="getCodeNum" value="获取验证码" /></td>
				</tr>
				<tr>
					<td width="20%">密码</td>
					<td width="70%">
						<input type="password" v-model="pwd" name="" id="" placeholder="密码" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%">确认密码</td>
					<td width="70%">
						<input type="password" v-model="rpwd" name="" id="" placeholder="确认密码" />
					</td>
					<td width="10%"></td>
				</tr>
					<tr>
					<td width="20%">姓名</td>
					<td width="70%">
						<input type="tel" v-model="uname" name="" id="" placeholder="请输入姓名" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%">性别</td>
					<td width="70%">
						<input type="checkbox" name="" id="" value="" />男||<input type="checkbox" name="" id="" value="" />女
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%">学校</td>
					<td width="70%">
						<select v-model="selected" @change="updateValS">
							<option v-for="item in allSchool" v-bind:value="item.Value" v-bind:selected="item.Selected">
								{{item.Text}}
							</option>
						</select>
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%">年级</td>
					<td width="70%">
						<select v-model="selectedS" @change="updateValG" >
							<option v-for="items in allClass" v-bind:value="items.Value"  >
								{{items.Text}}
							</option>
						</select>
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%">班级</td>
					<td width="70%">
						<select v-model="selectedG" >
							<option v-for="item in allGrade" v-bind:value="item.Value" v-bind:selected="item.Selected">
								{{item.Text}}
							</option>
						</select>
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%"></td>
					<td width="70%"> <input type="button" id="loginBtn" value="登录" @click="ReginFun" /> </td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%"></td>
					<td width="70%" style="text-align: center;">
					<center><img src="../assets/logo.png" width="40px" height="40px"/></center>
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="20%"></td>
					<td width="70%">
						已有帐号，请点击
						<router-link to="/login">登录 {{selectedS}}</router-link>
					</td>
					<td width="10%"></td>
				</tr>
			</table>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'regin',
		data() {
			return {
				msg: '注册帐号',
				mobileNum:'',
				uname: '',
				pwd: '',
				rpwd: '',
				selected: 1,
				selectedS: 0,
				selectedG: 0,
				opts: null,
				allSchool: [{
					"Selected": 'true',
					"Text": "请先选择",
					"Value": "1"
				}],
				allClass: [{
					"Selected": 'true',
					"Text": "请先选择",
					"Value": "0"
				}],
				allGrade: [{
					"Selected": 'true',
					"Text": "请先选择",
					"Value": "0"
				}]
			}
		},
		created: function() {
			//获取学校
			var _this = this;
			var selVal = 0;
			this.$ajax({
					method: 'get',
					baseURL: 'http://180.97.83.236:2009/API_A/',
					url: '/Student_Register_GetShool'
				})
				.then(function(data) {
					var res = JSON.parse(data.request.response);
					if(res.result == 1) {
						_this.allSchool = _this.allSchool.concat(res.data);
					} else {
						console.log("gg")
					}
				})
				.catch(function(err) {
					console.log(err);
				});

		},
		methods: {
			//获取验证码
			getCodeNum:function(event){
				var _this = this;
				//BE_SMS_PhoneVerification_CodeSend_Register?PhoneNum=15216763957
				this.$ajax({
						method: 'get',
						baseURL: 'http://180.97.83.236:2009/API_A/',
						url: '/BE_SMS_PhoneVerification_CodeSend_Register?',
						params: {
							PhoneNum: _this.mobileNum
						}
					})
					.then(function(data) {
						var res = JSON.parse(data.request.response);
						console.log(res)
						if(res.result == 1) {
							
						} else {
							console.log("gg")
						}
					})
					.catch(function(err) {
						console.log("error----------------"+err);
					});
			},
			ReginFun: function(event) {
				//发送一个`POST`请求
				//				this.$ajax({
				//						method: 'get',
				//						baseURL:'http://180.97.83.236:2009/API_A/',
				//						url: '/Student_Register',
				//						params: {
				//							Token: 'GF1O8OjK6uriZJ9QCd8wUJkWM5F9ItvWeIVv3kG8Cllz05WLpFt07RxONhf0giQlB'
				//						}
				//					})
				//					.then(function(data) {
				//						console.log(data.request.response);
				//					})
				//					.catch(function(err) {
				//						console.log(err);
				//					});
			},
			//选择学校 填充年级
			updateValS: function(event) {
				var _this = this;
				//获取班级
				this.$ajax({
						method: 'get',
						baseURL: 'http://180.97.83.236:2009/API_A/',
						url: '/Student_Register_GetGrade',
						params: {
							SchoolID: _this.selected
						}
					})
					.then(function(data) {
						var res = JSON.parse(data.request.response);
						console.log("-----------------")
						if(res.result == 1) {
							_this.allClass = _this.allClass.concat(res.data);
						} else {
							console.log("gg")
						}
					})
					.catch(function(err) {
						console.log("error----------------"+err);
					});
			},
			//选择年级 填充班级
			updateValG: function(event) {
				var _this = this;
				//获取班级
				this.$ajax({
						method: 'get',
						baseURL: 'http://180.97.83.236:2009/API_A/',
						url: '/Student_Register_GetClass',
						params: {
							GradeID: _this.selectedS
						}
					})
					.then(function(data) {
						var res = JSON.parse(data.request.response);
						if(res.result == 1) {
							//数组合并
							_this.allGrade = _this.allGrade.concat(res.data.data);
						} else {
							console.log("gg")
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
.regTab td{
	font-size: 0.3rem;
}
</style>