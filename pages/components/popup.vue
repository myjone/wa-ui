<template>
	<section class="main_wrap">
		<WaCard>
			<view slot="title">
				弹窗
			</view>
			<WaCard bgColor="rgb(245,245,245)" class='marginBotomButtonWrap'>
				<WaButton type="primary" long size='large' @tap='showModal("center")'>
					中间弹窗
				</WaButton>
				<WaButton type="danger" long size='large' @tap='showModal("left")'>
					从左侧弹出
				</WaButton>
				<WaButton type="info" long size='large' @tap='showModal("right")'>
					从右侧弹出
				</WaButton>
				<WaButton type="success" long size='large' @tap='showModal("top")'>
					从上弹出
				</WaButton>
				<WaButton type="error" long size='large' @tap='showModal("bottom")'>
					从下弹出
				</WaButton>
			</WaCard>
		</WaCard>
		
		<WaCard>
			<view slot="title">
				弹窗-不展示蒙版
			</view>
			<WaCard bgColor="rgb(245,245,245)" class='marginBotomButtonWrap'>
				<WaButton type="primary" long size='large' @tap='showModal1()' >
					不展示蒙板块
				</WaButton>
			</WaCard>
		</WaCard>
		<WaCard>
			<view slot="title">
				弹窗-点击蒙板不关闭
			</view>
			<WaCard bgColor="rgb(245,245,245)" class='marginBotomButtonWrap'>
				<WaButton type="primary" long size='large' @tap='showModal2()' >
					点击蒙版不关闭弹窗
				</WaButton>
			</WaCard>
		</WaCard>
		<!-- /*中间弹窗弹窗*/ -->
		<WaPopup v-model='modalShow' :position='position'>
			 <WaButton type="error" long size='large' @tap='close'>
			 	关闭弹窗
			 </WaButton>
		</WaPopup>
		<WaPopup v-model='modalShow1'  :overlay='true'>
			 <WaButton type="error" long size='large' @click.native='close'>
			 	关闭弹窗
			 </WaButton>
		</WaPopup>
		<WaPopup v-model='modalShow2'  :overlayCilck='false'>
			 <WaButton type="error" long size='large' @tap='close'>
			 	关闭弹窗
			 </WaButton>
		</WaPopup>
		</div>
	</section>
</template>
<script>
	import WaButton from '../../components/Button.vue';
	import WaCard from '../../components/Card.vue';
	import WaPopup from '../../components/Popup.vue';
	export default {
		components: {
			WaButton,
			WaCard,
			WaPopup
		},
		data() {
			return {
				modalShow: false,
				modalShow1:false,
				modalShow2:false,
				position:"position",
			}
		},
		methods: {
			showModal(position) {
				this.position = position;
				this.modalShow = !this.modalShow;
			},
			
			close(){
				this.modalShow = false;
				this.modalShow1 = false;
				this.modalShow2 = false;
			},
			
			showModal1(){
				this.modalShow1 = true;
			},
			
			showModal2(){
				this.modalShow2 = true;
			}
			
		}
	}
</script>
<style scoped="scoped" lang="less">
	.main_wrap {
		padding: 20upx;
		box-sizing: border-box;
	}
</style>
<style>
	.marginBotomButtonWrap .wa-button {
		margin-bottom: 20upx;
	}
	.main_wrap .wa-card{
		margin-bottom:20upx;
	}
</style>
