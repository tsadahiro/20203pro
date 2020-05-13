let app = new Vue({
    el: '#app',
    data: {
	pieces: [{x:0,y:0},
		 {x:1,y:0},
		 {x:2,y:0},
		 {x:0,y:1},
		 {x:1,y:1},
		 {x:2,y:1},
		 {x:0,y:2},
		 {x:1,y:2},
		 {x:2,y:2},
		],
    },
    methods:{
	swap(i){
	    let p = this.pieces[i];
	    let z = this.pieces[0];
	    if ((p.x-z.x)*(p.x-z.x)+(p.y-z.y)*(p.y-z.y)==1){
		this.pieces.splice(0,1,p);
		this.pieces.splice(i,1,z);
	    }
	}
    }
})
