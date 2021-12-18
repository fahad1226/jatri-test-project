<template>
    <div>
        <h1>Add User</h1>
        <form @submit.prevent="createUser">
            <div>
                <label for="name">Name</label>
                <input
                    v-model="userInfo.name"
                    required
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
                    required
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
                    required
                    type="email"
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
        async createUser() {
            const response = await store.dispatch("createUser", this.userInfo);
            if (response == "success") {
                alert("User created successfully");
            } else {
                alert("something went wrong, try again later");
            }
        },
    },
};
</script>
