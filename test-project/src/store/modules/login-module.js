import loginService from "../../config/services/accounts/loginService";

const loginModule = {
    state: () => ({
        users: [],
        logins: {},
        authStatus: false,
        username: "",
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
            console.log(response.data);
            commit("updateAllUsers", response.data);
        },

        login({ state }, user) {
            const username = user.username;
            const password = user.password;
            state.users.forEach((item) => {
                if (item.username == username && item.username == password) {
                    state.authStatus = true;
                    state.username = username;
                    //localStorage.setItem("username", username);
                    return "success";
                } else {
                    return "error";
                }
            });
        },

        logout({ commit }) {
            commit("updateLogout");
            // console.log("hello");
            // localStorage.removeItem("username");
            // window.reload();
        },
    },
    getters: {
        authStatus: (state) => state.authStatus,
        username: (state) => state.username,
    },
};

export default loginModule;
