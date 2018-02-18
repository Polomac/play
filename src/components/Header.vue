<template>
    <div class="header-wrapper">
        <v-toolbar dark color="primary" app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer
            clipped
            fixed
            v-model="drawer"
            app
            >
            <div class="drawer-header blue--text">
                <v-icon large class="blue--text">grain</v-icon>
                <span class="drawer-header-label">
                    PLAY
                </span>
            </div>
            <v-list>
                <span v-for="page in pages"
                             :key = "page.path">
                <v-list-tile :to="page.path">
                    <v-list-tile-action class="pa-2">
                        <v-icon>{{page.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{page.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                </span>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    name: 'my-header',
    data () {
        return {
            drawer: false,
        }
    },
    computed: {
        pages() {
            return this.$store.state.pages;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/defaults';

    .header-wrapper {
        color: $primary;

        .list {
            padding-top: 0;
        }
    }

    .drawer-header {
        padding: 1em 2em;
        text-align: left;
        font-size: 2em;
    }

    .drawer-header-label {
        font-family: $headlines;
        vertical-align:middle;
    }
</style>
