<template>
  <modal
      :component="component"
  ></modal>
</template>

<script>

import date_picker from "./stats_filter/vue_date_picker.vue";
import modal from "./modal.vue";

export default {
  name: "date_picker_modal",
  components: {
    'date-picker': date_picker,
    'modal': modal
  },
  data() {
    return {
      component: date_picker
    }
  }
}
</script>

<style scoped>

</style>