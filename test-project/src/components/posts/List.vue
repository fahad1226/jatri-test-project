<template>
    <div>
        <h1>Post List</h1>
        <button @click="this.$router.push('/create/post')">Add New Post</button>
        <table>
            <tr>
                <th>Post ID</th>
                <th>
                    Title
                    <input
                        v-model="filterInfo.title"
                        type="text"
                        placeholder="filter by name"
                    />
                </th>
                <th>
                    Description
                    <input
                        v-model="filterInfo.description"
                        type="text"
                        placeholder="filter by username"
                    />
                </th>
                <th>Actions</th>
            </tr>
            <tr v-for="post in filteredPosts" :key="post">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
                <td>{{ post.completed }}</td>
                <td>
                    <button
                        @click.prevent="
                            this.$router.push({
                                name: 'edit-post',
                                params: { postId: post.id },
                            })
                        "
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button @click="deletePost(post.id)">Delete</button>
                </td>
                <td>
                    <button
                        @click.prevent="
                            this.$router.push({
                                name: 'post-details',
                                params: { postId: post.id },
                            })
                        "
                    >
                        Details
                    </button>
                </td>
            </tr>
        </table>

        <div class="pagination">
            <a>&laquo;</a>

            <a
                v-for="page in pagination"
                :key="page"
                @click.prevent="counter = page - 1"
                class="cursor-pointer"
            >
                {{ page }}</a
            >

            <a>&raquo;</a>
        </div>
    </div>
</template>

<script>
import postService from "../../config/services/posts/postService";

export default {
    name: "PostList",
    data() {
        return {
            filterInfo: {
                title: "",
                description: "",
            },
            counter: 0,
            limit: 10,
        };
    },
    mounted() {
        this.getPosts();
    },
    computed: {
        posts() {
            return store.getters.posts;
        },
        paginatedPosts() {
            const start = this.counter * this.limit;
            const end = start + this.limit;
            return this.posts.slice(start, end);
        },
        pagination() {
            const total_posts = this.posts.length;
            return Math.ceil(total_posts / this.limit);
        },
        filteredPosts() {
            if (this.filterInfo.title) {
                return this.posts.filter((user) => {
                    return user.title
                        .toLowerCase()
                        .includes(this.filterInfo.title.toLowerCase());
                });
            } else if (this.filterInfo.description) {
                return this.posts.filter((user) => {
                    return user.body
                        .toLowerCase()
                        .includes(this.filterInfo.description.toLowerCase());
                });
            } else {
                return this.paginatedPosts;
            }
        },
    },
    methods: {
        getPosts() {
            store.dispatch("getPosts");
        },
        async deletePost(postId) {
            if (confirm("Are you sure you want to delete")) {
                const response = await postService.deletePost(postId);
                if (response.status == 200) {
                    this.posts.splice(postId - 1, 1);
                    console.log("post deleted, show the toaster");
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
