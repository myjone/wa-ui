<template>
	<section>
		<NativeBar :isBackHome='true' bgSrc='http://prwe885o2.bkt.clouddn.com/1558515712%281%29.png'>
			<view slot='content'>上拉刷新/下拉加载</view>
		</NativeBar>
		
	</section>
</template>

<script>
	import NativeBar from '../../components/NativeBar.vue'
	export default{
		components:{
			NativeBar,
		},
		data(){
			return{
				CustomBar:this.CustomBar,
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>
