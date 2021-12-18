import loginService from "../../config/services/accounts/loginService";

const loginModule = {
    state: () => ({
        users: [],
        logins: {},
        authStatus: false,
        username: "",
        currentUser: "",
    }),
    mutations: {
        updateAllUsers(state, payload) {
            state.users = payload;
        },
        updateLogout(state) {
            state.authStatus = false;
            state.username = null;
        },
    },
    actions: {
        async getAllUsers({ commit }) {
            const response = await loginService.getUsers();
            commit("updateAllUsers", response.data);
        },

        login({ state }, user) {
            const username = user.username;
            const password = user.password;
            state.users.forEach((item) => {
                if (item.username == username && item.username == password) {
                    state.authStatus = true;
                    state.username = username;
                    state.currentUser = item.id;
                    //localStorage.setItem("username", username);
                    return "success";
                } else {
                    return "error";
                }
            });
        },

        logout({ commit }) {
            commit("updateLogout");
        },
    },
    getters: {
        authStatus: (state) => state.authStatus,
        username: (state) => state.username,
    },
};

export default loginModule;
