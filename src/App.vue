<template>
  <div id="app">
    <h1>Yup</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../src/assets/style/defaults';
@import '../src/assets/style/reset';

#app {
  text-align: center;
}

h1 {
  font-family: $headlines ;
  color: $accent;
}
</style>
