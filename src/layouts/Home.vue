<template>
    <div>
        <ImagesList :images="images" :isHomePage="true" />
    </div>
</template>

<script>
import ImagesList from '../components/ImagesList';
export default {
    props: ['images', 'isHomePage'],
    components: {
        ImagesList,
    },
};
</script>