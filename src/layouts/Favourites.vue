<template>
    <div>
        <ImageModal v-if="isOpen" :imageName="imageName" :imageUrl="imageUrl" :handleModal="handleModal" />
        <ImagesList :images="favouriteImages" :isHomePage="false" :showImageModal="showImageModal" />
    </div>
</template>

<script>
import ImagesList from './../components/ImagesList';
import ImageModal from './../components/ImageModal';

export default {
    props: ['images', 'isHomePage'],
    components: {
        ImagesList,
        ImageModal,
    },
    computed: {
        favouriteImages() {
            return this.images.filter(image => image.favourite === true);
        },
    },
    data() {
        return {
            isOpen: false,
            imageUrl: '',
            imageName: '',
        };
    },
    methods: {
        showImageModal(img, name) {
            this.imageUrl = img;
            this.imageName = name;

            this.handleModal();
        },
        handleModal() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>