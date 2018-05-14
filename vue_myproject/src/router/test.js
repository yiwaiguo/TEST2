import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Content from "@/components/Content"
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:"/home",
            name:"Home",
            component:Home
        },
        {
            path:"/content",
            name:"Content",
            component:Content,
            children:[
                        {
                            path:"/content/movie",
                            name:"movie",
                            component(){
                                return System.import("@/components/views/movie")
                            }
                        },
                        {
                            path:"/content/music",
                            name:"music",
                            component(){
                                return System.import("@/components/views/music")
                            }
                        }
            ]
        },
        {
            path:"*",
            redirect:"Home"
        }
    ],
    mode:"history"
})