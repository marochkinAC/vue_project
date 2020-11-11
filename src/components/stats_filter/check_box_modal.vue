<template>
  <modal
      :component="component"
      :header_text="header_text"
      @close="$emit('close')"
      @clickOut="$emit('clickOut')"
      @accept="$emit('update:accept', [5,6,78,8])"
  ></modal>
</template>

<script>
import modal from "../modal.vue";
import check_box from "./check_box.vue";


export default {
  name: "check_box_modal",
  components: {
    'modal': modal,
    'check_box': check_box
  },
  data() {
    return {
      component: check_box
    }
  },
  props: {
    header_text: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>