import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/document",
        name: "documents",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/DocumentsView.vue"
            ),
    },
    {
        path: "/chat",
        name: "chat",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ChatView.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
