<template>
	<section>
		<div class="main_wrap">
			<WaCard>
				<view slot="title">
					Switch-normal
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
						<WaSwitch v-model='checked' @change='change'></WaSwitch>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					Switch-自定义颜色
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
						<WaSwitch v-model='checked' @change='change' activeColor='#39b54a' inactiveColor='#aaa'></WaSwitch>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					Switch-自定义大小
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
						<WaSwitch 
						v-model='checked' 
						@change='change' 
						 fontSize='50'
						 ></WaSwitch>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					Switch-disabled
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
						<WaSwitch 
						v-model='checked' 
						@change='change' 
						 disabled
						 ></WaSwitch>
					</WaCard>
			</WaCard>
		</div>
	</section>
</template>
<script>
	import WaCard from '../../components/Card.vue';
	import WaSwitch from '../../components/Switch.vue';
	export default {
		components: {
			WaSwitch,
			WaCard
		},
		data() {
			return {
				checked:false,
			}
		},
		methods:{
			change(){
				this.checked = !this.checked;
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.main_wrap {
		padding: 20upx;
		box-sizing: border-box;
	}
</style>
<style>
	.main_wrap .wa-card{
		margin-bottom:20upx;
	}
</style>

