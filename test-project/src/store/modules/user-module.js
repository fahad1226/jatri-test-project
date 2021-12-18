import userService from "../../config/services/accounts/userService";

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
        async createUser(payload) {
            const response = await userService.createUser(payload);
            if (response.status === 201) {
                return "success";
            } else {
                return "error";
            }
        },
        async getUsers({ commit }) {
            const response = await userService.getUsers();
            commit("updategetUsers", response.data);
        },

        async getUser({ commit }, userId) {
            const response = await userService.getUser(userId);
            commit("updategetUser", response.data);
        },
        async updateUser({ commit }, payload, userId) {
            const response = await userService.updateUser(payload, userId);
            if (response.status === 200) {
                return "success";
            } else {
                return "error";
            }
        },

        async getUserPosts({ commit }, userId) {
            const response = await userService.getUserPosts(userId);
            commit("updateUserPosts", response.data);
        },
        async getUserTodos({ commit }, userId) {
            const response = await userService.getUserTodos(userId);
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
