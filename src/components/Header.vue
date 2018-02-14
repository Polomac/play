<template>
    <div class="header-wrapper">
        <p>This is a header</p>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>

<script>

export default {
    name: 'my-header',
    data () {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/defaults';

    .header-wrapper {
        display: block;
        color: $accent;
    }
</style>
