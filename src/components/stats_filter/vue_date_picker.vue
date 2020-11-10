<template>
  <div>
    <date_picker
        v-model="value"
        :clearable="clearable"
        v-on:input="handleInput"
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
  props: {
    value:{}
  },
  data() {
    return {
      clearable: false,
    }
  },
  methods: {
    handleInput: function () {
      this.$emit('input', this.value);
    }
  }
}
</script>

<style scoped>
@import "~vue2-datepicker/index.css";
</style>