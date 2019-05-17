<template>
	<view class="wa-notice">
		<view class="wa-icon-wrap">
			<text class="icon-notificationfill"></text>
		</view>
		<view class="wa-notice-content" :style="[{transform:`translateX(-${TRANSLATEX}px)`}]">
			{{title}}
		</view>
		<view class="wa-icon-right" @tap="close">
			<text class="icon-close"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '',
			}
		},
		data() {
			return {
				TRANSLATEX: 0, //初始滚动距离
				speed:1, // 滚动速度
				wrapWidth: 0,
				contentWidth: 0,
				interval: 20, //时间间隔
			}
		},
		methods: {
			close() {
				this.getNoteWidth();
				this.$emit('close', false);
			},

			//获取到元素的宽度    ***** 在组建中使用 createSelectorQuery要加in(this);
			getNoteWidth() {
				var query = uni.createSelectorQuery().in(this);
				let _this = this;
				query.select('.wa-notice').boundingClientRect(function(rect) {
					_this.wrapWidth = rect.width;
				}).exec();
			},
			//文字滚动
			scrolltxt() {
				var that = this;
				var length = that.contentWidth; //滚动文字的宽度
				var windowWidth = that.wrapWidth; //外框的宽度一般是屏幕宽度为好
				if (length > windowWidth-100){ //如果文字超过就开始滚动
					var interval = setInterval(function() {
						var maxscrollwidth = length //滚动的最大宽度，文字宽度+间距，如果需要一行文字滚完后再显示第二行可以修改marquee_margin值等于windowWidth即可
						var crentleft = that.TRANSLATEX;
						if (crentleft < maxscrollwidth) { //判断是否滚动到最大宽度
							that.TRANSLATEX = crentleft+that.speed
						} else {
							that.TRANSLATEX = 0;
							clearInterval(interval);
							that.scrolltxt();
						}
					}, that.interval);
				} else {
					// that.setData({
					// 	marquee_margin: "1000"
					// }); //只显示一条不滚动右边间距加大，防止重复显示
				}
			}



		},
		mounted() {
			this.getNoteWidth();
			this.contentWidth = this.title.length * 13; //13表示的是文字的size大小 
			this.scrolltxt();
		}
	}
</script>
<style lang="scss" lang="scss">
	.wa-notice {
		width: 100%;
		height: 80upx;
		background: #cce6ff;
		line-height: 80upx;
		color: #0081ff;
		font-size: 26upx;
		box-sizing: border-box;
		overflow: hidden;
		box-sizing: border-box;

		.wa-notice-content {
			padding: 0 80upx;
			white-space: nowrap;
		}

		.wa-icon-wrap {
			position: absolute;
			top: 0;
			left: 0;
			width: 80upx;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			font-szie: 30upx;
			z-index: 1;
			background: #cce6ff;
		}

		.wa-icon-right {
			position: absolute;
			top: 0;
			right: 0;
			width: 80upx;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			font-szie: 30upx;
			z-index: 1;
			background: #cce6ff;
		}

	}
</style>
