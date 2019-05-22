//找出数组中最小的值 
 let arr = [1,28989,1,7999,0.1];
 let min = Math.min.apply(Math.min,arr);
 //将数组的方法挂载到Array值上
 Array.prototype.min = function(){
	 let min = this[0];
	 let i = this.length;
	 for(j;j<i;j++){
		 if(this[j]<min){
			 min = this[j]
		 }
	 }
	 return min;
 }