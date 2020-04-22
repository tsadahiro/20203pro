let app = new Vue({
    el: '#app',
    data: {
	items: [[1,2,3], [4,5,6], [7,8,9]],
	size: 3
    },
    
    methods:{
	plus(){
	    this.size += 1;
	    let square = [];
	    for (let i=0; i<this.size; i++){
		square.push([]);
		for (let j=0; j<this.size; j++){
		    square[i].push(j);
		}
	    }
	    this.items = square;
	}
    }
})
