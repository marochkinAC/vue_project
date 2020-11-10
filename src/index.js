import Vue from 'vue';
import date_picker_modal from "./components/date_picker_modal.vue";



let app = new Vue({
    el: '#app',
    components: {
        'date-picker-modal' : date_picker_modal
    }
});

