<template>
	<section>
		<div>
			<NativeBar :isback='true' bgSrc='http://prwe885o2.bkt.clouddn.com/wechatNative.jpg'>
				<text slot='backText'>消息通知</text>
			</NativeBar>
			<WaNoticeBar @close='close' title='这个是文字滚动效果的一个特效由于时间来不及必须要现在搞完啊'>
			</WaNoticeBar>
		</div>
	</section>
</template>
<script>
	import WaNoticeBar from '../../components/NoticeBar.vue';
	import NativeBar from '../../components/NativeBar.vue'
	export default {
		components: {
			WaNoticeBar,
			NativeBar
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
