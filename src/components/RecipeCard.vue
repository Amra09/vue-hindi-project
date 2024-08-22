<template>
    <route-link :to="{name:'RecipeDetail',params:{id:detail.idMeal}}">
        <div class="card">
            <img :src="detail.strMealThumb" class="thumbnail" alt="">
            <div>{{detail.strMeal }}</div>
        </div>
    </route-link>

</template>
<script setup>
    const props = defineProps({
        detail: {}
    })
</script>

<style scoped>
    .card{
        max-height: 320px;
        min-height: 270px;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
    }
    .thumbnail{
        width: 100%;
        object-fit: cover;
        height: 220px;
    }

</style>