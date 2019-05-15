<template>
	<view>
		<view class="item_wrap">
			<view class="item" v-for="(item,index) in icon" :key="index" v-if="item.isShow">
				<text class="lg" :class="'icon-' + item.name"></text>
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import ICONJSON from '../../static/json/icon.js'
	export default {
		data() {
			return {
				icon:[],
			};
		},
		methods: {
			
		},
		mounted() {
			this.icon = ICONJSON;
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.item_wrap{
		width:100%;
		display:flex;
		justify-content:flex-start;
		flex-wrap:wrap;
		background:#fff;
		.item{
			width:33%;
			height:120upx;
			text-align:center;
			&:nth-child(2n-1){
				border-right:1px solid #e2e2e2;
				border-bottom:1px solid #e2e2e2;
				box-sizing:border-box;
			}
			&:nth-child(2n){
				border-bottom:1px solid #e2e2e2;
			}
			&:nth-child(3n){
				border-right:0;
			}
		}
	}
</style>
