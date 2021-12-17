import { createRouter, createWebHistory } from "vue-router";
import CreateUser from "../components/accounts/CreateUser.vue";
import EditUser from "../components/accounts/EditUser.vue";
import UserDetails from "../components/accounts/UserDetails.vue";
import UserList from "../components/accounts/UserList.vue";
import Home from "../components/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user-list",
        name: "user-list",
        component: UserList,
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
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
