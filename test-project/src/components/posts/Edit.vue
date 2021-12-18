<template>
    <div>
        <h1>Edit Post</h1>
        <form @submit.prevent="update">
            <div>
                <input v-model="post.title" type="text" />
                <br />
                <br />
            </div>
            <div>
                <textarea
                    v-model="post.body"
                    cols="30"
                    rows="10"
                    placeholder="Type your post description"
                ></textarea>
                <br />
                <br />
            </div>

            <button type="submit">Update</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "UpdatePost",
    data() {
        return {};
    },
    mounted() {
        this.getPost();
    },
    computed: {
        post() {
            return store.getters.post;
        },
    },
    methods: {
        getPost() {
            store.dispatch("getPost", this.$route.params.postId);
        },
        async update() {
            const response = await store.dispatch(
                "updatePost",
                this.$route.params.postId,
                this.post
            );
            if (response == "success") {
                alert("post updated successfully");
            }
        },
    },
};
</script>
