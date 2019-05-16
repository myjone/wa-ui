<template>
	<section>
		<div class="main_wrap">
			<WaCard>
				<view slot="title">
					基本按钮-正常尺寸
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
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
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					圆角按钮
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
					<WaButton type="primary" radius='radius'>
						primary
					</WaButton>
					<WaButton type="danger" radius='radius'>
						danger
					</WaButton>
					<WaButton type="info" radius='radius'>
						info
					</WaButton>
					<WaButton type="success" radius='radius'>
						success
					</WaButton>
					<WaButton type="error" radius='radius'>
						error
					</WaButton>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					按钮不可点击
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
					<WaButton type="primary" disabled>
						primary
					</WaButton>
					<WaButton type="danger" disabled>
						danger
					</WaButton>
					<WaButton type="info" disabled>
						info
					</WaButton>
					<WaButton type="success" disabled>
						success
					</WaButton>
					<WaButton type="error" disabled>
						error
					</WaButton>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					loading按钮
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
					<WaButton type="primary" loading>
						primary
					</WaButton>
					<WaButton type="danger" loading>
						danger
					</WaButton>
					<WaButton type="info" loading>
						info
					</WaButton>
					<WaButton type="success" loading>
						success
					</WaButton>
					<WaButton type="error" loading>
						error
					</WaButton>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					基本按钮-小尺寸
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
					<WaButton type="primary" size='small'>
						primary
					</WaButton>
					<WaButton type="danger" size='small'>
						danger
					</WaButton>
					<WaButton type="info"size='small'>
						info
					</WaButton>
					<WaButton type="success" size='small'>
						success
					</WaButton>
					<WaButton type="error" size='small'>
						error
					</WaButton>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					基本按钮-大尺寸
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginButtonWrap'>
					<WaButton type="primary" size='large'>
						primary
					</WaButton>
					<WaButton type="danger" size='large'>
						danger
					</WaButton>
					<WaButton type="info"size='large'>
						info
					</WaButton>
					<WaButton type="success" size='large'>
						success
					</WaButton>
					<WaButton type="error" size='large'>
						error
					</WaButton>
					</WaCard>
			</WaCard>
			<WaCard>
				<view slot="title">
					基本按钮-长按钮
				</view>
					<WaCard bgColor="rgb(245,245,245)" class='marginBotomButtonWrap'>
					<WaButton type="primary" long>
						primary
					</WaButton>
					<WaButton type="danger" long>
						danger
					</WaButton>
					<WaButton type="info" long>
						info
					</WaButton>
					<WaButton type="success" long>
						success
					</WaButton>
					<WaButton type="error" long>
						error
					</WaButton>
					</WaCard>
			</WaCard>
		</div>
	</section>
</template>
<script>
	import WaButton from '../../components/Button.vue';
	import WaCard from '../../components/Card.vue';
	export default {
		components: {
			WaButton,
			WaCard
		},
		data() {
			return {

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
	/*修改按钮的默认尺寸*/
	.marginButtonWrap .wa-button{
		margin-right:10upx;
	}
	.marginBotomButtonWrap .wa-button{
		margin-bottom:10upx;
	}
	.main_wrap .wa-card{
		margin-bottom:20upx;
	}
</style>
