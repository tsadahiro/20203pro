var app = new Vue({
    el: '#app',
    data: {
	messages: ['ABC','EFG', 'HIJ'],
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
