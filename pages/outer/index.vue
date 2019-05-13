<template>
	<section>
		<NativeBar/>
		<Stepper v-model="num"/>
		<Button type="primary">
			你好
		</Button>
	</section>
</template>
<script>
	import NativeBar from '../../components/NativeBar.vue';
	import Stepper from '../../components/Stepper.vue';
	import Button from '../../components/Button.vue';
	export  default{
		components:{
			NativeBar,
			Stepper,
			Button,
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
