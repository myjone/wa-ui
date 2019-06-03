<template>
	<section>
		<view :class="['mask',`mask-${isShow}`,`mask-overlay-${overlay}`]"  @click.stop="close">

		</view>
		<div :class="['wa-contain',`wa-contain-${position}`,`wa-contain-${position}-${isShow}`]">
			<slot>
				
			</slot>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false,
			},
			position: { //弹窗出现位置 top left right bottom
				type: String,
				default: 'center',
			},
			overlay: { //是否显示蒙版  true 不展示 false 展示
				type: Boolean,
				default:false,
			},
			overlayCilck: {
				type: Boolean,
				default: true,
			}
		},
		data() {
			return {
				isShow: this.value,
			}
		},
		methods: {
			close(){
				if (this.overlayCilck) {
					this.isShow = false;
					this.value = false;
					this.$emit('input', false);
				} else {
					return;
				}

			}
		},
		watch: {
			value(newValue){
				this.isShow = newValue;
			},
		},
		mounted() {
			if(this.position == " "){
				this.position = 'center'
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.mask {
		position: fixed;
		background: rgba(0, 0, 0, .7);
		top: 0;
		left: 0;
		z-index: 2000;
		&.mask-true{
			width:100%;
			height:100%;
			animation-name:fade-in;
			animation-duration: .2s;
			animation-timing-function: ease-in-out;
		}
		&.mask-false {
			width:0;
			height:0;
			animation-name: fade-out;
			animation-duration: .2s;
			animation-delay: 0.1s
		}
		&.mask-overlay-true{
			display:none;
		}
	}
	.wa-contain {
		position: fixed;
		animation-timing-function: ease-out;
		animation-fill-mode: both;
		z-index: 2002;
		&.wa-contain-center{
			top: 40%;
			left: 50%;
			background: #fff;
			border-radius: 5upx;
			transform: translate3d(-50%, -50%, 0);
			display: none;
		}
		&.wa-contain-center-true {
			min-width: 500upx;
			height: 300upx;
			display: block;
			animation-name: fade-in;
			animation-duration: .2s;
			animation-timing-function: ease-in-out;
			&.wa-contain-center-false {
				min-width:0;
				height:0;
				display: none;
				animation-name: fade-out;
				animation-duration: .01s;
			}
		}
		&.wa-contain-right{
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #fff;
			animation-name: slide-right;
			animation-duration: .35s;
			&.wa-contain-right-false {
				animation-name: slide-right-reduction;
				animation-timing-function: linear;
				animation-duration: .3s;
			}
		}
		&.wa-contain-left {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #fff;
			animation-name: slide-left;
			animation-duration: .3s;
			&.wa-contain-left-false {
				animation-name: slide-left-reduction;
				animation-timing-function: linear;
				animation-duration: .3s;
			}
		}
		&.wa-contain-bottom {
			bottom: 0;
			left: 0;
			width: 100%;
			min-height: 200upx;
			background: #fff;
			animation-name: slide-bottom;
			animation-duration: .35s;
			&.wa-contain-bottom-false {
				animation-name: slide-bottom-reduction;
				animation-timing-function: linear;
				animation-duration: .3s;
			}
		}
		&.wa-contain-top{
			top: 0;
			left: 0;
			width: 100%;
			background: #fff;
			animation-name: slide-top;
			animation-duration: .35s;
			&.wa-contain-top-false {
				animation-name: slide-top-reduction;
				animation-timing-function: linear;
				animation-duration: .3s;
			}
		}
	}

	@keyframes slide-right {
		0% {
			transform: translateX(100%)
		}

		100% {
			transform: translateX(0)
		}
	}

	@keyframes slide-right-reduction {
		0% {
			transform: translateX(0)
		}

		100% {
			transform: translateX(100%)
		}
	}

	@keyframes slide-left {
		0% {
			transform: translateX(-100%)
		}

		100% {
			transform: translateX(0)
		}
	}

	@keyframes slide-left-reduction {
		0% {
			transform: translateX(0)
		}

		100% {
			transform: translateX(-100%)
		}
	}

	@keyframes slide-bottom {
		0% {
			bottom: -100%;
		}

		100% {
			bottom: 0;
		}
	}

	@keyframes slide-bottom-reduction {
		0% {
			bottom: 0;
		}

		100% {
			bottom: -100%;
		}
	}

	@keyframes slide-top {
		0% {
			top: -100%;
		}

		100% {
			top: 0;
		}
	}

	@keyframes slide-top-reduction {
		0% {
			opacity: 1;
			top: 0;
		}

		100% {
			opacity: 0;
			top: -100%;
		}
	}

	@keyframes fade-in {
		0% {
			opacity:0;
		}
		100% {
			opacity: 1;
			z-index: 2000;
		}
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			z-index: 0;
		}
	}
</style>
