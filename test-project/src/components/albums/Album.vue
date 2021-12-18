<template>
    <div class="row">
        <h1>Album details</h1>

        <div
            class="column"
            v-for="photo in photos"
            :key="photo"
            style="width: 20%"
        >
            <img :src="photo.url" alt="Avatar" style="width: 50%" />
            <br />
            <div class="container">
                <h4>
                    <b>{{ album.title }} ergerg</b>
                </h4>
                <p>album by user {{ album.userId }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlbumDetails",
    data() {
        return {};
    },
    mounted() {
        this.getAlbum();
        this.getAlbumPhotos();
    },
    computed: {
        album() {
            return store.getters.album;
        },
        photos() {
            return store.getters.photos;
        },
    },
    methods: {
        getAlbum() {
            store.dispatch("getAlbum", this.$route.params.albumId);
        },

        getAlbumPhotos() {
            store.dispatch("getAlbumPhotos", this.$route.params.albumId);
        },
    },
};
</script>

<style>
.column {
    float: left;
    width: 25%;
    padding: 10px;
}

.card {
    transition: 0.3s;
    width: 40%;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}
</style>
