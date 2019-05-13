<template>
	<section>
		<view class="navbar fixed fixed-top" :style="[{height:CustomBar + 'px'}]">
			<view class="action" @tap="BackPage" v-if="isBack">
				<slot name="backText">返回</slot>
			</view>
		</view>
		<view class="navbar" :style="[{height:CustomBar + 'px'}]">
			
		</view>
		
	</section>
</template>

<script>
	 export default{
		 props:{
			isback:{
				type:Boolean,
				default:false,
			},
			isconetnt:{
				type:Boolean,
				default:false,
			},
			isLeftContent:{
			  type:Boolean,
			  default:false,
			}
		 },
		 data(){
			 return{
				 CustomBar:this.CustomBar,
				 StatusBar:this.StatusBar,
			 }
		 },
		 methods:{
			 
		 },
		 mounted() {
		 	console.log(this.CustomBar)
		 }
	 }
</script>

<style scoped="scoped" lang="scss">
	.navbar{
		width:100%;
		background:#fff;
		background:var(--activeColor);
		color:#fff;
	}
	.fixed{
		position:fixed;
	}
	.fixed-top{
		left:0;
		right:0;
	}
</style>
