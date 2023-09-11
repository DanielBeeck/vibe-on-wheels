<template>
  <HeaderVue />
  <mainLayout msg="Hit the Road."/>
</template>

<script>
import mainLayout from './components/MainLayout.vue'
import HeaderVue from './components/Header.vue'

export default {
  name: 'App',
  components: {
    mainLayout,
    HeaderVue
  }
}
</script>

<style lang="scss">
  @import "@/../main.scss";
#app {
  text-align: center;
}
</style>
