<template>
    <div>
        <h2>User Details</h2>
        <span
            >Name is :
            <p>
                <b>{{ user.name }}</b>
            </p>
        </span>
        <span
            >Username is :
            <p>
                <b>{{ user.username }}</b>
            </p>
        </span>
        <span
            >Email is :
            <p>
                <b>{{ user.email }}</b>
            </p>
        </span>
        <span
            >Address is :
            <p>
                <b>{{ user.address?.city }}</b>
            </p>
        </span>
        <div>
            <h1>posts belongs to the user</h1>
            <div v-for="post in userPosts" :key="post">
                <h2>{{ post.title }} ({{ post.id }})</h2>
                <p>
                    {{ post.body }}
                </p>
            </div>
        </div>
        <br />
        <br />
        <div>
            <h1>todos belongs to the user</h1>
            <button @click.prevent="filterCompleted">
                show completed todos
            </button>

            <h1>All todos</h1>
            <div v-for="todo in userTodos" :key="todo">
                <h4>{{ todo.title }}</h4>
            </div>

            <div v-show="showCompletedTodo">
                <h1>Completed todos</h1>
                <h4 v-for="todo in completedTodos" :key="todo">
                    {{ todo.title }}
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserDetails",
    data() {
        return {
            showCompletedTodo: false,
            completedTodos: [],
        };
    },
    mounted() {
        this.getUser();
        this.getUserPosts();
        this.getUserTodos();
    },
    computed: {
        user() {
            return store.getters.user;
        },
        userPosts() {
            return store.getters.userPosts;
        },
        userTodos() {
            return store.getters.userTodos;
        },
    },
    methods: {
        // api calls
        getUser() {
            store.dispatch("getUser", this.$route.params.userId);
        },
        getUserPosts() {
            store.dispatch("getUserPosts", this.$route.params.userId);
        },
        getUserTodos() {
            store.dispatch("getUserTodos", this.$route.params.userId);
        },

        // operations on data
        filterCompleted() {
            this.showCompletedTodo = true;
            this.userTodos.map((todo) => {
                if (todo.completed) {
                    this.userTodos;
                    this.completedTodos.push(todo);
                }
            });
            console.log(this.completedTodos);
        },
    },
};
</script>
