import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                accent: colors.deepPurple,
                accentBg: colors.deepPurple,
            },
            dark: {
                accent: colors.lightGreen,
                accentBg: colors.lightGreen.darken3,
            },
        },
    },
});
