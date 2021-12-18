<template>
    <div>
        <h1>post details</h1>

        <h3>{{ post.title }}</h3>
        <p>
            {{ post.body }}
        </p>
        <br />
        <br />
        <h1>all comments for this post</h1>
        <div>
            <ul>
                <li v-for="comment in comments" :key="comment">
                    <p>
                        cooment by
                        <b>{{ comment.body }} </b> from ({{ comment.email }})
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostDetails",
    data() {
        return {};
    },
    mounted() {
        this.getPost();
        this.getComments();
    },
    computed: {
        post() {
            return store.getters.post;
        },
        comments() {
            return store.getters.comments;
        },
    },
    methods: {
        getPost() {
            store.dispatch("getPost", this.$route.params.postId);
        },
        getComments() {
            store.dispatch("getComments", this.$route.params.postId);
        },
    },
};
</script>
