import albumService from "../../config/services/albums/albumService";

const albumModule = {
    state: () => ({
        albums: [],
        album: {},
        photos: [],
    }),
    mutations: {
        updateGetAlbums(state, payload) {
            state.albums = payload;
        },

        updateGetAlbum(state, payload) {
            state.album = payload;
        },

        updateAlbumPhotos(state, payload) {
            state.photos = payload;
        },
    },
    actions: {
        async getAlbums({ commit }) {
            if (this.state.loginModule.username) {
                const response = await albumService.getUserAlbums(
                    this.state.loginModule.currentUser
                );
                commit("updateGetAlbums", response.data);
            } else {
                const response = await albumService.getAlbums();
                commit("updateGetAlbums", response.data);
            }
        },
        async getAlbum({ commit }, albumId) {
            const response = await albumService.getAlbum(albumId);
            commit("updateGetAlbum", response.data);
        },

        async getAlbumPhotos({ commit }, albumId) {
            const response = await albumService.getAlbumPhotos(albumId);

            commit("updateAlbumPhotos", response.data);
        },
    },
    getters: {
        albums: (state) => state.albums,
        album: (state) => state.album,
        photos: (state) => state.photos,
    },
};

export default albumModule;
