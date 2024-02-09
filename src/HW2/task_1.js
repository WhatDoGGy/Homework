function LocalStorageManager() {
    this.saveData = function(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Дані з ключем '${key}' успішно збережені.`);
      } catch (error) {
        console.error(`Помилка при збереженні даних: ${error.message}`);
      }
    };
  
    this.getData = function(key) {
      try {
        const data = localStorage.getItem(key);
        if (data === null) {
          console.log(`Дані з ключем '${key}' не знайдені.`);
          return null;
        }
        const parsedData = JSON.parse(data);
        console.log(`Дані з ключем '${key}' успішно отримані:`, parsedData);
        return parsedData;
      } catch (error) {
        console.error(`Помилка при отриманні даних: ${error.message}`);
        return null;
      }
    };
  }
  

  const localStorageManager = new LocalStorageManager();

  localStorageManager.saveData('user', { name: 'John', age: 30 });
  
  const userData = localStorageManager.getData('user');