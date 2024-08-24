<template>
    <div class="resume_card">
        <div class="work_time" v-if="resume.workTime">{{ resume.workTime }}</div>
        <div class="resume_content">
            <div class="resume_title">{{ !resume.title ? '' : resume.title }}</div>
            <div class="resume_company">{{ !resume.establishmentName ? '' : resume.establishmentName }}</div>
            <ul v-if="resume.duty">
                <li v-for="item in resume.duty" :key="item">{{ item }}</li>
            </ul>
            <ul v-else-if="resume.length > 0">
                <li v-for="item in resume" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  resume: Object
})
</script>

<style lang="scss" scoped>
.resume_card {
    margin-block-end: 2em;
    width: 100%;
    line-height: 1.6em;
    font-size: 1em;
    .resume_content {
        .resume_title {
            font-weight: bold;
        }
        .resume_company {
            font-size: 0.8em;
            font-style: italic;
            color: darkgray;
        }
        ul {
            li {
                list-style: inside;
            }
        }
    }
}
@media screen and (min-width: 1025px) {
    .resume_card {
        display: grid;
        grid-auto-columns: minmax(0, 1fr);
        grid-auto-flow: column;
        column-gap: 2em;
        .resume_content {
            width: 40em;
        }
    }
}
@media screen and (max-width: 1024px) {
    .resume_card {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        .resume_content {
            .resume_title {
                margin-block-start: 0.5em;
                margin-block-end: 0.5em;
            }
        }
    }
}
</style>
