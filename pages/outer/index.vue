<template>
	<section class='main_wrap'>
		<WaCard>
			<view slot="title">基础组件</view>
			<WaItem :linkObj='{linkUrl:"/pages/components/icon",isBar:false}'>
				<view slot="name">图标-Icon</view>
			</WaItem>
			<WaItem 
			:linkObj='{linkUrl:"/pages/components/button",isBar:false}' 
			:options="{name:'zhangsan',age:44}">
				<view slot="name">按钮-Button</view>
			</WaItem>
			<WaItem
				:linkObj='{linkUrl:"/pages/components/switch",isBar:false}' 
				:options="{name:'zhangsan',age:44}"
			>
				<view slot="name">开关-Switch</view>
			</WaItem>
			<WaItem
				:linkObj='{linkUrl:"/pages/components/popup",isBar:false}' 
				:options="{name:'zhangsan',age:44}"
			>
				<view slot="name">弹窗-Popup</view>
			</WaItem>
			<WaItem
				:linkObj='{linkUrl:"/pages/components/color",isBar:false}' 
				:options="{name:'zhangsan',age:44}"
			>
				<view slot="name">色彩-Color</view>
			</WaItem>
		</WaCard>
		<!-- <Stepper v-model="num" /> -->
	</section>
</template>
<script>
	import NativeBar from '../../components/NativeBar.vue';
	import Stepper from '../../components/Stepper.vue';
	import WaButton from '../../components/Button.vue';
	import WaSwitch from '../../components/Switch.vue';
	import WaCard from '../../components/Card.vue';
	import WaItem from '../../components/Item.vue';
	export default {
		components: {
			NativeBar,
			Stepper,
			WaButton,
			WaSwitch,
			WaCard,
			WaItem,
		},
		data() {
			return {
				num: 9,
				loading: true,
				checked: true,
				loading: true,
			}
		},
		methods: {
			showMe(e) {

			},
			//switch
			change(val) {
				this.checked = val;
			},
			loadingFalse() {
				this.loading = false;
			},
			toNative(){
				uni.navigateTo({
					url:'/pages/components/icon'
				})
			}
		},
		mounted() {

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.main_wrap{
		width:100%;
		padding:20upx;
		box-sizing:border-box;
	}
	.bar{
		width:100%;
		height:80upx;
		line-height:80upx;
	}
</style>
