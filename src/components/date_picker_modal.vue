<template>
  <modal
      :component="component"
      v-on:accept="acceptModal"
      :header_text="header_text"
  ></modal>
</template>

<script>

import date_picker from "./stats_filter/date_picker.vue";
import modal from "./modal.vue";

export default {
  name: "date_picker_modal",
  props:{
    header_text: {
      type: String
    }
  },
  components: {
    'date-picker': date_picker,
    'modal': modal
  },
  data() {
    return {
      component: date_picker
    }
  },
  methods: {
    acceptModal: function (event) {
      alert(event);
    }
  }
}
</script>

<style scoped>

</style>