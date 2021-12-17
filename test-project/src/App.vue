<template>
    <Navbar />
    <router-view />
</template>

<script>
import Navbar from "./components/header/Navigation.vue";
export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>
