<template>
    <div class="project">
        <h1>Project</h1>
        <div v-for="item in data.project" :key="item">
            <ProjectCard :project="item" />
        </div>
    </div>
</template>

<script setup>
import data from '../staticData'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<style lang="scss" scoped>
.project {
    margin-inline-start: 5em;
    margin-inline-end: 5em;
    h1 {
        margin-block-start: 0.5em;
        margin-block-end: 4rem;
        font-size: 2em;
        font-weight: 800;
        color: map-get($colors, primary);
    }
}
@media screen and (max-width: 600px) {
    .project {
        margin-inline-start: 1.5em;
        margin-inline-end: 1.5em;
    }
}
</style>
