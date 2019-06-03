<template>
	<section class='main-wrap'>
		<view :class="['fixed_circlr_wrap',{fixed_circlr_wrap_active:isShow}]">
			<view class="nav_cicle" @tap.native='linkTo(11)'>
				<view class="icon"><text class="icon-home"></text></view>
				<view class="text">首页</view>
			</view>
			<view class="nav_cicle">
				<view class="icon"><text class="icon-cart"></text></view>
				<view class="text">购物车</view>
			</view>
			<view class="nav_cicle">
				<view class="icon"><text class="icon-friendadd"></text></view>
				<view class="text">个人中心</view>
			</view>
			<view class="nav_cicle">
				<view class="icon"><text class="icon-calendar"></text></view>
				<view class="text">分类</view>
			</view>
			<view class="nav_cicle">
				<view class="icon"><text class="icon-cascades"></text></view>
				<view class="text">加盟</view>
			</view>
			<view class="btn_circle" @tap.stop="showModel">
				<text class="icon-sort" v-show="!isShow"></text>
				<text class="icon-close" v-show="isShow"></text>
			</view>
		</view>
	</section>
</template>
<script>
	export default{
		data() {
			return{
				isShow:false,
			}
		},
		methods:{
			showModel(){
				this.isShow = !this.isShow;
			},
			linkTo(){
				console.log(1)
			}
		},
		mounted(){
			
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.fixed_circlr_wrap{
		width:80upx;
		height:80upx;
		border-radius:80upx;
		position:fixed;
		right:20upx;
		bottom:200upx;
		display:flex;
		align-items:center;
		justify-content:center;
		.btn_circle{
			position:absolute;
			width:100upx; 
			height:100upx;
			border-radius:100upx;
			background:rgba(0,129,255,.6);
			color:#fff;
			text-align:center;
			line-height:100upx;
			font-size:45upx;
			transition:0.2s;
		}
		.nav_cicle{
			position:absolute;
			width:100upx; 
			height:100upx;
			border-radius:100upx;
			background:#0081ff;
			font-size:18upx;
			color:#fff;
			text-align:center;
			transition:0.25s ease-in;
			padding-top:20upx;
			box-sizing:border-box;
			opacity:0;
			.icon{
				width:100%;
				font-size:35upx;
				line-height:40upx;
			}
			.text{
				font-size:18upx;
				line-height:20upx;
			}
		}
		&.fixed_circlr_wrap_active{
			.btn_circle{
				position:absolute;
				width:80upx; 
				height:80upx;
				border-radius:80upx;
				line-height:80upx;
				font-size:45upx;
				background:rgba(0,129,255,1);
			}
			.nav_cicle{
				background:#0081ff;
				box-shadow:1px 1px 3px rgba(0,0,0,.1);
				opacity:1;
				&:nth-child(1){
					transform: translate(0, -160upx);
				}
				&:nth-child(2){
					transform: translate(-113upx, -113upx);
				}
				&:nth-child(3){
					transform: translate(-160upx, 0);
				}
				&:nth-child(4){
					transform: translate(-113upx, 113upx);
				}
				&:nth-child(5){
					transform: translate(0, 160upx) scale(1);
				}
			}
		}
		
	}
</style>
