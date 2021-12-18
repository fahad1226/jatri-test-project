<template>
    <div>
        <h1>Edit User</h1>
        <form @submit.prevent="updateUser">
            <div>
                <label for="name">Name</label>
                <input v-model="user.name" type="text" />
                <br />
                <br />
            </div>
            <div>
                <label for="username">Username</label>
                <input v-model="user.username" type="text" />
                <br />
                <br />
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="user.email" type="email" />
                <br />
                <br />
            </div>
            <div>
                <h5>Address</h5>
                <p>
                    city: <b>{{ user.address?.city }}</b>
                </p>
                <p>
                    street: <b>{{ user.address?.street }}</b>
                </p>
                <p>
                    zipcode: <b>{{ user.address?.zipcode }}</b>
                </p>
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
    computed: {
        user() {
            return store.getters.user;
        },
    },
    methods: {
        getUser() {
            store.dispatch("getUser", this.$route.params.userId);
        },

        async updateUser() {
            const response = await userServices.updateUser(
                this.$route.params.userId,
                this.user
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
