<template>
	<section class='wrap'>
		<WaMessage ref="WaMeaasge"></WaMessage>
		<WaButton @tap='showMeModal' long type='primary'>默认</WaButton>
		<WaButton @tap='showMeModal1' long type='warning'>警告</WaButton>
		<WaButton @tap='showMeModal2' long type='error'>错误</WaButton>
		<WaButton @tap='showMeModal3' long type='info'>信息</WaButton>
		<WaButton @tap='showMeModal4' long type='success'>成功</WaButton>
	</section>
</template>

<script>
	import WaMessage from '../../components/Message.vue'
	import WaButton from '../../components/Button.vue';
	export default{
		components:{
			WaMessage,
			WaButton
		},
		data(){
			return{
				
			}
		},
		methods:{
			showMeModal(){
				this.$refs.WaMeaasge.showMeaasge('这是一个普通的提示')
			},
			showMeModal1(){
				this.$refs.WaMeaasge.showMeaasge({
					content:'这是一个警告',
				    type:'warning',
				})
			},
			showMeModal2(){
				this.$refs.WaMeaasge.showMeaasge({
					content:'这是一个错误提示',
				    type:'error',
				})
			},
			showMeModal3(){
				this.$refs.WaMeaasge.showMeaasge({
					content:'这是一个信息提示',
				    type:'info',
				})
			},
			showMeModal4(){
				this.$refs.WaMeaasge.showMeaasge({
					content:'这是一个成功提示',
				    type:'success',
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wrap{
	  padding-top:300upx;
	}
</style>
