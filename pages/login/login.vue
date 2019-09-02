<template>
	<view class="content" :style="{height:height + 'px'}">
		<view class="top_oblique">

		</view>
		<view class="left_oblique">

		</view>
		<view class="foot_oblique">

		</view>
		<view class="login_btn">

		</view>
	</view>
</template>

<script>
	var _this = this;
	export default {
		data() {
			return {
				height: 0,
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
	.content {
		position: relative;
		background: linear-gradient(left top, #6eccff, #a427b0);

		.top_oblique {
			width: 571.52upx;
			height: 744.14upx;
			border-radius: 78upx;
			background: #718bdf;
			transform: rotate(135deg);
			position: absolute;
			top: -630upx;
			left: 170upx;
		}

		.left_oblique {
			width: 864upx;
			height: 1125upx;
			background: #FFFFFF;
			border-radius: 138upx;
			transform: rotate(45deg);
			position: absolute;
			left: -400upx;
		}

		.foot_oblique {
			width: 929.31upx;
			height: 478.06upx;
			border-radius: 138upx;
			background: linear-gradient(left top, #3023AE, #D6FFFF);
			position: absolute;
			bottom: 0upx;
			left: -100upx;
			z-index: 1;
			opacity: 0.2;
			transform: rotate(-225deg);
			background-image: linear-gradient(46deg, #3023AE 0%, #D6FFFF 100%);
		}

		.login_btn {
			width: 650upx;
			height: 120upx;
			border-radius: 60upx;
			background: #a427b0;
			position: absolute;
			z-index: 1;
			left: 50upx;
			top: 668upx;
		}

	}
</style>
