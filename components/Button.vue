<template>
	<section>
		<view :class="['wa-button',`wa-button-${type}`]">
			按钮
		</view>
	</section>
</template>

<script>
	export  default{
		props:{
			type:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted() {
			console.log(this.type)
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.wa-button{
		display:inline-block;
		padding:10upx 18upx;
		border:1px solid #e2e2e2;
		font-size:26upx;
	}
	.wa-button-primary{
		border:1px solid var(--activeColor);
	}
</style>
