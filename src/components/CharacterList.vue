<template>
  <div>
    <!-- Фильтры для поиска по имени и статусу -->
    <div class="filters">
      <input v-model="filters.name" placeholder="Filter by name" class="filter-input" />
      <select v-model="filters.status" class="filter-select">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button @click="applyFilters" class="apply-button">Apply</button>
    </div>

    <!-- Список персонажей -->
    <div class="character-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>

    <!-- Пагинация -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Prev</button>
      <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="['pagination-button', { active: currentPage === page }]">
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';

export default {
  components: { CharacterCard },
  setup() {
    // Состояние для хранения списка персонажей
    const characters = ref([]);
    // Текущая страница
    const currentPage = ref(1);
    // Общее количество страниц
    const totalPages = ref(1);
    // Фильтры для поиска персонажей
    const filters = reactive({
      name: '',
      status: ''
    });

    // Функция для получения персонажей с API
    const fetchCharacters = async (page = 1) => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
          params: { page, name: filters.name, status: filters.status }
        });
        characters.value = response.data.results;
        currentPage.value = page;
        totalPages.value = response.data.info.pages;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    // Применение фильтров и получение данных
    const applyFilters = () => {
      fetchCharacters();
    };

    // Переход на следующую страницу
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        fetchCharacters(currentPage.value + 1);
      }
    };

    // Переход на предыдущую страницу
    const prevPage = () => {
      if (currentPage.value > 1) {
        fetchCharacters(currentPage.value - 1);
      }
    };

    // Переход на указанную страницу
    const goToPage = (page) => {
      if (page !== '...') {
        fetchCharacters(page);
      }
    };

    // Вычисляемый массив видимых страниц для пагинации
    const visiblePages = computed(() => {
      const pages = [];
      if (totalPages.value <= 7) {
        for (let i = 1; i <= totalPages.value; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage.value <= 4) {
          pages.push(1, 2, 3, 4, 5, '...', totalPages.value);
        } else if (currentPage.value >= totalPages.value - 3) {
          pages.push(1, '...', totalPages.value - 4, totalPages.value - 3, totalPages.value - 2, totalPages.value - 1, totalPages.value);
        } else {
          pages.push(1, '...', currentPage.value - 1, currentPage.value, currentPage.value + 1, '...', totalPages.value);
        }
      }
      return pages;
    });

    // Получение данных при монтировании компонента
    onMounted(() => {
      fetchCharacters();
    });

    return {
      characters,
      currentPage,
      totalPages,
      filters,
      fetchCharacters,
      applyFilters,
      nextPage,
      prevPage,
      goToPage,
      visiblePages
    };
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.filter-input, .filter-select, .apply-button {
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.apply-button {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.pagination-button {
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.pagination-button.active {
  background-color: #2e7d32;
}

.pagination-button[disabled] {
  background-color: #9e9e9e;
  cursor: not-allowed;
}
</style>
