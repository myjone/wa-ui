<template>
	<section class='main-wrap'>
		<WaCard>
			<view slot="title">色彩</view>
			<WaCard bgColor="rgb(245,245,245)">
				<view class="contain">
					<view class="item">

					</view>
					<view class="item">

					</view>
				</view>
			</WaCard>
		</WaCard>
	</section>
</template>

<script>
	import WaCard from '../../components/Card.vue';
	export default {
		components: {
			WaCard,
		},
		data() {
			return {
				list: {
				
				}
			}
		},
		mounted() {
			let arr = [];
			for(let key in this.list){
				let obj = {};
				obj.name = key;
				obj.value = this.list[obj];
				arr.push(obj)
			}
			console.log(arr)
		}
	}
</script>
<style scoped="scoped" lang="scss">
	.main-wrap{
		width:100%;
		box-sizing:border-box;
		padding:20upx;
	}
	.contain {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.item {
			width: 30%;
			height: 120upx;
			border-radius: 10upx;
			text-align: center;
			line-height: 120upx;
		}
	}
</style>
