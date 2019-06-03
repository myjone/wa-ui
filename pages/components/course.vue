<template>
	<section class='main-wrap'>
		<view class="wrap">
			<view class="circle"></view>
			<view class="circle"></view>
			<view class="circle"></view>
			<view class="circle"></view>
			<view class="circle"></view>
			<view class="circle"></view>
		</view>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.circle {
		width: 120upx;
		height: 120upx;
		position: absolute;
		border-radius: 120upx;

		transform: translate(0, 0);
		opacity: 0.65;

		&:nth-child(1) {
			animation: circleFirst 4s ease alternate infinite; //动画轮流反向播放
		}

		&:nth-child(2) {
			animation: circleSecond 4s ease alternate infinite;
		}

		&:nth-child(3) {
			animation: circleThird 4s ease alternate infinite;
		}

		&:nth-child(4) {
			animation: circleFourth 4s ease alternate infinite;

		}

		&:nth-child(5) {

			animation: circleFifveth 4s ease alternate infinite;
		}

		&:nth-child(6) {
			animation: circleSix 4s ease alternate infinite;
		}

		&:nth-child(odd) {
			background: #9000ff;
		}

		&:nth-child(even) {
			background: #5e00ff;
		}
	}

	.main-wrap {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		.wrap {
			width: 120upx;
			height: 120upx;
			animation: pulse 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite; 
		}
	}
	
	
	
	
	
	
	

	@keyframes circleFirst {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(-52upx, -30upx);
		}
	}

	@keyframes circleSecond {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(0, -60upx);
		}
	}

	@keyframes circleThird {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(52upx, -30upx);
		}
	}

	@keyframes circleFourth {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(52upx, 30upx);
		}
	}

	@keyframes circleFifveth {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(0upx, 60upx);
		}
	}

	@keyframes circleSix {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(-52upx, 30upx);
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(.65) rotate(180deg);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
