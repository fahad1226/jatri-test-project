<template>
    <div>
        <h1>Add Post</h1>
        <form @submit.prevent="create">
            <div>
                <input
                    v-model="postInfo.title"
                    type="text"
                    required
                    placeholder="Type your post title"
                />
                <br />
                <br />
            </div>
            <div>
                <textarea
                    v-model="postInfo.description"
                    cols="30"
                    rows="10"
                    required
                    placeholder="Type your post description"
                ></textarea>
                <br />
                <br />
            </div>

            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CreatePost",
    data() {
        return {
            postInfo: {
                title: "",
                description: "",
            },
        };
    },
    methods: {
        async create() {
            const response = await store.dispatch("createPost", this.postInfo);
            if (response == "success") {
                alert("post added successfully");
            } else {
                alert("something went wrong, try again");
            }
        },
    },
};
</script>
