<template>
  <div>
    <date_picker
        v-model="time1"
        :clearable="clearable"
    ></date_picker>
  </div>
</template>

<script>
import VueDatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru'


export default {
  name: "vue_date_picker",
  components: {
    'date_picker': VueDatePicker
  },
  data() {
    return {
      time1: null,
      clearable: false,
    }
  }
}
</script>

<style scoped>
@import "~vue2-datepicker/index.css";
</style>