import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Index',
            component: () =>
                import ("./components/index.vue")
        },
        {
            path: "/SearchBox",
            name: "SearchBox",
            component: () =>
                import ("./components/Index/searchBox.vue")
        },
        {
            path: "/Index",

        },
        {
            path: "/Classify",
            name: "Classify",
            component: () =>
                import ("./components/Index/classify.vue")
        },
        {
            path: "/Myshop",
            name: "Myshop",
            component: () =>
                import ("./components/Myshop.vue")
        },
        {
            path: "/Market",
            name: "Market",
            component: () =>
                import ("./components/market.vue")
        },
        {
            path: "/Live",
            name: "Live",
            component: () =>
                import ("./components/live.vue")
        },

    ]
})