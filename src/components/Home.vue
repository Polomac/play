<template>
    <div>
        <div class="description blue--text text--darken-3">
            Home
        </div>
        <div class="description desc-content blue--text text--darken-3">
            <p>Intro & description placeholder</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data () {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/defaults';

    .description {
        font-family: $headlines;
        font-size: 3em;
        text-align: center;
        margin: 4em 0 0 0;
    }

    .desc-content {
        font-family: $regular;
        font-size: 1em;
        font-weight: bold;
    }
</style>