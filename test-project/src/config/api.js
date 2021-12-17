import axios from "axios";

export default () =>
    axios.create({
        baseURL: `https://jsonplaceholder.typicode.com`,
        //baseURL: "http://localhost:8080/wp-json/api/v1",
    });
