<template>
  <HeaderVue />
  <flatpickr />
  <div id="rentwindow">
    <p>Miete ein Auto in deiner Nähe</p>
    <form>
      <input id='pickupLoc' type="text" placeholder="Abholort">
      <input id="pickupDate" ref="startDatePicker" type="text" class="date-range-picker" placeholder="Abholdatum"/>
      <input id="bringbackDate" ref="endDatePicker" type="text" class="date-range-picker" placeholder="Rückgabedatum"/>
    </form>
  </div>
  <h1>Hit the Road.</h1>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/light.css";

export default {
  name: "App",
  components: {
    HeaderVue,
  },
  mounted() {
    flatpickr(this.$refs.startDatePicker, {
      // Configuration for the start date picker
      minDate: "today",
      maxDate: new Date().fp_incr(14), // 14 days from now
    });

    flatpickr(this.$refs.endDatePicker, {
      // Configuration for the end date picker
      minDate: "today",
      maxDate: new Date().fp_incr(14), // 14 days from now
    });
  },
};
</script>

<style lang="scss">
@import "@/../main.scss";
</style>
