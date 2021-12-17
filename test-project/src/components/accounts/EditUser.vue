<template>
    <div>
        <h1>Edit User</h1>
        <form @submit.prevent="updateUser">
            <div>
                <label for="name">Name</label>
                <input v-model="userInfo.name" type="text" />
                <br />
                <br />
            </div>
            <div>
                <label for="username">Username</label>
                <input v-model="userInfo.username" type="text" />
                <br />
                <br />
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="userInfo.email" type="email" />
                <br />
                <br />
            </div>
            <button type="submit">Update</button>
        </form>
    </div>
</template>

<script>
import userServices from "../../config/services/accounts/userService";

export default {
    name: "EditUser",
    data() {
        return {
            userInfo: {
                name: "",
                username: "",
                email: "",
            },
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        async getUser() {
            const response = await userServices.getUser(
                this.$route.params.userId
            );
            if (response.status == 200) {
                this.userInfo.name = response.data.name;
                this.userInfo.username = response.data.username;
                this.userInfo.email = response.data.email;
            } else {
                console.log("something went wrong fetching data");
            }
        },

        async updateUser() {
            const response = await userServices.updateUser(
                this.$route.params.userId,
                this.userInfo
            );
            if (response.status == 200) {
                console.log("user updated, show the toaster");
            } else {
                console.log("something went wrong updating data");
            }
        },
    },
};
</script>
