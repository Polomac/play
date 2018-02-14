<template>
    <div class="header-wrapper">
        <v-btn color="success" to="/about" append="true">About</v-btn>
        <v-btn color="success" to="/blog" append="true">Blog</v-btn>
        <v-btn color="success" to="/contact" append="true">Contact</v-btn>
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
        color: $primary;
    }
</style>
