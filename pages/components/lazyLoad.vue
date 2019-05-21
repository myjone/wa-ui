<template>
	<section>
		<LazyLoad :list='list' :windowHeight='windowHeight' :scrollTop = 'scrollTop'></LazyLoad>
	</section>
</template>

<script>
	import LazyLoad from '../../components/lazeLoad.vue'
	export default {
		components:{
			LazyLoad
		},
		data: function() {
			return {
				list:[
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558366225215&di=e66cda76151c08b70506f3d5c8447253&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F785%2F847%2F9078748587_1844158023.jpg",
						show:false,
					},
				],
				windowHeight:0,
				scroll:0,
				scrollTop:0,
			}
		},
		methods: {
			
		},
		mounted() {
			let _this = this;
			uni.getSystemInfo({
				success(res) {
					_this.windowHeight = res.screenHeight;
				}
			})
			
		},
		onPageScroll(res) {
			this.scrollTop = res.scrollTop;
		},
		onReachBottom() {
			this.list = [...this.list,...this.list];
		}
	}
</script>

<style lang="scss">
	
</style>
