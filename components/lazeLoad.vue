<template>
	<view class="wa-lazy-image" :style="[{backgroundColor:bgColor}]">
		<image mode="widthFix" class="box-image" :src='src'></image>
	</view>
</template>

<script>
	export default {
		data: function(){
			return {
				bgColor:'',
				src:'',
			}
		},
		props:{
			value:{
				type:String,
				default:'',
			},
			scrollTop:{
				type:[String,Number],
				default:0,
			}
		},
		methods:{
			load(){
				let that = this
				uni.createSelectorQuery().in(this).selectAll('.box-image').boundingClientRect((images) => {
					images.forEach((item,index)=>{
						if(item.top<uni.getSystemInfoSync().windowHeight){
							if(this.src == ""){
								this.src = this.value;
							}
						}
					})
				}).exec()
			},
			//随机产生背景色
			getColor(){
				let r = Math.floor(Math.random()*255);
				let g = Math.floor(Math.random()*255);
				let b = Math.floor(Math.random()*255);
				this.bgColor = 'rgba('+ r +','+ g +','+ b+',0.8)';
			}
		},
		watch:{
			scrollTop(newValue){
				this.load();
			}
		},
		mounted(){
			this.load();
			
		},
		created(){
			this.getColor();
		}
	}
</script>

<style lang="scss">
	.wa-lazy-image{
		display:inline-block;
		height:100%;
		width:100%;
		background:#fff;
	}
</style>
