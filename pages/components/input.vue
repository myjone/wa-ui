<template>
	<section>
		<NativeBar :isBackHome='true' bgSrc='http://prwe885o2.bkt.clouddn.com/1558574842%281%29.png'>
			<view slot='content'>输入框</view>
		</NativeBar>
		<div class="contain">
			<WaInput v-model='value' placeholder="请输入您的手机号" type='number'></WaInput>
			<WaInput v-model='value' placeholder="请输入您的手机号" type='number'></WaInput>
			<WaInput v-model='value' placeholder="请输入您的手机号" type='number'></WaInput>
			<WaInput v-model='value' placeholder="请输入您的手机号" type='number'></WaInput>
			<WaInput v-model='value' placeholder="请输入您的手机号" type='number'></WaInput>
			<WaInput v-model='value' placeholder="请输入您的手机号" type='number'></WaInput>
		</div>
		<div class="button" @click='showMessage'>
			数据
		</div>
	</section>
</template>

<script>
	import NativeBar from '../../components/NativeBar.vue'
	import WaInput from '../../components/Input.vue'
	export default{
		name:'nativeBar',
		components:{
			NativeBar,
			WaInput,
		},
		data(){
			return{
				CustomBar:this.CustomBar,
				value:''
			}
		},
		methods:{
			showMessage(){
				console.log(this.value)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.contain{
		width:100%;
		box-sizing:border-box;
		padding:20upx;
	}
	page{
		background:#FFFFFF;
	}
</style>
<style>
	page{
		background:#FFFFFF;
	}
</style>


