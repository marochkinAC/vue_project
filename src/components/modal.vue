<template>
  <div @click="$emit('clickOut')" class="modal-mask">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title">
            {{header_text}}
          </h4>
          <i @click="$emit('close')" class="modal-close-button"></i>
        </div>

        <div class="modal-body">
          <component
              v-bind:is='component'
          ></component>
        </div>

        <div class="modal-footer">
          <button v-on:click="$emit('accept')" class="btn btn-primary">Применить</button>
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
}
</script>

<style scoped>
   @import "../style/buttons.css";
  .modal-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
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

   .modal-close-button:focus, .modal-close-button:hover {
     color: #000;
     text-decoration: none;
     cursor: pointer;
     filter: alpha(opacity=50);
     opacity: .5;
   }
</style>