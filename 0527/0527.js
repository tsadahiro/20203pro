Vue.component('circbtn',{
    props: ['row','col','digit'], //属性の名前
    template: '<g @click="clicked()" :transform="translate">'+
	'<circle cx="50" cy="50" r="50" fill="blue"></circle>'+
	'<text x="50" y="50" font-size="30">{{digit}}</text></g>',
    computed:{ //算出プロパティ
	translate(){
	    return "translate("+this.col*100+","+this.row*100+")";
	}
    },
    methods:{
	clicked(){
	    this.$emit('slide');
	},
    },
})

let app=new Vue({
    el: '#app',
    data: {
	pieces: [{x:3,y:3},//0 
		 {x:0,y:0},//1
		 {x:1,y:0},//2
		 {x:2,y:0},//3
		 {x:3,y:0},//4
		 {x:0,y:1},//5
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
		],
	x: 10,
    },
    methods:{
	swap(i){//appのメソッド
	    let p = this.pieces[i];//i番目の変数
	    let z = this.pieces[0];//0番目の変数
	    if ((p.x-z.x)*(p.x-z.x)+(p.y-z.y)*(p.y-z.y)==1){
		this.pieces.splice(0,1,p);//座標を入れ替える
		this.pieces.splice(i,1,z);
	    }
	    console.log(this.pieces[i]);
	},
	pushed(){
	    console.log("I was pushed.");
	}
    }
})
