<template>
  <div class="home">
    <div class="avatar">
      <img :src="require('../assets/images/avatar.jpg')" alt="" />
    </div>
    <div class="introduction">
      <h1>Hello</h1>
      <div class="sub_title">A Bit About Me</div>
      <div class="article">
        1+ years for the frontend Developer. Familiar with Vue.js, CSS, HTML, Javascript, RWD, and Git.
      </div>
      <div class="btn_wrap">
        <template v-for="page in data.header" :key="page.name">
          <button @click="router.push(page.route)">{{ page.name }}</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '../staticData'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  font-size: 1.125em;
  line-height: 1.6em;
  .introduction {
    h1 {
      margin-block-start: 0.5em;
      margin-block-end: 4rem;
      font-size: 6em;
      font-weight: 800;
    }
    .article {
      margin-block-end: 1em;
      margin-inline-end: 1em;
      text-align: start;
      font-family: "Roboto";
    }
    .btn_wrap {
      display: flex;
      align-items: center;
      button {
        margin-right: 1.5em;
        cursor: pointer;
        border: none;
        min-width: 5em;
        min-height: 5em;
        color: colors(primary);
        border: 1px solid colors(primary);
        background-color: #fff;
        border-radius: 50%;
        &:hover {
          background-color: rgba(colors(forth), 0.6);
        }
      }
    }
  }
}
@media screen and (min-width: 601px) {
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      margin: 1em;
      max-width: 25em;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .introduction {
      .article {
        max-width: 30em;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .home {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    .avatar {
      margin-block-start: 1em;
      margin-block-end: 1em;
      max-width: 20em;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .introduction {
      padding: 0 1em;
      .article {
        width: 100%;
        min-width: 10em;
      }
      .btn_wrap {
        justify-content: center;
      }
    }
  }
}
</style>
