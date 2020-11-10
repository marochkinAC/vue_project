<template>
  <div class="modal-mask">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title">
            Modal title
          </h4>
          <i class="modal-close-button">X</i>
        </div>

        <div class="modal-body">
          <component v-bind:is='component'></component>
          <component v-bind:is='component'></component>
          <component v-bind:is='component'></component>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary">Применить</button>
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
    component: {
      type: Object
    },
  }
}
</script>

<style scoped>
  @import "~bootstrap/dist/css/bootstrap.min.css";

  .modal-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    z-index: -9999;
  }

  .btn-default {
    border-color: #e5e5e5;
    color: #333;
    background-color: #fff;
  }

  .btn-default:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }

  .modal-content {
    padding: 0 25px;
  }

  .modal-footer {
    justify-content: left;
  }
</style>