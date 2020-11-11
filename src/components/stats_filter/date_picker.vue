<template>
  <div>
    <date_picker
        v-model="date"
        :clearable="clearable"
        :format="format"
        :type="type"
        value-type="format"
    ></date_picker>
  </div>
</template>

<script>
import VueDatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru'

export default {
  name: "vue_date_picker",
  props: {
    from: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'DD.MM.YYYY'
    },
    type: {
      type: String,
      default: 'date'
    }
  },
  components: {
    'date_picker': VueDatePicker
  },
  data() {
    return {
      date: '',
      clearable: false,
    }
  },

  watch: {
    from() {
      this.date = this.from;
    },
    date() {
      this.$emit('update:input', this.date);
    }
  }
}
</script>

<style>
@import "~vue2-datepicker/index.css";

.mx-datepicker {
  width: 170px;

}

.mx-input {
  border-color: #e5e5e5;
  color: #333;
  background-color: #fff;
}

.mx-icon-calendar {
  color: #333;
}
</style>