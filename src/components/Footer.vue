<template>
    <v-footer class="pa-3" app="true">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
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

</style>