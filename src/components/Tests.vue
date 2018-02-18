<template>
    <div class="tests-wrapper">
        <div class="page-description blue--text text--darken-3">
            Tests List
        </div>
        <div class="page-desc-content blue--text text--darken-3">
            <p>Test description & link placeholder</p>
        </div>

        <v-container fluid grid-list-md
                     class="card-container"
                     v-for="test in testList" :key="test.title">
            <v-card class="blue-grey lighten-4">
                <v-card-title><h4>{{ test.title }}</h4></v-card-title>
                <v-divider></v-divider>
                <v-list dense class="blue-grey lighten-5">
                    <v-list-tile>
                        <v-list-tile-content>{{ test.body }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>
                            <router-link :to="test.url">See more</router-link>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import Api from '../api';

export default {
    name: 'tests',
    data () {
        return {
            testList: [],
        }
    },
    beforeMount() {
        Api.getTestList().then((data) => {
            this.testList = data;
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/defaults';

    .tests-wrapper {
        padding: 0 1em;

        @include mqMin(960px) {
            padding: 2em 10em;
        }
    }
    .page-description {
        text-align: left;
        font-size: 2em;
        margin-top: 1em;
    }

    .page-desc-content {
        text-align: left;
        margin-bottom: 2em;
    }

    .card-container {
        padding: 0;
        margin-bottom: 2em;
    }
</style>