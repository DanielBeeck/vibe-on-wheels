<template>
  <header>
    <img alt="Vow logo" src="../assets/vowlogo.png">
    <h3>
      VibeOnWheels
    </h3>
    <div class="t1">
      Autovermietung
    </div>
    <div class="t1">
      CarShare
    </div>
    <div class="t1">
      VOW+
    </div>
  </header>
</template>

<script>
export default {
  name: "header-vue",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/../../main.scss";

</style>
