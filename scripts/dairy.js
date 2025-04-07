    // Инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
      // Установка текущей даты
      const today = new Date();
      document.getElementById('current-date').textContent = today.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      
      // Загрузка сохранённых данных
      loadFoodDiary();
      
      // Обработчик формы
      document.getElementById('add-food-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addFoodEntry();
      });
    });

    // Функция для переключения вкладок (если у вас несколько вкладок)
    function toggleTab(headerElement, tabId) {
      const tabContent = document.getElementById(tabId);
      const isActive = headerElement.classList.contains('active');
      
      // Закрываем все вкладки
      document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      
      // Открываем текущую, если она была закрыта
      if (!isActive) {
        headerElement.classList.add('active');
        tabContent.style.display = 'block';
      }
    }

    // Добавление записи
    function addFoodEntry() {
      const mealType = document.getElementById('meal-type').value;
      const foodName = document.getElementById('food-name').value.trim();
      const calories = parseInt(document.getElementById('food-calories').value);
      const protein = parseFloat(document.getElementById('food-protein').value);
      const fat = parseFloat(document.getElementById('food-fat').value);
      const carbs = parseFloat(document.getElementById('food-carbs').value);
      const weight = parseInt(document.getElementById('food-weight').value);
      
      if (!foodName || isNaN(calories) || isNaN(protein) || isNaN(fat) || isNaN(carbs) || isNaN(weight)) {
        alert('Пожалуйста, заполните все поля корректно!');
        return;
      }
      
      const entry = {
        id: Date.now(),
        mealType,
        foodName,
        calories: Math.round(calories * weight / 100),
        protein: parseFloat((protein * weight / 100).toFixed(1)),
        fat: parseFloat((fat * weight / 100).toFixed(1)),
        carbs: parseFloat((carbs * weight / 100).toFixed(1)),
        weight,
        date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
      };
      
      // Сохраняем в localStorage
      const entries = JSON.parse(localStorage.getItem('foodDiary') || '[]');
      entries.push(entry);
      localStorage.setItem('foodDiary', JSON.stringify(entries));
      
      // Обновляем интерфейс
      renderFoodEntry(entry);
      updateNutritionStats();
      
      // Очищаем форму (кроме веса)
      document.getElementById('add-food-form').reset();
      document.getElementById('food-weight').value = 100;
    }

    // Отображение записи
    function renderFoodEntry(entry) {
      const mealTypes = {
        breakfast: { name: 'Завтрак', class: 'bg-primary' },
        lunch: { name: 'Обед', class: 'bg-success' },
        dinner: { name: 'Ужин', class: 'bg-info' },
        snack: { name: 'Перекус', class: 'bg-warning' }
      };
      
      const entryElement = document.createElement('div');
      entryElement.className = 'food-entry';
      entryElement.dataset.id = entry.id;
      entryElement.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <span class="badge ${mealTypes[entry.mealType].class} meal-type-badge">${mealTypes[entry.mealType].name}</span>
            <strong>${entry.foodName}</strong> (${entry.weight}г)
            <div class="mt-1">
              <span class="badge bg-light text-dark nutrition-badge">${entry.calories} ккал</span>
              <span class="badge bg-light text-dark nutrition-badge">Б: ${entry.protein}г</span>
              <span class="badge bg-light text-dark nutrition-badge">Ж: ${entry.fat}г</span>
              <span class="badge bg-light text-dark nutrition-badge">У: ${entry.carbs}г</span>
            </div>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteFoodEntry(${entry.id})">
            Удалить
          </button>
        </div>
      `;
      
      const container = document.getElementById('food-entries');
      if (container.firstChild?.classList?.contains('text-muted')) {
        container.innerHTML = '';
      }
      container.prepend(entryElement);
    }

    // Удаление записи
    function deleteFoodEntry(id) {
      let entries = JSON.parse(localStorage.getItem('foodDiary') || '[]');
      entries = entries.filter(entry => entry.id !== id);
      localStorage.setItem('foodDiary', JSON.stringify(entries));
      
      loadFoodDiary(); // Перезагружаем список
    }

    // Загрузка всех записей
    function loadFoodDiary() {
      const today = new Date().toISOString().split('T')[0];
      const entries = JSON.parse(localStorage.getItem('foodDiary') || '[]').filter(entry => entry.date === today);
      
      const container = document.getElementById('food-entries');
      container.innerHTML = entries.length ? '' : '<div class="text-center py-3 text-muted">Пока нет записей</div>';
      
      entries.forEach(entry => renderFoodEntry(entry));
      updateNutritionStats();
    }

    // Обновление статистики
    function updateNutritionStats() {
      const today = new Date().toISOString().split('T')[0];
      const entries = JSON.parse(localStorage.getItem('foodDiary') || '[]').filter(entry => entry.date === today);
      
      const total = entries.reduce((acc, entry) => {
        acc.calories += entry.calories;
        acc.protein += entry.protein;
        acc.fat += entry.fat;
        acc.carbs += entry.carbs;
        return acc;
      }, { calories: 0, protein: 0, fat: 0, carbs: 0 });
      
      // Обновляем UI
      document.getElementById('total-calories').textContent = `${total.calories} ккал`;
      document.getElementById('protein-sum').textContent = `${total.protein.toFixed(1)} г`;
      document.getElementById('fat-sum').textContent = `${total.fat.toFixed(1)} г`;
      document.getElementById('carbs-sum').textContent = `${total.carbs.toFixed(1)} г`;
      
      // Прогресс-бар (предполагаем норму в 2000 ккал)
      const progress = (total.calories / 2000) * 100;
      const progressBar = document.getElementById('calories-progress');
      progressBar.style.width = `${Math.min(progress, 100)}%`;
      progressBar.textContent = `${total.calories}/2000 ккал`;
      progressBar.className = `progress-bar progress-bar-striped ${progress > 100 ? 'bg-danger' : 'bg-success'}`;
    }