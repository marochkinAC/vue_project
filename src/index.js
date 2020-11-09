import Vue from 'vue';
import BtnCounter from './components/btn-counter.vue';
import DatePicker from './components/stats_filter/date_picker.vue';



new Vue({
    el: '#app',
    components: {
        'btn-counter' : BtnCounter,
        'date-picker' : DatePicker
    }
});


