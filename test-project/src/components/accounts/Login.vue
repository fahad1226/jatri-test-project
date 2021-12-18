<template>
    <div>
        <h2>login now</h2>
        <br />
        <br />
        <form @submit.prevent="login">
            <input
                v-model="user.username"
                type="text"
                required
                placeholder="Type your username"
            />
            <br />
            <br />
            <input
                v-model="user.password"
                type="password"
                required
                placeholder="Password"
            />
            <br />
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Login",
    data() {
        return {
            user: {
                username: "Bret",
                password: "Bret",
            },
        };
    },
    mounted() {
        this.getAllUsers();
    },
    methods: {
        async getAllUsers() {
            await store.dispatch("getAllUsers");
        },
        login() {
            store.dispatch("login", this.user);
            router.push("/posts");
        },
    },
};
</script>
