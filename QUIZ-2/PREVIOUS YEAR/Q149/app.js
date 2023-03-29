const Create = {
    template: `<div>{{message}}</div>`,
    computed: {
        message(){
            return this.$route.query.update
            ? 'This is create page'
            : 'This is update page'
        },
    },
}
const router = new VueRouter({
    routes: [(path: '/', component: Create)],
})
new Vue({
    el:'#app',
    router,
})