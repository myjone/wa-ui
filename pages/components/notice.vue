<template>
	<section>
		<div class="main_wrap">
			<WaNoticeBar @close='close' title='的标题dfgsdfg dsfgsd fg sdfg sdfg dsfg fds的标题的标题的标题的'>
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
