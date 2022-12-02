import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "",
          name: "about",
          component: () => import("../views/about/Abouthome.vue"),
        },

        {
          path: "myself",
          name: "myself",
          component: () => import("../views/about/Aboutmyself.vue"),
        },
        {
          path: "myfamily",
          name: "myfamily",
          component: () => import("../views/about/Aboutmyfamily.vue"),
        },
        {
          path: "mycompany",
          name: "mycompany",
          component: () => import("../views/about/Aboutmycompany.vue"),
        },
      ],
    },
    {
      path: "/contacts",
      name: "contacts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/news",
      name: "news",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/shopping",
      name: "shopping",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Shopping.vue"),
    },
    {
      path: "/shopping/:id",
      name: "showmore",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ShowMore.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;
