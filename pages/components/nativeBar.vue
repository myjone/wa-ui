<template>
	<section>
		<NativeBar :isBackHome='true' bgSrc='http://prwe885o2.bkt.clouddn.com/1558515712%281%29.png'>
			<view slot='content'>上拉刷新/下拉加载</view>
		</NativeBar>
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
		<view class="list" v-for="(item,index) in list">
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
				console.log(this.loading)
				if(this.loading){
					return;
				}
				let touchScroll = (e.changedTouches[0].pageY - this.downY)*0.5;
				if(touchScroll<0){
					return;
				}else{
					this.transformY = touchScroll;
				}
				if(this.transformY > 100){
					this.content = '释放刷新'
				}
				
			},
			start(e){
				if(this.loading){
					return;
				}
				this.downY = 0;
				this.isTrue = false;
				this.isShow = true;
				this.content = '下拉刷新';
				this.downY = e.touches[0].pageY;
			},
			end(){
				this.transformY = 0;
				this.isTrue = true;
				this.doRefash();
			},
			scroll(e){
				console.log(e)
			},
			
			doRefash(){
				let _this = this;
				this.content = '加载中';
				this.loading = true;
				setTimeout(function(){
					_this.isShow = false;
					_this.loading = false;
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
	}
	.list{
		width:100%;
		height:300upx;
		margin-bottom:20upx;
		background:#AAAAAA;
	}
</style>

