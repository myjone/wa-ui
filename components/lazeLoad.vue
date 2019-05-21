<template>
	<view class="lazy-imagelist">
		<view class="item" v-for="(item,index) in imageList" :key="index">
			<image class="image" 
			:class="{lazy:!item.show}" 
			:data-index="index" 
			@load="imageLoad" 
			:src="item.show?item.src:''"
			 mode=""></image>
			<view class="block image placeholder" :class="{loaded:item.loaded}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data: function() {
			return {
				placeholderSrc: '../../static/default.jpg',
				show: false,
				imageList:[],
			}
		},
		props:{
			list:{
				type:Array,
				default:function(){
					return [];
				}
			},
			windowHeight:{
				type:Number,
				default:0,
			},
			scrollTop:{
				type:Number,
				default:0,
			}
		},
		methods: {
			load(){
				let that = this
				uni.createSelectorQuery().in(this).selectAll('.image').boundingClientRect((images) => {
					console.log(images)
					images.forEach((image, index) => {
						console.log(index)
						if (image.top <= that.windowHeight) {
							that.imageList[index].show = true;
							that.imageList[index].loaded = true
						}
					})
				}).exec()
			},
			imageLoad(e) {
				this.list[e.target.dataset.index].loaded = true
			}
		},
		watch:{
			windowHeight(newvalue){
				this.windowHeight = newvalue;
			},
			scrollTop(){
				console.log(11)
				this.load();
			},
			imageList(newList){
				this.imageList = newList
			}
		},
		mounted() {
			this.imageList = this.list;
			let _this = this;
			setTimeout(function(){
				_this.load();
			},5000)
			
		}
	}
</script>

<style lang="scss">
	.lazy-imagelist {
		display: flex;
		margin-top: 50upx;
		flex-wrap: wrap;
		justify-content: center;
		.item {
			width: 40%;
			padding: 0 5%;
			height: 240px;
			position: relative;
			.block{
				display: inline-block;
				width: 90%;
				height: 90%;
				background: #ddd;
			}
			.image {
				width: 100%;
				position: absolute;
			}
		}
		.placeholder {
			opacity: 1;
			transition: opacity 0.4s linear;
		}
		
		.loaded {
			opacity: 0;
		}
	}
</style>
