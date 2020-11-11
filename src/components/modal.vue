<template>
  <div class="modal-mask">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title">
            {{header_text}}
          </h4>
          <i class="modal-close-button"></i>
        </div>

        <div class="modal-body">
          <component
              v-bind:is='component'
              v-bind:input.sync="data"
          ></component>
        </div>

        <div class="modal-footer">
          <button v-on:click="accept" class="btn btn-primary">Применить</button>
          <button class="btn btn-default">Отмена</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    header_text: {
      type: String
    },
    component: {
      type: Object
    },
  },
  data() {
    return {
      data: {},
    }
  },
  methods: {
    accept: function () {
      this.$emit('acceptModal', this.data);
    }
  }
}
</script>

<style scoped>
  /*@import "~bootstrap/dist/css/bootstrap.min.css";*/
  @import "buttons.css";
  .modal-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    z-index: -9999;
  }

  .modal-content {
    padding: 0 25px;
  }

  .modal-footer {
    justify-content: left;
  }

  .modal-close-button {
    background-image: url(../img/remove-icon-big.png);
    width: 18px;
    height: 18px;
  }
</style>