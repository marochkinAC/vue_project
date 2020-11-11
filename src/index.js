import Vue from 'vue';
import filter from "./components/stats_filter/stats_filter.vue";
import './style/default.css'


let app = new Vue({
    el: '#app',
    components: {
        'stats_filter' : filter
    },
    data() {
        return {};
    },
});

