<template>
  <header>
    <div class="logo" @click="router.push('/')">
      <img src="../assets/logo.png" alt="" />
      <span>Guan Ping Chen</span>
    </div>
    <div class="menu_container">
      <nav>
        <router-link to="/" @click="handleMenuWidth">
          <i class="fa fa-home"></i>
          Home
        </router-link>
        <router-link
          v-for="page in data.header"
          :key="page.name"
          :to="page.route"
          @click="handleMenuWidth"
          >
            <i :class="`${page.icon}`"></i>
             {{ page.name }}</router-link
        >
      </nav>
    </div>
    <div
      :class="['menu_icon', { change: menuActivate }]"
      @click="menuActivate = !menuActivate"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import data from '../staticData'
const menuActivate = ref(false)
const menuWidth = ref('0%')
const router = useRouter()
const route = useRoute()
watch(
  () => menuActivate.value,
  (bool) => {
    menuWidth.value = '0%'
    if (bool) {
      menuWidth.value = '100%'
    }
  }
)
watch(
  () => route.name,
  () => {
    menuActivate.value = false
  }
)
const handleMenuWidth = () => {
  menuActivate.value = false
  menuWidth.value = '0%'
}
</script>

<style lang="scss" scoped>
header {
  padding: 1em 0.5em;
  position: fixed;
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  font-size: 1.4em;
  color: colors(primary);
  background-color: #fff;
  box-sizing: border-box;
  z-index: 100;
  .logo {
    display: flex;
    align-items: center;
    column-gap: 0.8em;
    height: inherit;
    width: 100%;
    img {
      width: 100%;
      max-width: 2.5em;
      height: 100%;
    }
    span {
      font-family: "Roboto";
      font-weight: bold;
    }
  }
  .menu_container {
    nav {
      min-width: 16em;
    }
    a {
      text-decoration: none;
    }
  }
  .menu_icon {
    padding: 0 0.5em;
    cursor: pointer;
    .bar1,
    .bar2,
    .bar3 {
      width: 1.5em;
      height: 0.2em;
      margin: 6px 0;
      transition: 0.4s;
      background-color: colors(primary);
    }
    &.change {
      .bar1 {
        transform: translate(0, 0.5em) rotate(-45deg);
        background-color: white;
      }
      .bar2 {
        opacity: 0;
      }
      .bar3 {
        transform: translate(0, -0.4em) rotate(45deg);
        background-color: white;
      }
    }
  }
}
@media screen and (min-width: 601px) {
  header {
    .logo {
      span {
        white-space: nowrap;
      }
    }
    .menu_container {
      margin: 0 2%;
      span {
        display: none;
      }
      a {
        padding: 0 1rem;
        font-size: 0.8em;
        // color: colors(primary);
        color: colors(secondary);
        font-family: "Roboto";
        &:hover {
          // color: colors(secondary);
          color: colors(forth);
        }
        &:nth-child(1),
        &:nth-child(2) {
          border-right: 1px solid colors(primary);
        }
      }
      .router-link-active {
        // color: darkcyan;
        color: colors(primary);
        font-weight: 700;
      }
    }
    .menu_icon {
      display: none;
    }
  }
}
@media screen and (max-width: 600px) {
  .menu_icon {
    display: inline-block;
    z-index: 1;
  }
  .menu_container {
    width: v-bind(menuWidth);
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: colors(third);
    overflow-x: hidden;
    transition: 0.5s;
    nav {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 1rem;
    }
    a {
      color: white;
      &:hover {
        font-size: 1.5rem;
      }
    }
  }
}
@media screen and (max-width: 280px) {
  header {
    .logo {
      span {
        white-space: wrap;
      }
    }
  }
}
</style>
