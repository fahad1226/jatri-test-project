import { createStore } from "vuex";
import albumModule from "./modules/album-module";
import loginModule from "./modules/login-module";
import postModule from "./modules/post-module";
import userModule from "./modules/user-module";

export default createStore({
    modules: {
        userModule,
        postModule,
        albumModule,
        loginModule,
    },
});
