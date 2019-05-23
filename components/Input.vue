<template>
	<section>
		<view class="wa-filed">
			<input type="text" 
			:class='["wa-input",className]' 
				@focus="showFocus"
				@blur="showBlur" 
				:placeholder="placeholder"
				:type="type"
				v-model='InputValue'>
			<view class="icon" v-show="clearIconShow" @tap="clearValue">
				<text class="icon-roundclosefill"></text>
			</view>
		</view>
	</section>
</template>

<script>
	export default {
		props: {
			value: {
				type: [String, Number],
				default: '',
			},
			placeholder:{
				type:String,
				default: '',
			},
			type:{
				type:String,
				default: 'text',
			}
		},
		data() {
			return {
				className: '',
				InputValue: this.value,
				clearIconShow: false,
			}
		},
		methods: {
			showFocus() {
				this.className = `wa-input-focus`;
			},
			showBlur() {
				this.className = '';
			},
			clearValue(){
				this.InputValue = '';
				this.$emit('input','');
			},
		},
		watch: {
			InputValue: {
				handler(newValue, oldValue) {
					this.$emit('input',newValue);
					if (this.InputValue == '') {
						this.clearIconShow = false;
					} else {
						this.clearIconShow = true;
					}
				},
				immediate: true
			}
		},
		mounted(){

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wa-filed {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		margin-bottom:20upx;
		.wa-input {
			box-sizing: border-box;
			display: block;
			width: 100%;
			height: 80upx;
			border: 1px solid #eee;
			border-radius: 5upx;
			transition: 0.2s;
			padding: 0 40upx 0 20upx;
			font-size: 28upx;
			color: #666;

			&.wa-input-focus {
				border-color: var(--primaryColor);
				box-shadow: 0 0 0 2px rgba(0, 129, 255, .2);
			}
		}

		.icon {
			position: absolute;
			right: 10upx;
			top: 50%;
			transform: translateY(-50%);
			font-size: 35upx;
			color: var(--grey);
		}
	}
</style>
