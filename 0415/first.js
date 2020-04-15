var app = new Vue({
    el: '#app',
    data: {
	message: 'ABC',
	color: 'color:black;' //黒
    },
    methods:{
	plus(){
	    this.message += " AIUEO ";
	},
	changecolor(){
	    this.color = 'color:red;'; //赤
	}
    }
})
