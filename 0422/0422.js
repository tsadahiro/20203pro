let app = new Vue({
  el: '#app',
  data: {
      items: [[1,2,3],[4,5,6],[7,8,9]],
      size: 3
  },
    methods:{
	plus(){
	    this.size += 1;
	    let square = []; 
	    for(let i=0; i<this.size; i++){//横に０並ぶ
		square.push([]);//空の配列 []中に[]が入って[[]]ってなる
		for(let j=0; j<this.size; j++){//縦に０並ぶ
		    square[i].push(j+1+this.size*i);
		}
	    }
	    this.items = square;
	},
	minus(){
	    this.size -= 1;
	    let square = [];
	    for(let i=0; i<this.size; i++){
		square.push([])
		for(let j=0; j<this.size; j++){
		    square[i].push(j+1+this.size*i);
		}
	    }
	this.items = square;
	}
    }
})

//let app = new Vue({
//    el: '#app',
//    data: {
//	items: [[1,2,3], [4,5,6], [7,8,9]],
//	size: 3
//    },
//    
//    methods:{
//	plus(){
//	    this.size += 1;
//	    let square = [];
//	    for (let i=0; i<this.size; i++){
//		square.push([]);
//		for (let j=0; j<this.size; j++){
//		    square[i].push(j);
//		}
//	    }
//	    this.items = square;
//	}
//    }
//})
