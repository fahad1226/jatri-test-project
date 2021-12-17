const albumModule = {
    state: () => ({
        albums: [],
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
        albums: (state) => state.albums,
    },
};

export default albumModule;
