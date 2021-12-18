import Api from "../../api";

export default {
    createUser: (payload) => Api().post("/users", payload),

    getUsers: () => Api().get("/users"),

    getUser: (userId) => Api().get(`/users/${userId}`),

    updateUser: (userId, payload) => Api().put(`/users/${userId}`, payload),

    deleteUser: (userId) => Api().delete(`/users/${userId}`),

    getUserPosts: (userId) => Api().get(`/users/${userId}/posts`),

    getUserTodos(userId) {
        return Api().get(`/users/${userId}/todos`);
    },
};
