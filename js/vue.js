let ar = new Vue({
    el:"#arrow",
    data:{
        msg:"IE / EUR",
        activeElementArrow: true
    },
    methods:{
        showArrow: function(){
            if(this.activeElementArrow) {this.activeElementArrow = false}
            else{this.activeElementArrow = true}
          
        }
    }
})