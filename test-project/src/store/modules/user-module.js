import axios from "axios";
import userServices from "../../config/services/accounts/userService";

const userModule = {
    state: () => ({
        users: [],
        user: {},
        posts: [],
        todos: [],
    }),
    mutations: {
        updategetUsers(state, payload) {
            state.users = payload;
        },
        updategetUser(state, payload) {
            state.user = payload;
        },
        updateUserPosts(state, payload) {
            state.posts = payload;
        },
        updateUserTodos(state, payload) {
            state.todos = payload;
        },
    },
    actions: {
        async getUsers({ commit }) {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            commit("updategetUsers", response.data);
        },

        async getUser({ commit }, userId) {
            const response = await userServices.getUser(userId);
            commit("updategetUser", response.data);
        },

        async getUserPosts({ commit }, userId) {
            const response = await userServices.getUserPosts(userId);
            commit("updateUserPosts", response.data);
        },
        async getUserTodos({ commit }, userId) {
            const response = await userServices.getUserTodos(userId);
            console.log(response.data);
            commit("updateUserTodos", response.data);
        },
    },
    getters: {
        users: (state) => state.users,
        user: (state) => state.user,
        userPosts: (state) => state.posts,
        userTodos: (state) => state.todos,
    },
};

export default userModule;
