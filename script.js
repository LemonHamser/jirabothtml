document.addEventListener("DOMContentLoaded", function() {
  var mySelectCause = document.getElementById('mySelectCause');
  var svarInput = document.getElementById('svar');
  var mySelectChange = document.getElementById('mySelectChange');
  var amText = document.getElementById('am_text');
  var incProviders = document.getElementById('incProviders');
  var changeIncProviders = document.getElementById('changeIncProviders');
  var cascadeChange = document.getElementById('cascadeChange');
  var partnInformCheckbox = document.getElementById('partnInform');
  var partnInformDiv = document.getElementById('partnInformDiv');
  var partnInformCS = document.getElementById('partnInformCS');
  var csInformCheckbox = document.getElementById('csInform');

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
  handleSelectChange(mySelectChange, changeIncProviders, ['otme','izka']);
  handleSelectChange(mySelectChange, cascadeChange, ['izka']);

  partnInformCheckbox.addEventListener('change', function() {
    if (partnInformCheckbox.checked) {
      partnInformDiv.style.display = 'block';
    } else {
      partnInformDiv.style.display = 'none';
    }
  });

  csInformCheckbox.addEventListener('change', function() {
    if (csInformCheckbox.checked) {
      partnInformCS.style.display = 'block';
    } else {
      partnInformCS.style.display = 'none';
    }
  });

  // Проверка при загрузке страницы
  if (partnInformCheckbox.checked) {
    partnInformDiv.style.display = 'block';
  } else {
    partnInformDiv.style.display = 'none';
  }

  if (csInformCheckbox.checked) {
    partnInformCS.style.display = 'block';
  } else {
    partnInformCS.style.display = 'none';
  }
});
