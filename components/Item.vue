<template>
	<view class="wa-item" @click="nativeUrl">
		<view class="title">
			<slot name="name">这个是列表的标题</slot>
			<view class="right">
				<text class="icon-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			linkObj:{   //路由跳转 linkUrl：跳转的url isBar：是否是tabbar的路由 true是
				type:Object,
				default:function(){
					return{
						linkUrl:'',
						isBar:false,
					}
				}
			},
			options:{  //路由跳转所携带的参数默认是空对象
				type:Object,
				default:function(){
					return {
						
					}
				}
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			nativeUrl(){
				let url = this.linkObj.linkUrl;
				let isBar = this.linkObj.isBar;
				let jumpUrl = url;
				let arr = [];
				if(Object.keys(this.options).length>0){   // Object.keys(obj) 判断数组是否为空数组
					  for(let key in this.options){
						 arr.push(`${key}=${this.options[key]}`)
					  }
					}
					jumpUrl = `${jumpUrl}?${arr.join('&')}`
					if(url){
						if(isBar){
							uni.switchTab({
								url:jumpUrl
							})
						}else{
							uni.navigateTo({
								url:jumpUrl
							})
						}
					}
				}
				
				
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wa-item{
		position:relative;
		width:100%;
		height:100upx;
		font-size:28upx;
		color:#666;
		text-align:left;
		box-sizing:border-box;
		position:relative;
		line-height:100upx;
		.right{
			position:absolute;
			right:10upx;
			top:50%;
			transform:translateY(-50%);
			color:#8799a3;
		}
		&::after{
			content:'';
			position:absolute;
			bottom:0;
			width:100%;
			height:1px;
			background:#e2e2e2;
			transform: scaleY(0.5);
		}
	}
</style>
