import Api from "../../api";

export default {
    createUser(payload) {
        return Api().post("/users", payload);
    },
    getUsers() {
        return Api().get("/users");
    },
    getUser(userId) {
        return Api().get(`/users/${userId}`);
    },
    updateUser(userId, payload) {
        return Api().put(`/users/${userId}`, payload);
    },
    deleteUser(userId) {
        return Api().delete(`/users/${userId}`);
    },
    getUserPosts(userId) {
        return Api().get(`/users/${userId}/posts`);
    },
    getUserTodos(userId) {
        return Api().get(`/users/${userId}/todos`);
    },
};
