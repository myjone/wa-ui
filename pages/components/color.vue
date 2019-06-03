<template>
	<section>
		<NativeBar :isback='true' bgSrc='http://prwe885o2.bkt.clouddn.com/wechatNative.jpg'>
			<text slot='backText'>色彩</text>
		</NativeBar>
		<WaCard >
			<view slot="title">靓丽色彩</view>
			<WaCard bgColor="rgb(245,245,245)" style='padding-bottom:0;'>
				<view class="contain">
					<view class="item" v-for="(item,index) in brightColor" :key= 'item.value' :style="[{backgroundColor:item.value}]">
							<view class="iconText" @tap="copyVaule(item.name)">{{item.name}}</view>
							<view class="iconText" @tap="copyVaule(item.value)">{{item.value}}</view>
					</view>
				</view>
			</WaCard>
		</WaCard>
		<WaCard>
			<view slot="title">浅色色彩</view>
			<WaCard  style='padding-bottom:0;'>
				<view class="contain">
					<view class="item" v-for="(item,index) in lightColor" :key= 'item.value' :style="[{backgroundColor:item.value}]">
							<view  class="iconText" :style="[{color:item.TextColor}]" @tap="copyVaule(item.name)">{{item.name}}</view>
							<view class="iconText" :style="[{color:item.TextColor}]" @tap="copyVaule(item.value)">{{item.value}}</view>
					</view>
				</view>
			</WaCard>
		</WaCard>
		<WaCard>
			<view slot="title">渐变色</view>
			<WaCard  style='padding-bottom:0;'>
				<view class="contain">
					<view class="item-two" v-for="(item,index) in gradualColor" :key= 'item.value' :style="[{background:item.value}]">
							<view  class="iconText"  @tap="copyVaule(item.name)">{{item.name}}</view>
							<view class="iconText"  @tap="copyVaule(item.value)">{{item.value}}</view>
					</view>
				</view>
			</WaCard>
		</WaCard>
	</section>
</template>

<script>
	import WaCard from '../../components/Card.vue';
	import NativeBar from '../../components/NativeBar.vue';
	import { brightColor,lightColor,gradualColor} from '../../static/json/color.js'
	export default {
		components: {
			WaCard,
			NativeBar,
		},
		data() {
			return {
				brightColor:[],
				lightColor:[],
				gradualColor:[],
			}
		},
		methods:{
			copyVaule(value){
				uni.setClipboardData({
					data: value,
					success: function() {
						wx.showToast({
							title: '复制',
							duration: 1000,
							mask: true
						})
					}
				});
			}
		},
		mounted(){
			this.brightColor = brightColor;
			lightColor.forEach((item,index)=>{
				brightColor.forEach((item1,index1)=>{
					if(item.name.substring(0,item.name.length-5) == item1.name){
						item.TextColor = item1.value;
					}
				})
				
			})
			this.lightColor = lightColor;
			this.gradualColor = gradualColor;
		}
	}
</script>
<style scoped="scoped" lang="scss">
	.main-wrap{
		width:100%;
		box-sizing:border-box;
		padding:20upx;
	}
	.contain {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.item {
			width: 30%;
			height: 150upx;
			border-radius: 10upx;
			text-align: center;
			line-height: 120upx;
			margin:10upx 0;
			.iconText{
				font-size:26upx;
				line-height:75upx;
				text-align: center;
				color:#fff;
			}
		}
		.item-two{
			width:98%;
			height: 150upx;
			border-radius: 10upx;
			text-align: center;
			line-height: 120upx;
			margin:10upx 0;
			.iconText{
				font-size:26upx;
				line-height:75upx;
				text-align: center;
				color:#fff;
			}
		}
	}
</style>

<style>
	.main-wrap .wa-card{
		margin-bottom:20upx;
	}
</style>
