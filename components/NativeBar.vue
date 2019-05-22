<template>
	<section>
		<view class="navbar" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" >
				<view class="backHome" v-show="isBackHome">
					<view class="item" @tap='back'>
						<text class="icon-back"></text>
					</view>
					<view class="item" @tap='goHome'>
						<text class="icon-homefill"></text>
					</view>
				</view>
				<view class="action" @tap="back" v-show='isback'>
						<text class="icon-back"></text>
						<slot name="backText">个人中心个人中心个人中心个人中心个人中心</slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
			</view>
		</view>
	</section>
</template>
<script>
	 export default{
		 props:{
			isback:{
				type:Boolean,
				default:false,
			},
			isBackHome:{
				type:Boolean,
				default:false,
			},
			isconetnt:{
				type:Boolean,
				default:false,
			},
			isLeftContent:{
			  type:Boolean,
			  default:false,
			},
			bgColor:{
				type:String,
				default:'#39b54a',
			},
			bgSrc:{
				type:String,
				default:'',
			}
		 },
		 data(){
			 return{
				 CustomBar:this.CustomBar,
				 StatusBar:this.StatusBar,
			 }
		 },
		 
		 computed:{
			style(){
				let CustomBar = this.CustomBar;
				let StatusBar = this.StatusBar;
				let bgColor = this.bgColor;
				let bgSrc = this.bgSrc;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`
				if(bgSrc != ""){
					style = `${style}background-image:url(${bgSrc});`;
				}else{
					style = `${style}background-color:${bgColor};`;
				}
				return  style;
			} 
		 },
		 methods:{ 
			 back(){
				 uni.navigateBack({
				 	delta: 1
				 });
			 },
			 goHome(){
				 uni.navigateTo({
				 	url:'/pages/outer/index'
				 })
			 }
		 },
		 mounted() {
	
		 }
	 }
</script>

<style scoped="scoped" lang="scss">
	.navbar{
		position:relative;
		width:100%;
	}
	.cu-bar{
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
		box-sizing:border-box;
		background:bisque;
		background-size:cover;
		&.fixed{
			position: fixed;
			width: 100%;
			top: 0;
			z-index: 1024;
			box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
		}
		.backHome{
			float:left;
			overflow:hidden;
			.item{
				width:80upx;
				text-align:center;
				float:left;
				color:#fff;
				font-size:35upx;
				position:relative;
				&:not(:last-child)::after{
					content:" ";
					position:absolute;
					width:1px;
					height:20upx;
					background:#fff;
					top:50%;
					right:0;
					transform:translateY(-50%);
				}
			}
		}
		.action{
			font-size:32upx;
			color:#fff;
			margin-left:20upx;
			width:180upx;
			overflow:hidden;
		    text-overflow: ellipsis;
			white-space: nowrap;
			
		}
		.content{
			margin:0 auto;
			text-align:center;
			padding-right:180upx;
			box-sizing:border-box;
			color:#fff;
			font-size:32upx;
		}
	}
</style>
