<template>
	<section>
		<NativeBar/>
		<Stepper v-model="num"/>
		
		<view>
			<view class="title">按钮组件</view>
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
		<WaButton type="error" :loading='loading'  @tap='showMe'>
			error
		</WaButton>
		<WaButton type="primary" :loading='loading'>
			loading
		</WaButton>
		<WaButton type="danger" disabled>
			disabled
		</WaButton>
		<WaButton type="danger" long>
			long
		</WaButton>
		<WaButton type="danger" size='large'>
			long
		</WaButton>
		<WaButton type="danger" size='small'>
			long
		</WaButton>
		<WaButton type="danger" radius='radius'>
			radius
		</WaButton>
		<WaButton type="danger" radius='radius' size='large'>
			radius
		</WaButton>
		<WaButton type="danger" radius='radius' size='small'>
			radius
		</WaButton>
		<view class="title">Switch开关</view>
		<WaSwitch v-model='checked' @change='change' ></WaSwitch>
		<view class="title">Switch开关自定义颜色</view>
		<WaSwitch v-model='checked' @change='change' activeColor='#666' inactiveColor='red'></WaSwitch>
		<view class="title">Switch自定义大小</view>
		<WaSwitch v-model='checked' @change='change' fontSize='40'></WaSwitch>
	</section>
</template>
<script>
	import NativeBar from '../../components/NativeBar.vue';
	import Stepper from '../../components/Stepper.vue';
	import WaButton from '../../components/Button.vue';
	import WaSwitch from '../../components/Switch.vue';
	export  default{
		components:{
			NativeBar,
			Stepper,
			WaButton,
			WaSwitch,
		},
		data(){
			return{
				num:9,
				loading:true,
				checked:true,
			}
		},
		methods:{
			showMe(e){
				console.log(e)
			},
			//switch
			change(val){
				this.checked = val;
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>
