document.addEventListener('DOMContentLoaded', function() {
    var mySelectCause = document.getElementById('mySelectCause');
    var svarInput = document.getElementById('svar');

    var mySelectChange = document.getElementById('mySelectChange');
    var changeIncProviders = document.getElementById('changeIncProviders');
    var cascadeChange = document.getElementById('cascadeChange');
    var am_text = document.getElementById('am_text');

    var csInformCheckbox = document.getElementById('csInform');
    var partnInformCS = document.getElementById('partnInformCS');

    function showOrHideElement(element, shouldShow) {
        element.style.display = shouldShow ? 'block' : 'none';
    }

    mySelectCause.addEventListener('change', function() {
        var selectedValue = mySelectCause.value;
        showOrHideElement(svarInput, selectedValue === 'Свой вариант');
    });

    mySelectChange.addEventListener('change', function() {
        var selectedValue = mySelectChange.value;
        showOrHideElement(changeIncProviders, selectedValue === 'Отключение метода');
        showOrHideElement(cascadeChange, selectedValue === 'Изменение каскада');
        showOrHideElement(am_text, mySelectChange.value === 'Альтернативный вариант');
    });

    // Initial state
    showOrHideElement(svarInput, mySelectCause.value === 'Свой вариант');
    showOrHideElement(changeIncProviders, mySelectChange.value === 'Отключение метода');
    showOrHideElement(cascadeChange, mySelectChange.value === 'izИзменение каскадаka');
    showOrHideElement(am_text, mySelectChange.value === 'Альтернативный вариант');

    csInformCheckbox.addEventListener('change', function() {
        if (csInformCheckbox.checked) {
          partnInformCS.style.display = 'block';
        } else {
          partnInformCS.style.display = 'none';
        }
      });
    
    
      if (csInformCheckbox.checked) {
        partnInformCS.style.display = 'block';
      } else {
        partnInformCS.style.display = 'none';
      }
});
