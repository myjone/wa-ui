<template>
		<button :class="classes" :disabled='loading'>
			<text class='loading' v-if='loading'>
				<text class="iconfont">&#xe68b;</text>
			</text>
			<text v-if="showSlot" ref="slot">
				<slot></slot>
			</text>
		</button>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: ''
			},
			loading: {
				type: Boolean,
				default: false,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			long:{
				type:Boolean,
				default:false,
			},
			size:{
				type:String,
				default:'normal',
			},
			radius:{
				type:String,
				default:'normal',
			}
		},
		data() {
			return {
				showSlot: true,
			}
		},
		computed: {
			classes() {
				return [
					`ripple`,
					`wa-button`,
					`wa-button-${this.type}`,
					`wa-button-${this.loading}`,
					`wa-button-${this.disabled}`,
					`wa-long-${this.long}`,
					`wa-button-${this.size}`,
					`wa-button-${this.radius}`,
				]
			}
		},
		methods: {

		},
		mounted() {
			console.log(this.long)
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.inline {
		display: inline-block;
		font-size: 0;
	}
	.wa-button {
		display: inline-block;
		padding: 0 28upx;
		height:60upx;
		line-height:60upx;
		border: 1upx solid #e2e2e2;
		font-size: 26upx;
		border-radius: 4upx;
		border: 1upx solid #e2e2e2;
		min-width: 120uuupx;
		transition: 0.2s ease-in-out;
		margin-right: 10upx;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.015);
		.loading {
			.iconfont {
				display: inline-block;
				font-size: 23upx;
				color: #fff;
				animation: rotate 1.2s linear infinite;
			}

			margin-right:10upx;
		}

		&.wa-button-true {
			opacity: .5;
			color: #fff;
		}
		&.wa-long-true{
			width:100%;
			display:block;
		}
		&.wa-button-small{
			height:45upx;
			 line-height:45upx;
			 &.wa-button-radius{
				border-radius:45upx;
			}
		}
		&.wa-button-large{
			height:70upx;
			 line-height:70upx;
			 padding:0 38upx;
			 &.wa-button-radius{
				border-radius:70upx;
			}
			 
		}
		&.wa-button-radius{
			border-radius:60upx;
		}
		
	}

	.wa-button-primary {
		background: var(--primaryColor) !important;
		color: #fff;
		border: 1upx solid var(--primaryColor) !important;
	}

	.wa-button-danger {
		background: var(--waranColor) !important;
		color: #fff;
		border: 1px solid var(--waranColor) !important;
	}

	.wa-button-info {
		background: var(--infoColor) !important;
		color: #fff;
		border: 1upx solid var(--infoColor) !important;
	}

	.wa-button-success {
		background: var(--successColor) !important;
		color: #fff;
		border: 1upx solid var(--successColor) !important;
	}

	.wa-button-error {
		background: var(--errorColor) !important;
		color: #fff;
		border: 1upx solid var(--errorColor) !important;
	}

	//按钮点击动画
	.ripple {
		position: relative;
	}

	.ripple:focus {
		outline: none;
	}

	.ripple:after {
		content: "";
		display: block;
		position: absolute;
		pointer-events: none;
		left: -10upx;
		right: -10upx;
		top: -10upx;
		bottom: -10upx;
		background-color: #333;
		background-repeat: no-repeat;
		background-position: 100%;
		opacity: 0;
		transition: all .2s ease-in-out;
	}

	.ripple:active:after {
		opacity: .3;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: 0s;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
<style>

</style>
