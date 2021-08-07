import Vue from 'vue'
import VueRouter from "vue-router";
import Axios from 'axios'

import App from './App'
import routes from './router'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    routes, // short for routes: routes
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
    linkExactActiveClass: "nav-item active"
});

Vue.prototype.$http = Axios;

new Vue({
    el: "#app",
    render: h => h(App),
    router
})