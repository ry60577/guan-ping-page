<template>
  <div class="project_card">
    <div class="project_content">
      <h2>
        <a  v-if="project.link" target="_blank" :href="`${project.link}`">
          {{ project.name }}
        </a>
        <span v-else>{{ project.name }}</span>
      </h2>
      <div class="environment">
        <span v-for="item in project.environment" :key="item"> #{{ item }}</span>
      </div>
      <div class="row">{{ project.desc }}</div>
      <div class="row">
        <span class="desc_title">In charge:</span>
        {{ project.charge }}
      </div>
      <div class="row">
        <div class="desc_title">Feature:</div>
        <ul>
          <li v-for="item in project.feature" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <img :src="cover" alt="" @click="handleShowImage" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import 'viewerjs/dist/viewer.css'
import { api as viewerApi } from 'v-viewer'
const prop = defineProps({
  project: Object
})
const cover = prop.project.image.at(0)
const handleShowImage = () => {
  const images = prop.project.image
  viewerApi({
    option: {
      inline: false,
      button: true,
      navbar: false,
      title: false,
      toolbar: true,
      tooltip: false,
      movable: true,
      zoomable: true,
      rotatable: false,
      scalable: false,
      transition: true,
      fullscreen: true,
      keyboard: false,
      zIndex: 500,
      initialViewIndex: 1
    },
    images: images.slice(1)
  })
}
</script>

<style lang="scss" scoped>
.project_card {
  display: flex;
  font-size: 1.125em;
  h2 {
    margin-block-end: 1em;
    font-size: 1.3em;
    font-weight: bold;
  }
  .row {
    margin-block-end: 0.5em;
    line-height: 1.4em;
    .desc_title {
        color: colors(secondary);
    }
    li {
      list-style: inside;
    }
  }
  .environment {
    margin-block-end: 0.5em;
    line-height: 1.4em;
    display: flex;
    flex-wrap: wrap;
    span {
      margin-inline-end: 1em;
      margin-bottom: 1em;
      padding: 0.3em;
      font-size: 0.8em;
      background-color: rgba(lightgray, 0.7);
      border-radius: 0.5em;
      white-space: nowrap;
    }
  }
  img {
    cursor: pointer;
  }
}
@media screen and (min-width: 1025px) {
  .project_card {
    margin-block-end: 10em;
    height: 15em;
    justify-content: center;
    column-gap: 5em;
    .project_content {
      width: 40em;
    }
    img {
      margin: 0 1em;
      width: 20em;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0.5em;
      text-indent: 3em;
    }
  }
}
@media screen and (max-width: 1024px) {
  .project_card {
    margin-block-end: 2em;
    flex-wrap: wrap;
    img {
      width: 100%;
    }
  }
}
</style>
