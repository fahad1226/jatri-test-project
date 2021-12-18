<template>
    <div>
        <h1>Album List</h1>

        <table>
            <tr>
                <th>ALbum ID</th>
                <th>
                    User ID
                    <input
                        v-model="filterInfo.userId"
                        type="text"
                        placeholder="filter by user ID"
                    />
                </th>
                <th>
                    Title
                    <input
                        v-model="filterInfo.title"
                        type="text"
                        placeholder="filter by name"
                    />
                </th>
                <th>Actions</th>
            </tr>
            <tr v-for="album in filteredAlbums" :key="album">
                <td>{{ album.id }}</td>
                <td>user {{ album.userId }}</td>
                <td>{{ album.title }}</td>

                <td>
                    <button
                        @click.prevent="
                            this.$router.push({
                                name: 'album-details',
                                params: { albumId: album.id },
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
import store from "../../store";

export default {
    name: "ALbumList",
    data() {
        return {
            filterInfo: {
                userId: "",
                title: "",
            },
            counter: 0,
            limit: 10,
        };
    },
    mounted() {
        this.getPosts();
    },
    computed: {
        albums() {
            return store.getters.albums;
        },
        paginatedAlbums() {
            const start = this.counter * this.limit;
            const end = start + this.limit;
            return this.albums.slice(start, end);
        },
        pagination() {
            const total_albums = this.albums.length;
            return Math.ceil(total_albums / this.limit);
        },
        filteredAlbums() {
            if (this.filterInfo.userId) {
                return this.albums.filter((user) => {
                    return user.userId
                        .toString()
                        .includes(this.filterInfo.userId);
                });
            } else if (this.filterInfo.title) {
                return this.albums.filter((user) => {
                    return user.title
                        .toLowerCase()
                        .includes(this.filterInfo.title.toLowerCase());
                });
            } else {
                return this.paginatedAlbums;
            }
        },
    },
    methods: {
        getPosts() {
            store.dispatch("getAlbums");
        },
        // async deletePost(postId) {
        //     if (confirm("Are you sure you want to delete")) {
        //         const response = await postService.deletePost(postId);
        //         if (response.status == 200) {
        //             this.posts.splice(postId - 1, 1);
        //             console.log("post deleted, show the toaster");
        //         } else {
        //             console.log("something went wrong, try again");
        //         }
        //     }
        // },
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
