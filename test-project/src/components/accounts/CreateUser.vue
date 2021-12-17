<template>
    <div>
        <h1>Add User</h1>
        <form @submit.prevent="create">
            <div>
                <label for="name">Name</label>
                <input
                    v-model="userInfo.name"
                    type="text"
                    placeholder="Enter name"
                />
                <br />
                <br />
            </div>
            <div>
                <label for="username">Username</label>
                <input
                    v-model="userInfo.username"
                    type="text"
                    placeholder="Enter username"
                />
                <br />
                <br />
            </div>
            <div>
                <label for="email">Email</label>
                <input
                    v-model="userInfo.email"
                    type="text"
                    placeholder="Enter email"
                />
                <br />
                <br />
            </div>
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CreateUser",
    data() {
        return {
            userInfo: {
                name: "",
                username: "",
                email: "",
            },
        };
    },
    methods: {
        async create() {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                this.userInfo
            );
            console.log(response.data);
            console.log(response.status);
        },
    },
};
</script>
