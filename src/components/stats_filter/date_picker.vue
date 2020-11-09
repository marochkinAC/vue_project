<template>
  <div class="col-sm-5">
    <div class="input-group date">
      <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
    </div>
  </div>
</template>

<script>


import jQuery from 'jquery';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ru.min';

export default {
  name: "date_picker",
  mounted: function () {
    $('.input-group.date').datepicker({
      format: "dd.mm.yy",
      language: "ru",
      autoclose: true,
      todayHighlight: true
    });
  }

}
</script>

<style>
@import "~bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
@import "~bootstrap";
</style>
