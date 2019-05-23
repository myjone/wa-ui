<template>
	<section>
		<view :class="['wa-meaage',type,className,isShow?'show':'hidden']">
			{{content}}
		</view>
	</section>
</template>
<script>
	export default{
		data(){
			return{
				type:'',
				content:'',
				className:'wa-meaage-false',
				isShow:false,
			}
		},
		methods:{
			Timer(){},
			 showMeaasge(options){
				 this.Timer && clearTimeout(this.Timer);
				 if(typeof(options)=='string'){
					 this.type='primary'
					 this.content = options
				 }else{
					 if(options.type){
						this.type = options.type;
					 }else{
						this.type='primary'
					 };
					 if(options.content){
						this.content = options.content;
					 }
				 }
				this.className =  `wa-meaage-true`;
				this.isShow = true;
				let _this = this;
				this.Timer = setTimeout(() => {
						_this.close();
				}, 1500)
			 },
			 close(){
					this.isShow = false;
					this.className =  `wa-meaage-false`;
					this.Timer && clearTimeout(this.Timer);
			 } 
		},
	}
</script>
<style lang="scss" scoped="scoped">
	.wa-meaage{
		width:100%;
		height:80upx;
		line-height:80upx;
		font-size:28upx;
		text-align:center;
		line-height:80upx;
		background:var(--primaryColor);
		color:#fff;
		z-index:9999;
		&.primary{
			background:var(--primaryColor);
		}
		&.success{
			background:var(--successColor);
		}
		&.error{
			background:var(--errorColor);
		}
		&.warning{
			background:var(--waranColor);
		}
		&.info{
			background:var(--infoColor);
		}
		&.wa-meaage-true{
			top:0;
			animation-name: slide-top;
			animation-duration: .5s;
		}
		&.wa-meaage-false{
			animation-name: slide-top-reduction;
			animation-duration:1s;
		}
		&.show{
			top:0;
		}
		&.hidden{
			top:-100%;
		}
		@keyframes slide-top {
			0% {
				top: -100%;
				opacity:0;
			}
			100% {
				top: 0;
				opacity:1;
			}
		}
		@keyframes slide-top-reduction {
			0% {
				opacity: 1;
				top: 0;
			}
			100% {
				opacity: 0;
				top: -100%;
			}
		}
		
	}
</style>
