<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">我的</block>
		</cu-custom>
		<button type="primary" @tap="login()">点击</button>
	</view>
	

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
			login:function(){
				// this.$api.get('/mock').then(res=>{
				// 	console.log(res.data.data)
				// })
				uni.navigateTo({
					url:'login/login'
				})
			}
		}
	}
</script>

<style>
</style>
