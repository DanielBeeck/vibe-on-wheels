<template>
  <HeaderVue />
  <h1>Hit the Road.</h1>
  <flatpickr />
  <div>
    <input ref="dateRangePicker" type="text" class="date-range-picker" />
  </div>

</template>

<script>
import HeaderVue from './components/Header.vue'
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


export default {
  name: 'App',
  components: {
    HeaderVue,
    flatpickr
  },
  mounted() {
    flatpickr(this.$refs.dateRangePicker, {
      mode: 'range',
      // Weitere Optionen hier
    });
  },
}
</script>

<style lang="scss">
  @import "@/../main.scss";
#app {
  text-align: center;
}
</style>
