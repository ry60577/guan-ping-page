<template>
    <div class="wrapper">
        <Header />
        <main>
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header'
import Footer from '../components/Footer'
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    main {
        margin-block-start: 5em;
        display: block;
        flex-grow: 1;
    }
}
</style>
