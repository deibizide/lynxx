<template>
    <div id="app">
        <NavBar />
        <span v-if="errorMsg">{{ errorMsg }}</span>
        <router-view :images="images" />
    </div>
</template>

<script>
import axios from 'axios';
import NavBar from './components/NavBar';

export default {
    name: 'App',
    components: {
        NavBar,
    },
    data() {
        return {
            apiUrl: 'https://portal-tb.lynxx.co/api-test/image',

            images: [],
            errorMsg: '',
        };
    },
    methods: {
        getImageList() {
            axios
                .get(`${this.apiUrl}/list`)
                .then(res => {
                    this.addImageSrc(res.data);
                })
                .catch(() => {
                    this.errorMsg = 'There has been an error with your request, please try again';
                });
        },

        addImageSrc(data) {
            this.images = data.map(imageObject => {
                imageObject.imageUrl = `${this.apiUrl}/${imageObject.name}`;
                return imageObject;
            });
        },
    },
    mounted() {
        this.getImageList();
    },
};
</script>

<style lang="scss">
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0 0 50px;
}
</style>
