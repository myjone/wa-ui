<template>
	<section>
		<div class="main_wrap">
			<WaNoticeBar @close='close' title='这个是文字滚动效果的一个特效由于时间来不及必须要现在搞完啊'>
			</WaNoticeBar>
		</div>
	</section>
</template>
<script>
	import WaButton from '../../components/Button.vue';
	import WaCard from '../../components/Card.vue';
	import WaNoticeBar from '../../components/NoticeBar.vue';
	export default {
		components: {
			WaButton,
			WaCard,
			WaNoticeBar
		},
		data() {
			return {

			}
		},
		methods:{
			close(e){
				console.log(e)
			},
		},
		mounted() {
		
		}
	}
</script>

<style scoped="scoped" lang="less">

</style>
