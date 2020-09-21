<template>
    <div>
        <div class="modal__overlay" @click="handleModal"></div>

        <div class="modal__content">
            <button class="modal__close" @click="handleModal">X</button>
            <img class="modal__image" :src="imageUrl" :alt="imageName" />
            <h1 class="modal__title">{{ imageName }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'handleModal', 'imageName'],
};
</script>
<style lang="scss">
.modal {
    &__overlay {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.85);
    }

    &__image {
        width: 90%;
        height: auto;
        border-radius: 5px;
    }

    &__title {
        margin: 0px;
    }

    &__content {
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    &__close {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgb(255, 154, 0);
        border: none;
        font-size: 30px;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
}
</style>