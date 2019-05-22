<template>
	<view class="wa-card" :style="[{backgroundColor:BgColor}]">
		<view class="wa-card-title" v-show="showTitle">
			<slot name="title"></slot>
		</view>
		<view class="wa-card-body"><slot></slot></view>
	</view>
</template>

<script>
	export default{
		props:{
			bgColor:{
				type:String,
				default:"#fff",
			}
		},
		data(){
			return{
				BgColor:this.bgColor,
				showTitle:false,
			}
		},
		mounted() {
			this.showTitle = this.$slots.title;
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wa-card{
		width:100%;
		padding:20upx;
		background:#FFFFFF;
		border-radius:8upx;
		box-sizing:border-box;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.015);
		.wa-card-title{
			position:relative;
			width:100%;
			font-size:30upx;
			line-height:60upx;
			color:#333;
			text-align:left;
			font-weight:600;
			padding-left:20upx;
			&::after{
				content:" ";
				position:absolute;
				left:0;
				top:50%;
				transform:translateY(-50%);
				width:8upx;
				height:30upx;
				border-radius:4upx;
				background:var(--gradualBlue);
			}
		}
		.wa-card-body{
			width:100%;
		}
	}
</style>
