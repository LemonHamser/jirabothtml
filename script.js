document.addEventListener("DOMContentLoaded", function() {
  var mySelectCause = document.getElementById('mySelectCause');
  var svarInput = document.getElementById('svar');
  var mySelectChange = document.getElementById('mySelectChange');
  var amText = document.getElementById('am_text');
  var incProviders = document.getElementById('incProviders');
  var changeIncProviders = document.getElementById('changeIncProviders');
  var cascadeChange = document.getElementById('cascadeChange')

  function handleSelectChange(selectElement, targetElement, targetValue) {
    selectElement.addEventListener('change', function() {
      if (Array.isArray(targetValue)) {
        if (targetValue.includes(selectElement.value)) {
          targetElement.style.display = 'inline-block';
        } else {
          targetElement.style.display = 'none';
        }
      } else {
        if (selectElement.value === targetValue) {
          targetElement.style.display = 'inline-block';
        } else {
          targetElement.style.display = 'none';
        }
      }
    });

    // Проверка при загрузке страницы
    if (Array.isArray(targetValue)) {
      if (targetValue.includes(selectElement.value)) {
        targetElement.style.display = 'inline-block';
      } else {
        targetElement.style.display = 'none';
      }
    } else {
      if (selectElement.value === targetValue) {
        targetElement.style.display = 'inline-block';
      } else {
        targetElement.style.display = 'none';
      }
    }
  }

  // Обработка для mySelectCause и svarInput
  handleSelectChange(mySelectCause, svarInput, 'mcode');

  // Обработка для mySelectChange и amText
  handleSelectChange(mySelectChange, amText, 'am');

  // Обработка для mySelectCause и incProviders
  handleSelectChange(mySelectCause, incProviders, ['sp', 'tr', 'ts']);

  // Обработка для mySelectChange и changeIncProviders
  handleSelectChange(mySelectChange, changeIncProviders, ['otme']);
  handleSelectChange(mySelectChange, cascadeChange, ['izka']);
});
