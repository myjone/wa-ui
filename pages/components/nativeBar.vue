<template>
	<section>
		<NativeBar :isBackHome='true' bgSrc='http://prwe885o2.bkt.clouddn.com/wechatNative.jpg'>
			<view slot='content'>上拉刷新/下拉加载</view>
		</NativeBar>
		<div class="tab">
			
		</div>
		<scroll-view 
		 scroll-y = true
		 @scrolltolower="loadMore" 
		 @scrolltoupper="refesh" 
		 :style="[{height:scrollHeight+'px',transform:`translateY(${transformY}px)`}]" 
		 @touchmove="move"
		 @touchstart="start"
		 @touchend="end"
		 @scroll='scroll'
		 :class="['scrollBar',{scrollFalse:isTrue}]"
		>
		<view v-show='isShow' class="headerContent">{{content}}</view>
		<view class="list" v-for="(item,index) in list"  :key='index'>
		</view>
		</scroll-view>
	</section>
</template>

<script>
	import NativeBar from '../../components/NativeBar.vue'
	export default {
		name: 'nativeBar',
		components: {
			NativeBar,
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				list:[1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,],
				scrollHeight:0,
				downY:0,//触摸时候Y轴的纵坐标
				transformY:0,
				isTrue:false,
				content:'',
				isShow:false, //是否显示文字的
				loading:false,
			}
		},
		methods:{
			//上拉加载
			loadMore(){
				console.log('loadMore')
			},
			refesh(){
				
			},
			move(e){
				if(this.loading){
					return;
				}
				let touchScroll = (e.changedTouches[0].pageY - this.downY)*0.5;
				if(touchScroll<0){
					return;
				}else{
					this.transformY = touchScroll;
				}
				if(this.transformY > 50){
					this.content = '释放刷新'
					
				}
				if(this.transformY>30){
					this.isShow = true;
				}
				
			},
			start(e){
				if(this.loading){
					return;
				}
				this.content = '下拉刷新';
				this.downY = e.touches[0].pageY;
			},
			end(){
				if(this.loading){
					return;
				}
				if(this.transformY >50){
					this.transformY = 0;
					this.isTrue = true;
					this.doRefash();
				}else{
					this.transformY = 0;
					this.isTrue = true;
					this.isShow = false;
				}
			},
			scroll(e){
				console.log(e)
			},
			
			doRefash(){
				console.log(11)
				let _this = this;
				this.content = '加载中';
				this.loading = true;
				setTimeout(function(){
					_this.isShow = false;
					_this.loading = false;
					_this.downY = 0;
					_this.isTrue = false;
				},3000)
				
			}
		},
		mounted(){
			
		},
		created() {
			this.scrollHeight  = uni.getSystemInfoSync().windowHeight - this.CustomBar
		}
	}
</script>

<style  lang="scss" scoped="scoped">
	.scrollBar{
		
	}
	.scrollFalse{
		transition:0.35s ease-in;
	}
	.headerContent{
		width:100%;
		height:80upx;
		line-height:80upx;
		text-align:center;
		transition:.2s;
	}
	.list{
		width:100%;
		height:300upx;
		margin-bottom:20upx;
		background:#AAAAAA;
	}
	.tab{
		width:100%;
		height:40px;
		background:blue;
	}
</style>

