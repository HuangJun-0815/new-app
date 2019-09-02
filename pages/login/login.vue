<template>
	<view class="content" :style="{height:height + 'px'}">
		<view class="top_oblique">
			
		</view>
	</view>
</template>

<script>
	var _this = this;
	export default {
		data() {
			return {
				height:0,
			};
		},
		onLoad() {
			_this = this;
			uni.getSystemInfo({
				success(res) {
					_this.height = res.screenHeight
				}
			})
		}
	}
</script>

<style lang="scss">
.content{
	position: relative;
	background:linear-gradient(left top, #6eccff , #a427b0);
	.top_oblique{
		width: 100%;
		height: 350upx;
		border-radius: 50upx;
		background: #718bdf;
		transform:rotate(45deg);
		position: absolute;
		top: -350upx;
	}
}
</style>
