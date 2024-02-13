document.addEventListener("DOMContentLoaded", function() {
    var mySelectCause = document.getElementById('mySelectCause');
    var svarInput = document.getElementById('svar');
    var mySelectChange = document.getElementById('mySelectChange');
    var amText = document.getElementById('am_text');
  
    function handleSelectChange(selectElement, targetElement, targetValue) {
      selectElement.addEventListener('change', function() {
        if (selectElement.value === targetValue) {
          targetElement.style.display = 'inline-block';
        } else {
          targetElement.style.display = 'none';
        }
      });
  
      // Проверка при загрузке страницы
      if (selectElement.value === targetValue) {
        targetElement.style.display = 'inline-block';
      } else {
        targetElement.style.display = 'none';
      }
    }
  
    // Обработка для mySelectCause и svarInput
    handleSelectChange(mySelectCause, svarInput, 'mcode');
  
    // Обработка для mySelectChange и amText
    handleSelectChange(mySelectChange, amText, 'am');
  });
  