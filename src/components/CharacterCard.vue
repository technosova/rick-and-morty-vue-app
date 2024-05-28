<template>
  <div class="character-card">
    <img :src="character.image" alt="character image" class="character-image" />
    <div class="character-details">
      <h2>{{ character.name }}</h2>
      <p>Status: <span :class="statusClass">{{ character.status }}</span> - {{ character.species }}</p>
      <p>Last known location: {{ character.location.name }}</p>
      <p>First seen in: {{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object // Принимаем объект character как пропс
  },
  computed: {
    statusClass() {
      // Возвращаем класс в зависимости от статуса персонажа
      return {
        'status-alive': this.character.status === 'Alive',
        'status-dead': this.character.status === 'Dead',
        'status-unknown': this.character.status === 'unknown'
      };
    }
  }
}
</script>

<style scoped>
.character-card {
  display: flex;
  flex-direction: column;
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  color: #fff;
  width: 250px;
  box-sizing: border-box;
}

.character-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.character-details {
  margin-top: 15px;
}

.status-alive {
  color: #55cc44;
}

.status-dead {
  color: #d63d2e;
}

.status-unknown {
  color: #9e9e9e;
}
</style>
