import Api from "../../api";

export default {
    getAlbums: () => Api().get("/albums"),

    getAlbum: (albumId) => Api().get("/albums/" + albumId),

    getAlbumPhotos: (albumId) => Api().get(`/albums/${albumId}/photos`),
};
