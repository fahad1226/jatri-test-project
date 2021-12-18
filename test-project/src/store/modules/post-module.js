import postService from "../../config/services/posts/postService";

const postModule = {
    state: () => ({
        posts: [],
        post: {},
        comments: [],
    }),
    mutations: {
        updateGetPosts(state, payload) {
            state.posts = payload;
        },
        updateGetPost(state, payload) {
            state.post = payload;
        },

        updateComments(state, payload) {
            state.comments = payload;
        },
    },
    actions: {
        async getPosts({ commit }) {
            const response = await postService.getPosts();
            commit("updateGetPosts", response.data);
        },
        async createPost({ commit }, payload) {
            const response = await postService.createPost(payload);
            if (response.status == 201) {
                return "success";
            }
            return "error";
        },

        async getPost({ commit }, postId) {
            const response = await postService.getPost(postId);
            commit("updateGetPost", response.data);
        },

        async updatePost({ commit }, postId, payload) {
            const response = await postService.updatePost(postId, payload);
            if (response.status == 200) {
                return "success";
            }
            return "error";
        },

        async getComments({ commit }, postId) {
            const response = await postService.getComments(postId);
            commit("updateComments", response.data);
        },
    },
    getters: {
        posts: (state) => state.posts,
        post: (state) => state.post,
        comments: (state) => state.comments,
    },
};

export default postModule;
