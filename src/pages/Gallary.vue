<template>

    <div class="header">
        <div class="title">Recipe</div>
        <div class="input-wrapper">
            <input type="text">
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
    </div>
    <div class="list">
        <RecipeCard v-for="recipe in Recipe" :detail="recipe"></RecipeCard>
    </div>

</template>
<script setup>
    import RecipeCard from '@/components/RecipeCard.vue';
    import http from "@/httpCommon.js" 
    import {ref,onMounted} from "vue";

    const Recipe = ref([]);
    onMounted(()=>{
        http.get('/filter.php?a=Canadian').then(res=>{
            console.log("respone ....",res);

            Recipe.value = res.data.meals;
        })
    })
</script>

<style scoped>

.header{
    padding: 10px;

    display: flex;
}
.title{
    flex: 1;
}
.input-wrapper{
    border: 2px solid grey;
    border-radius: 5px;

}
.input-wrapper input{
    outline: none;
    border: none;
}
.list{
    min-height: 95vh;
    background: #74ebd5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 50px;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

}

</style>