<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ author }}</h1>

    <ul>
      <li>
        <router-link to='/first'>To first</router-link>
      </li>
      <li>
        <router-link to='/second'>To second</router-link>
      </li>
      <router-view></router-view>
    </ul> -->

    <router-view></router-view>

    <!-- <first></first>
    <second></second> -->
  </div>
</template>

<script>
// import first from './components/first.vue'
export default {
  name: 'app',
  data () {
    return {
      author: 'I\'m polya'
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
}*/
</style>
