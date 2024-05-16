document.addEventListener('DOMContentLoaded', () => {
    const brigImage = document.getElementById('brig-image');
    const gameContainer = document.getElementById('game-container');
  
    brigImage.addEventListener('click', () => {
      createBrigText();
      applyRandomEffect();
    });
  
    function createBrigText() {
      // Создаем временный элемент для вычисления размеров текста
      const tempText = document.createElement('div');
      tempText.textContent = 'brig';
      tempText.classList.add('brig-text');
      tempText.style.visibility = 'hidden'; // Скрываем элемент
      gameContainer.appendChild(tempText);
      
      // Получаем размеры временного элемента
      const textWidth = tempText.offsetWidth;
      const textHeight = tempText.offsetHeight;
      gameContainer.removeChild(tempText); // Удаляем временный элемент
  
      // Вычисляем случайное положение, гарантируя, что текст останется в пределах экрана
      const { clientWidth, clientHeight } = document.documentElement;
      const x = Math.random() * (clientWidth - textWidth);
      const y = Math.random() * (clientHeight - textHeight);
  
      // Создаем настоящий элемент текста
      const brigText = document.createElement('div');
      brigText.textContent = 'brig';
      brigText.classList.add('brig-text');
      brigText.style.left = `${x}px`;
      brigText.style.top = `${y}px`;
  
      brigText.style.color = getRandomColor();
      brigText.style.fontFamily = getRandomFont();
  
      gameContainer.appendChild(brigText);
  
      setTimeout(() => {
        brigText.remove();
      }, 2000);
    }
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function getRandomFont() {
      const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS'];
      return fonts[Math.floor(Math.random() * fonts.length)];
    }
  
    function applyRandomEffect() {
      const effects = [
        'rotate(10deg)',
        'rotate(-10deg)',
        'scale(1.1)',
        'scale(0.9)',
        'skewX(10deg)',
        'skewY(10deg)',
      ];
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      brigImage.style.transition = 'transform 0.5s';
      brigImage.style.transform = randomEffect;
  
      setTimeout(() => {
        brigImage.style.transform = 'none';
      }, 500);
    }
  });
  