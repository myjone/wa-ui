<template>
	<view class='inline'>
		<button :class="classes">
			<span class='loading'></span>
			<span v-if="showSlot" ref="slot"><slot></slot></span>
		</button>
	</view>
</template>

<script>
	export  default{
		props:{
			type:{
				type:String,
				default:''
			},
			loading:{
				type:Boolean,
				default:false,
			}
		},
		data(){
			return{
				showSlot:true,
			}
		},
		computed:{
			classes(){
					return [
						`wa-button`,
						`wa-button-${this.type}`
					]
			}
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.inline{
		display:inline-block;
		font-size:0;
	}
	.wa-button{
		display:inline-block;
		padding:16upx 28upx;
		border:1px solid #e2e2e2;
		font-size:28upx;
		border-radius:4upx;
		border:1px solid #e2e2e2;
		min-width:120upx;
		transition: 0.2s ease-in-out;
		margin-right:10upx;
	}
	.wa-button-primary{
		background:var(--primaryColor);
		color:#fff;
		border: 1px solid var(--primaryColor);
		box-shadow: 1upx 3upx 8upx rgba(0,0,0,.2);
	}
	.wa-button-danger{
		background:var(--waranColor);
		color:#fff;
		border: 1px solid var(--waranColor);
		box-shadow: 1upx 3upx 8upx rgba(0,0,0,.2);
	}
	.wa-button-info{
		background:var(--infoColor);
		color:#fff;
		border: 1px solid var(--infoColor);
		box-shadow: 1upx 3upx 8upx rgba(0,0,0,.2);
	}
	.wa-button-success{
		background:var(--successColor);
		color:#fff;
		border: 1px solid var(--successColor);
		box-shadow: 1upx 3upx 8upx rgba(0,0,0,.2);
	}
	.wa-button-error{
		background:var(--errorColor);
		color:#fff;
		border: 1px solid var(--errorColor);
		box-shadow: 1upx 3upx 8upx rgba(0,0,0,.2);
	}
	
</style>
