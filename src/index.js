import Vue from 'vue';
import DatePicker from './components/stats_filter/vue_date_picker.vue'



let app = new Vue({
    el: '#app',
    components: {
        'date-picker' : DatePicker
    }
});

