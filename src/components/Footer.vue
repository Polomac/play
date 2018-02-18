<template>
    <v-footer app fixed>
        <v-spacer></v-spacer>
        <div class="footer-label blue-grey--text text--lighten-3">Footer</div>
  </v-footer>
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

    .footer-label {
        padding: 0 1em;
        font-size: 0.875em;
        font-weight: bold;
        text-shadow: 0px -1px 1px $primary;
    }

</style>