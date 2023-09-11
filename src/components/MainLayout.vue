<template>
  <h1>{{ msg }}</h1>
  <div>
    <form action="" >
      <label>
        <input type="text" placeholder="Abholort">
      </label><br>
      <input type="date" id="datemin" name="datemin" min="2000-01-02" placeholder="Von"><br>
      <input type="date" id="datemax" name="datemax" max="1979-12-31" placeholder="Bis"><br><br>

    </form>
  </div>

  <!-- <img src="../assets/hyundai-motor-group-P45K3ewrATs-unsplash.jpg" alt=""> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/../../main.scss";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
