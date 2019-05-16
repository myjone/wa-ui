<template>
	<view :class="classes" @tap="change" :style="[{backgroundColor:switchbgColor,height:size+'rpx',padding:size+'rpx'}]">
		<view class="wa-switch-node" :style="[{width:size+'rpx',height:size+'rpx'}]">
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: true,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			activeColor: {
				type: String,
				default: '#0081ff'
			},
			inactiveColor: {
				type: String,
				default: '#fff'
			},
			fontSize: {
				type: Number,
				default: 40,
			},
		},
		data() {
			return {
				checked: this.value,
				switchbgColor: "",
				size: this.fontSize,
			}
		},
		computed: {
			classes() {
				return [
					`wa-switch`,
					`wa-switch-${this.checked}`,
					`wa-disabled-${this.disabled}`,
				]
			},
		},
		methods: {
			change() {
				if (this.disabled || this.loading) {
					return;
				} else {
					this.checked = !this.checked;
					this.$emit('change', this.checked);
					if (this.checked) {
						this.switchbgColor = this.activeColor;
					} else {
						this.switchbgColor = this.inactiveColor
					}
				}
			}
		},
		watch: {
			value(newValue) {
				this.checked = newValue;
				if (this.checked) {
					this.switchbgColor = this.activeColor;
				} else {
					this.switchbgColor = this.inactiveColor
				}
			},
		},
		mounted() {
			if (this.checked) {
				this.switchbgColor = this.activeColor;
			} else {
				this.switchbgColor = this.inactiveColor
			}

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wa-switch {
		display: inline-block;
		border-radius: 60upx;
		border: 1px solid rgba(0, 0, 0, 0.1);
		position: relative;
		transition: 0.2s linear;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		&.wa-disabled-true {
			opacity: 0.5;
		}
		.wa-switch-node {
			top: 0;
			left: 0;
			position: absolute;
			border-radius: 100%;
			z-index: 1;
			transition: 0.3s;
			box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
			background-color: #fff;
			overflow: hidden;
		}
	}
	.wa-switch-true {
		.wa-switch-node {
			left: 100%;
			transform: translateX(-100%)
		}
	}
</style>
