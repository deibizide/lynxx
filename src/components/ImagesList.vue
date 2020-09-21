<template>
    <div :class="['images__grid', isHomePage ? 'images__home' : 'images__favourite']">
        <div v-for="(image, index) in images" :key="image.name" :class="'box-' + index">
            <img
                class="images__grid__image"
                @click="showImageModal ? showImageModal(image.imageUrl, image.name) : {}"
                :src="image.imageUrl"
                :alt="image.name"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ['images', 'isHomePage', 'showImageModal'],
};
</script>

<style lang="scss" scoped>
.images__grid {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-gap: 15px;
    justify-content: center;

    &__image {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        height: 100%;
    }
}

/* Home */
.images__home {
    .box-0 {
        grid-column: span 2;
        grid-row: span 3;
        height: 100%;
    }

    .box-1 {
        grid-row: 1;
    }

    .box-2 {
        grid-row: span 1;
    }

    .box-4,
    .box-3 {
        height: 100%;
        grid-row: span 3;
    }

    .box-5,
    .box-6,
    .box-7,
    .box-8,
    .box-8,
    .box-9 {
        grid-column: span 2;
        height: 100%;
    }
}

/* FavouriteViews */
.images__favourite {
    grid-template-rows: repeat(3, 270px);

    .box-0,
    .box-1,
    .box-2 {
        grid-column: span 4;
        cursor: pointer;
    }
}

@media (max-width: 1088px) {
    .images__grid {
        grid-template-columns: repeat(4, 200px);
    }
}

@media (max-width: 900px) {
    .images__grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 20px;
        &__image {
            width: 500px;
            height: 450px;
        }
    }
}

@media (max-width: 609px) {
    .images__grid {
        margin: 0px 0px;

        &__image {
            width: 350px;
            height: 300px;
        }
    }
}
</style>
