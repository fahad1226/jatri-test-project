import Api from "../../api";

export default {
    getPosts: () => Api().get("/posts"),

    createPost: (payload) => Api().post("/posts", payload),

    getPost: (postId) => Api().get(`/posts/${postId}`),

    updatePost: (postId, payload) => Api().put(`/posts/${postId}`, payload),

    deletePost: (postId) => Api().delete(`/posts/${postId}`),

    getComments: (postId) => Api().get(`posts/${postId}/comments`),
};
