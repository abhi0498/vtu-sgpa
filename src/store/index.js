import Vue from 'vue';
import Vuex from 'vuex';
import sgpa from './modules/sgpa';




Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        sgpa

    }
})