<template>
	<view>
		<NativeBar :isback='true' bgSrc='http://prwe885o2.bkt.clouddn.com/wechatNative.jpg'>
			<text slot='backText'>图标</text>
		</NativeBar>
		<WaCard>
			<view slot="title">
				用法
			</view>
			<div class="contain">
				<text v-text="example"></text>
				<text class='icon-favorfill'></text>
			</div>
		</WaCard>
		<view class="item_wrap">
			<view class="item" v-for="(item,index) in icon" :key="index" @click="copyClass(`icon-${item.name}`)">
				<text class='icon' :class="'icon-' + item.name"></text>
				<view class="iconText">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ICONJSON from '../../static/json/icon.js';
	import WaCard from '../../components/Card.vue';
	import NativeBar from '../../components/NativeBar.vue';
	export default {
		components: {
			WaCard,
			NativeBar
		},
		data() {
			return {
				icon: [],
				example: "<text class='icon-favorfill'></text>"
			};
		},
		methods: {
			copyClass(name) {
				uni.setClipboardData({
					data: name,
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
		mounted() {
			this.icon = ICONJSON;
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.item_wrap {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		background: #fff;
		margin: 0 auto;
		.item {
			width: 33.3%;
			height: 150upx;
			text-align: center;
			border: 1px solid #e2e2e2;
			box-sizing: border-box;
			padding-top: 30upx;
			&~.item {
				border-top: none;
				border-left: none;
			}
			&:first-child {
				border-right: 1px solid #e2e2e;
				border-bottom: 1px solid #e2e2e2;
				border-left: 0;
			}
			&:nth-child(2) {
				border-top: 1px solid #e2e2e2;
			}

			&:nth-child(3) {
				border-top: 1px solid #e2e2e2;
			}

			.icon {
				font-size: 40upx;
				color: #8799a3;
			}

			.iconText {
				font-size: 28upx;
				line-height: 60upx;
				color:#aaa;
			}
		}
	}

	.contain {
		width: 100%;
		background: rgb(245, 245, 245);
		padding: 20upx;
		box-sizing: border-box;
	}
</style>
