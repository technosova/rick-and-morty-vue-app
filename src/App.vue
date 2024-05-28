<template>
  <div id="app">
    <h1>Rick and Morty Characters</h1>
    <CharacterList />
  </div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';

export default {
  components: {
    CharacterList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f0f0;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #61dafb;
  margin-top: 20px;
}
</style>
