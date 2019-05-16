<template>
	<section>
		<view class="mask" v-show="overlay&&isShow" @click.stop="close">

		</view>
		<div :class="['wa-contain',`wa-contain-${position}`]" v-if='isShow'>
			<slot>
				居中弹窗
			</slot>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			value:{
				type: Boolean,
				default: false,
			},
			position: { //弹窗出现位置 top left right bottom
				type: String,
				default: 'center',
			},
			overlay:{ //是否显示蒙版
				type: Boolean,
				default:true,
			},
			overlayCilck:{
				type:Boolean,
				default:true,
			}
		},
		data() {
			return {
				isShow: this.value,
			}
		},
		methods:{
			close() {
				if(overlayCilck){
					this.isShow = false;
					this.value = false;
					this.$emit('input', false);
				}else{
					return;
				}
				
			}
		},
		watch:{
			value(newValue){
				this.isShow = newValue;
			},	
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .7);
		top: 0;
		left: 0;
		z-index: 2000;
		transition:0.2s;
	}
	.wa-contain {
		position: fixed;
		animation-timing-function: ease-out;
		animation-fill-mode: both;
		z-index: 2002;
		&.wa-contain-center{
			top: 40%;
			left: 50%;
			min-width: 500upx;
			height: 300upx;
			background: #fff;
			border-radius: 5upx;
			transform: translate3d(-50%, -50%, 0);
		}
		&.wa-contain-right{
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:#fff;
			animation-name: slide-right;
			animation-duration: .3s;
			&.slideDown{
				animation-name: slideDown;
				animation-duration: .3s;
			}
		}
		&.wa-contain-left{
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:#fff;
			animation-name: slide-left;
			animation-duration: .3s;
		}
		&.wa-contain-bottom{
			bottom:0;
			left:0;
			width:100%;
			min-height:200upx;
			background:#fff;
			animation-name:slide-bottom;
			animation-duration: .35s;
		}
		&.wa-contain-top{
			top:0;
			left:0;
			width:100%;
			height:auto;
			background:#fff;
			animation-name:slide-top;
			animation-duration: .35s;
		}
	}
	@keyframes slide-right{
		0% {
			opacity: 0;
			transform: translateX(100%)
		}

		100% {
			opacity: 1;
			transform: translateX(0)
		}
	}
	@keyframes slide-left {
		0% {
			opacity: 0;
			transform: translateX(-100%)
		}
	
		100% {
			opacity: 1;
			transform: translateX(0)
		}
	}
	@keyframes slide-bottom{
		0% {
			opacity: 0;
			bottom:-100%;
		}
		100% {
			opacity: 1;
			bottom:0;
		}
	}
	@keyframes slide-top{
		0% {
			opacity: 0;
			top:-100%;
		}
		100% {
			opacity: 1;
			top:0;
		}
	}
	
</style>
