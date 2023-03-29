const home = { template: `<div> This is home page</div>` , name: 'home'}
const profile = {
     template: `<div>This is profile page of {{this.$route.param.nae}}</div>`,
}
const user = {
    template: `<div> Welcome {{this.$route.param.name}}
                    <div>
                        <router-view></router-view>
                    </div>
                </div>`,
}
const router = new VueRouter({
    routes:[
        {path: '/', component: home },
        {
            path: '/user/:name',
            component: user,
            children: [
                { path: '', component: home },
                { path: 'home', component: home},
                { path: 'profile', component: profile},
            ],
        },
    ],
})
new Vue({
    el:'#app',
    router,
})