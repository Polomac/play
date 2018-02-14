<template>
  <div id="app">
    <v-app>
      <v-content class="blue">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import MyHeader from '../src/components/Header';
import MyFooter from '../src/components/Footer';

export default {
  name: 'app',
  components: {
    'my-header': MyHeader,
    'my-footer': MyFooter,
  },
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
