Vue.component('piece',{
    props: ['p','id'],
    template: '<g><rect :x="p.x*100" :y="p.y*100" width="100" height="100" :fill-opacity="id==0? 0:0.2" stroke="black" @click="clicked()"></rect></g>',
    methods:{
	clicked(){
	    this.$emit("pushed");
	}
    }
})

var app = new Vue({
    el: '#app',
    data: {
	pieces: [{x:0,y:0},
		 {x:1,y:0},
		 {x:2,y:0},
		 {x:3,y:0},
		 {x:0,y:1},
		 {x:1,y:1},
		 {x:2,y:1},
		 {x:3,y:1},
		 {x:0,y:2},
		 {x:1,y:2},
		 {x:2,y:2},
		 {x:3,y:2},
		 {x:0,y:3},
		 {x:1,y:3},
		 {x:2,y:3},
		 {x:3,y:3},
		],
    },

    methods:{
	swap(i){
	    let p = this.pieces[i];//i番目の変数
	    let z = this.pieces[0];//0番目の変数
	    if ((p.x-z.x)*(p.x-z.x)+(p.y-z.y)*(p.y-z.y)==1){
		this.pieces.splice(0,1,p);//座標を入れ替える
		this.pieces.splice(i,1,z);
	    }
	    console.log(this.pieces[i]);
	},

	textprint(i){
	    if (i==0){
		return null;
	    }else{
		return i;
	    }
	},

	shuffle(){
	    let n = this.pieces.length; // piecesの配列としての長さ
	    for (let j=0; j<1000; j++){
		this.swap(Math.floor(Math.random()*n));
	    }
	},

	translate(p){
	    return "translate(" + p.x*100 + "," + p.y*100 + ")"
	},
	
	clicked(){
	    console.log(" is clicked!");
	}
    }
})
