<template>
    <div>
        <nav>
            <router-link
                v-show="!this.$store.state.loginModule.username"
                to="/login"
                >Login</router-link
            >
            | <router-link to="/">Home</router-link> |
            <router-link to="/user-list">User List</router-link> |
            <router-link to="/posts">Posts List</router-link> |
            <router-link to="/albums">Album List</router-link> |
            <a
                v-show="this.$store.state.loginModule.username"
                @click.prevent="logout"
                >Logout</a
            >
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    computed: {},
    methods: {
        logout() {
            store.dispatch("logout");
            this.$router.push("/login");
        },
    },
};
</script>
