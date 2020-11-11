<template>
  <div class="portlet filter-block">
    <div class="portlet-body">
      <div class="row">
        <div class="col-xl-3" style="max-width: 300px;">
          <div class="form-group">
            <label class="control-label col-md-3 text-left">C&nbsp;даты</label>
            <div class="col-md-8" style="display: inline-block">
              <date_picker
                  v-bind:input.sync="form.date_start"
                  :from="date_start"
              ></date_picker>
            </div>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="form-group">
            <div class="col-md-12">
              <button @click="showModalSubid = true" class="btn btn-default stats-filter-dark">
                Выбрать SubID&nbsp;
                <i class="fa fa-tag"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="form-group">
            <div class="col-md-12">
              <button @click="showModalPlatforms = true" class="btn btn-default stats-filter-dark">
                Выбрать источники&nbsp;
                <i class="fa fa-link"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="form-group">
            <div class="col-md-12">
              <button @click="showModalManagers = true" class="btn btn-default stats-filter-dark">
                Выбрать менеджеров&nbsp;
                <i class="fa fa-male"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-3" style="max-width: 300px;">
          <div class="form-group">
            <label class="control-label col-md-3 text-left">По&nbsp;дату</label>
            <div class="col-md-8" style="display: inline-block">
              <date_picker
                  v-bind:input.sync="form.date_end"
                  :from="date_end"
              ></date_picker>
            </div>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="form-group">
            <div class="col-md-12">
              <button @click="showModalWebmasters = true" class="btn btn-default stats-filter-dark">
                Выбрать вебмастеров&nbsp;
                <i class="fa fa-group"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="form-group">
            <div class="col-md-12">
              <button @click="showModalOffers = true" class="btn btn-default stats-filter-dark">
                Выбрать офферы&nbsp;
                <i class="fa fa-folder-open"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portlet-title filters-title" style="height: auto; padding: 5px 15px">
      <div class="tools">
        <button v-on:click="accept" type="submit" class="btn btn-info btn-sm" style="margin-right:10px;">
          Применить
        </button>
        <a class="btn btn-default btn-sm" title="Сбросить фильтры" href="">Сбросить</a>
      </div>
    </div>
    <check_box_modal
        v-if="showModalSubid"
        @close="showModalSubid = false"
        :accept.sync="form.subids"
        header_text="Subd Id"
        @clickOut="showModalSubid = false"
    >
    </check_box_modal>
    <modal
        v-if="showModalManagers"
        @close="showModalManagers = false"
        :accept.sync="form.managers"
        header_text="Менеджеры"
        @clickOut="showModalManagers = false"
    >
    </modal>
    <modal
        v-if="showModalOffers"
        @close="showModalOffers = false"
        :accept.sync="form.offers"
        header_text="Офферы"
        @clickOut="showModalOffers = false"
    >
    </modal>
    <modal
        v-if="showModalPlatforms"
        @close="showModalPlatforms = false"
        :accept.sync="form.platforms"
        header_text="Источники"
        @clickOut="showModalPlatforms = false"
    >
    </modal>
    <modal
        v-if="showModalWebmasters"
        @close="showModalWebmasters = false"
        :accept.sync="form.webmasters"
        header_text="Вебмастера"
        @clickOut="showModalWebmasters = false"
    >
    </modal>
  </div>
</template>

<script>
import vue_date_picker from "./date_picker.vue";
import modal from "../modal.vue";
import check_box_modal from "./check_box_modal.vue";

export default {
  name: "stats_filter",
  components: {
    'date_picker': vue_date_picker,
    'modal' : modal,
    'check_box_modal': check_box_modal
  },
  data() {
    return {
      date_start: '',
      date_end: '',
      form: {
        date_start : '',
        date_end : '',
        subids : [],
        managers : [],
        offers : [],
        webmasters : [],
        platforms : [],
      },
      showModalSubid: false,
      showModalPlatforms: false,
      showModalWebmasters: false,
      showModalOffers: false,
      showModalManagers: false,
    }
  },
  methods: {
    accept: function () {
      this.date_start = '20.01.2020';
      this.date_end = '30.01.2020';
    }
  }

}
</script>

<style scoped>
@import "../../style/buttons.css";

.row {
  margin-left: unset;
  margin-right: unset;
}

.portlet {
  clear: both;
  margin-top: 0;
  margin-bottom: 25px;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.portlet > .portlet-body {
  clear: both;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  padding: 15px 15px 2px 15px;
}

.portlet > .portlet-title {
  background-color: #eee;
  border-radius: 4px 4px 0 0;
  padding: 10px 10px 2px 10px;
  height: 38px;
}

.form-group {
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 15px;
}

label {
  font-weight: 400;
  font-size: 14px;
}

.stats-filter-dark {
  width: 100%;
  max-width: 240px;
}
</style>