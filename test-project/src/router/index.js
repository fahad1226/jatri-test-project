import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/accounts/Login.vue";
import AlbumDetails from "../components/albums/Album.vue";
import AlbumList from "../components/albums/List.vue";
import Home from "../components/Home.vue";
import CreatePost from "../components/posts/Add.vue";
import EditPost from "../components/posts/Edit.vue";
import PostList from "../components/posts/List.vue";
import PostDetails from "../components/posts/Post.vue";
import CreateUser from "../components/users/CreateUser.vue";
import EditUser from "../components/users/EditUser.vue";
import UserDetails from "../components/users/UserDetails.vue";
import UserList from "../components/users/UserList.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/user-list",
        name: "user-list",
        component: UserList,
        //meta: { requiresAuth: true },
    },
    {
        path: "/create-user",
        name: "create-user",
        component: CreateUser,
    },
    {
        path: "/edit-user/:userId",
        name: "edit-user",
        component: EditUser,
    },
    {
        path: "/user-details/:userId",
        name: "user-details",
        component: UserDetails,
    },
    {
        path: "/posts",
        name: "post-list",
        component: PostList,
        // meta: { requiresAuth: true },
    },
    {
        path: "/create/post",
        name: "create-post",
        component: CreatePost,
    },
    {
        path: "/edit/post/:postId",
        name: "edit-post",
        component: EditPost,
    },
    {
        path: "/details/post/:postId",
        name: "post-details",
        component: PostDetails,
    },
    {
        path: "/albums",
        name: "album-list",
        component: AlbumList,
        // meta: { requiresAuth: true },
    },
    {
        path: "/album/details/:albumId",
        name: "album-details",
        component: AlbumDetails,
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

/**
 * route blocking logic (kinda of a middleware)
 router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.state.loginModule.username) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});
*/

export default router;
