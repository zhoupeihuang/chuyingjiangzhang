<template>
	<div class="contentBox">
			<table border="" cellspacing="" cellpadding="" width="100%">
				<tr>
					<th colspan="3">{{msg}}</th>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%">
						<input type="tel" name="" id="" placeholder="请输入用户名" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%">
						<input type="password" name="" id="" placeholder="密码" />
					</td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%"> <input type="button" id="loginBtn" value="登录" /> </td>
					<td width="10%"></td>
				</tr>
				<tr>
					<td width="10%"></td>
					<td width="80%">
						已有帐号，请点击<router-link to="/login">登录</router-link>
					</td>
					<td width="10%"></td>
				</tr>
			</table>
		</div>

</template>

<script>
	export default{
		name:'regin',
		dat(){
			return {
				msg:'注册帐号'
			}
		}
	}
</script>

<style>
</style>