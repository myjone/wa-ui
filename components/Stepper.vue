<template>
	<section>
		<view class="Stepper_wrap">
			<view class="reduce box"  @click="reduce">-</view>
				<input type="number" class="numInput" v-model='inputValue' @input="changeInput">
			<view class="add box">+</view>
		</view>
	</section>
</template>

<script>
	export default{
		name:'Stepper',
		props:{
			min:{
				type:Number,
				default:0,
			},
			max:{
				type:Number,
				default:99,
			},
			value:{
				type:Number,
				default:0,
			},
			step:{
				type:Number,
				default:1,
			}
		},
		data(){
			return {
				inputValue:this.value,
			}
		},
		methods:{
			changeInput(){
				if(this.inputValue == "" || this.inputValue == null ){
					this.inputValue = 0;
				}
			},
			//减去
			reduce(){
				
			}
		},
		
		mounted() {
			console.log(this.inputValue)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.Stepper_wrap{
		width:183upx;
		height:50upx;
		border:1px solid #e2e2e2;
		background:#fff;
		border-radius:5px;
		overflow: hidden;
		.numInput{
			display:block;
			border:none;
			float:left;
			width:80upx;
			height:50upx;
			border-left:1px solid #e2e2e2;
			border-right:1px solid #e2e2e2;
			font-size:24upx;
			text-align: center;
			color:#333;
		}
		.box{
			float:left;
			width:50upx;
			height:50upx;
			text-align: center;
			line-height:50upx;
		}
	}
</style>
