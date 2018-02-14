<template>
    <div class="header-wrapper">
        <p>This is a footer</p>
    </div>
</template>

<script>

export default {
    name: 'my-footer',
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