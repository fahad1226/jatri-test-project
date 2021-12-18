<template>
    <div>
        
        <h1>All users</h1>
        <table>
            <tr>
                <th>User ID</th>
                <th>
                    Name
                    <input
                        v-model="filterInfo.name"
                        type="text"
                        placeholder="filter by name"
                    />
                </th>
                <th>
                    Username
                    <input
                        v-model="filterInfo.username"
                        type="text"
                        placeholder="filter by username"
                    />
                </th>
                <th>
                    Email
                    <input
                        v-model="filterInfo.email"
                        type="text"
                        placeholder="filter by email"
                    />
                </th>
                <th>Adress</th>
                <th>Actions</th>
            </tr>
            <tr v-for="user in filterByName" :key="user">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.address.city }}</td>
                <td
                    @click.prevent="
                        this.$router.push({
                            name: 'edit-user',
                            params: { userId: user.id },
                        })
                    "
                >
                    <button>Edit</button>
                </td>
                <td @click.prevent="deleteUser(user.id)">
                    <button>Delete</button>
                </td>
                <td
                    @click="
                        this.$router.push({
                            name: 'user-details',
                            params: { userId: user.id },
                        })
                    "
                >
                    <button>Details</button>
                </td>
            </tr>
        </table>
        <div class="pagination">
            <a>&laquo;</a>
            <a class="cursor-pointer" @click.prevent="counter = 0">1</a>
            <a class="cursor-pointer" @click.prevent="counter = 1">2</a>
            <a>&raquo;</a>
        </div>
    </div>
</template>

<script>
import userServices from "../../config/services/accounts/userService";
export default {
    name: "User",

    data() {
        return {
            filterInfo: {
                name: "",
                username: "",
                email: "",
            },
            counter: 0,
            limit: 5,
        };
    },
    mounted() {
        this.getUsers();
    },
    computed: {
        users() {
            return store.getters.users;
        },
        paginatedUsers() {
            const start = this.counter * this.limit;
            const end = start + this.limit;
            return this.users.slice(start, end);
        },
        filterByName() {
            if (this.filterInfo.name) {
                return this.users.filter((user) => {
                    return user.name
                        .toLowerCase()
                        .includes(this.filterInfo.name.toLowerCase());
                });
            } else if (this.filterInfo.username) {
                return this.users.filter((user) => {
                    return user.username
                        .toLowerCase()
                        .includes(this.filterInfo.username.toLowerCase());
                });
            } else if (this.filterInfo.email) {
                return this.users.filter((user) => {
                    return user.email
                        .toLowerCase()
                        .includes(this.filterInfo.email.toLowerCase());
                });
            } else {
                return this.paginatedUsers;
            }
        },
    },
    methods: {
        getUsers() {
            store.dispatch("getUsers");
        },
        async deleteUser(userId) {
            if (confirm("Are you sure you want to delete")) {
                const response = await userServices.deleteUser(userId);
                if (response.status == 200) {
                    this.users.splice(userId - 1, 1);
                    console.log("user deleted, show the toaster");
                } else {
                    console.log("something went wrong, try again");
                }
            }
        },
    },
};
</script>

<style>
.pagination {
    display: inline-block;
}

.cursor-pointer {
    cursor: pointer;
}

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}
</style>
