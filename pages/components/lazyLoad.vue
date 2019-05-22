<template>
	<section>
		 <ul class="ul">
			 <li class="li" v-for='(item,index) in list' :key='index'>
				 <LazyLoad v-model='item.src' :scrollTop='scrollTop'></LazyLoad>
			 </li>
		 </ul>
	</section>
</template>

<script>
	import LazyLoad from '../../components/lazeLoad.vue'
	export default {
		components:{
			LazyLoad
		},
		data(){
			return{
				scrollTop:0,
				list:[
					{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},
					{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},
					{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},
					{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},
					{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},
					{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},
					{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},
					{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},
					{
						src:'http://img3.imgtn.bdimg.com/it/u=1521746463,91096128&fm=26&gp=0.jpg'
					},{
						src:'http://img2.imgtn.bdimg.com/it/u=2038159003,1710418711&fm=26&gp=0.jpg'
					},
				],
			}
		},
		methods:{
			 
		},
		mounted(){
			
		},
		onPageScroll(res) {
				this.scrollTop = res.scrollTop;
		},
		onReachBottom(){
			this.list = [...this.list,...this.list]
		}
	}
</script>

<style lang="scss">
	.ul{
		width:100%;
		box-sizing:border-box;
		padding:20upx;
		.li{
			width:100%;
			border-radius:20upx;
			margin-bottom:30upx;
			background:#e2e2e2;
			overflow:hidden;
		}
	}
</style>
