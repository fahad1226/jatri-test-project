const postModule = {
    state: () => ({
        posts: [],
    }),
    mutations: {
        // updategetUsers(state, payload) {
        //     state.users = payload;
        //     console.log(payload);
        // },
    },
    actions: {
        // async getUsers({ commit }) {
        //     const response = await axios.get(
        //         "https://jsonplaceholder.typicode.com/users"
        //     );
        //     commit("updategetUsers", response.data);
        // },
    },
    getters: {
        posts: (state) => state.posts,
    },
};

export default postModule;
