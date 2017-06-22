<template>
	<div id="app">
		<table border="" cellspacing="" cellpadding="">
			<tr>
				<th colspan="3">{{message}}</th>
			</tr>
			<tr><td></td><td>{{sname}}</td><td></td></tr>
			<tr><td></td><td><center><img v-bind:src="'http://180.97.83.236:2009/'+headimage" width="100px"/></center>  </td><td></td></tr>
			<tr><td></td><td>{{graderName}}</td><td></td></tr>
			<tr><td></td><td>{{className}}</td><td></td></tr>
			<tr><td></td><td>{{schoolName}}</td><td></td></tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				message: 'Welcome !',
				sname:'',
				headimage:'',
				graderName:'',
				className:'',
				schoolName:''
			}
		},
		created: function() {
				var _this = this;
				console.log(_this.$store.state.token)
				this.$ajax({
						method: "get",
						baseURL: 'http://180.97.83.236:2009/API_A/',
						url: '/StudentMyHomePage_StudentInfo?',
						params: {
							token:"GF1O8rcJjsv4cPCMhIbydscJW0Wccu373VHlK2EDlok936Sgl1aX9qp3S4EX7oNbD"
						}
					})
					.then(function(data) {
						var res = JSON.parse(data.request.response);
						if(res.result == 1) {
							console.log(res.data.StudentName)
							_this.sname = res.data.StudentName;
							_this.headimage = res.data.HeadImage   ;
							_this.graderName = res.data.GradeName ;
							_this.className = res.data.ClassName ;
							_this.schoolName = res.data.SchoolName;
						} else {
							console.log("gg")
						}
					})
					.catch(function(err) {
						console.log(err);
					});
		}
	}
</script>

<style>

</style>