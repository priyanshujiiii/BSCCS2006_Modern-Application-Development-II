const a = new Vue({
    el:'#app',
    data:{
        data : "",
        refreshes : 0,
    },
    methods:{
        do_something(){
            if(isNaN(this.refreshes))this.refreshes=0;
            if(this.data.length %2){
                sessionStorage.data="prefix"+this.data;
                sessionStorage.refreshes=this.refreshes*2+1;
            }
            else{
                sessionStorage.data=this.data+"suffix";
                sessionStorage.refreshes = this.refreshes*2-1;
            }
        }
    },
    mounted : function(){
        if(sessionStorage.data){
            this.data="suffix"+sessionStorage.data;
            this.refreshes = Number(sessionStorage.refreshes)%3-1;
        }
        else{
            this.data = sessionStorage.data + "prefix";
            this.refreshes = Number(sessionStorage.refreshes)%3+1;
        }
        sessionStorage.data = this.data;
        sessionStorage.refreshes = this.refreshes;
    }
})