<template>
    <div class="resume">
        <h1>Resume</h1>
        <div class="row">
            <h2>Skills</h2>
            <div>
                <ResumeCard :resume="data.resume.skill" />
            </div>
        </div>
        <div class="row">
            <h2>Work Experience</h2>
            <div>
                <template v-for="item in data.resume.experience" :key="item">
                    <ResumeCard :resume="item" />
                </template>
            </div>
        </div>
        <div class="row">
            <h2>Education</h2>
            <div>
                <template v-for="item in data.resume.education" :key="item">
                    <ResumeCard :resume="item" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from '../staticData'
import ResumeCard from '../components/ResumeCard.vue'
</script>

<style lang="scss" scoped>
.resume {
    margin-block-end: 5em;
    font-size: 1.125em;
    h1 {
        margin-block-start: 0.5em;
        margin-block-end: 4rem;
        font-size: 2em;
        font-weight: 800;
        color: colors(primary);
    }
    .row {
        padding-top: 3em;
        display: flex;
        &:not(:nth-child(2)) {
            border-top: 1px solid rgb(199, 199, 199);
        }
        h2 {
            margin-block-end: 1em;
            font-size: 1.8em;
        }
    }
}
@media screen and (min-width: 1025px) {
    .resume {
        margin-inline-start: 5em;
        margin-inline-end: 5em;
        .row {
            padding: 5em;
            justify-content: space-between;
        }
    }
}
@media screen and (max-width: 1024px) {
    .resume {
        margin-inline-start: 2em;
        margin-inline-end: 2em;
        .row {
            flex-direction: column;
        }
    }
}
</style>
