const store = new Vuex.Store({
    state:{
        companies:[
            {
                name :'sample1',
                website : 'sample1.com',
                capital:50000
            },
            {
                name :'sample2',
                website : null,
                capital : 75000
            },
            {
                name : 'sample3',
                website : 'sample3.com',
                capital : 42000
            },
            {
                name : 'sample4',
                website : 'sample4.com',
                capital :38000
            },
        ],
        awardees:[]
    },
    mutations: {
        update_final(state,minimum){
            for(company of state.companies){
                //code2
            }
        }
    },
    actions : {
        send_task : function(context){
            //code1
        }
    }
})