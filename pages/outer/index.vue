<template>
	<section>
		<NativeBar/>
		<Stepper v-model="num"/>
		
		<view>
			<div class="title">按钮组件</div>
		</view>
		<WaButton type="primary">
			primary
		</WaButton>
		<WaButton type="danger">
			danger
		</WaButton>
		<WaButton type="info">
			info
		</WaButton>
		<WaButton type="success">
			success
		</WaButton>
		<WaButton type="error">
			error
		</WaButton>
	</section>
</template>
<script>
	import NativeBar from '../../components/NativeBar.vue';
	import Stepper from '../../components/Stepper.vue';
	import WaButton from '../../components/Button.vue';
	export  default{
		components:{
			NativeBar,
			Stepper,
			WaButton,
		},
		data(){
			return{
				num:9,
			}
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>
