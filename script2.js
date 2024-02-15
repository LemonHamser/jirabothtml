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
        showOrHideElement(svarInput, selectedValue === 'mcode');
    });

    mySelectChange.addEventListener('change', function() {
        var selectedValue = mySelectChange.value;
        showOrHideElement(changeIncProviders, selectedValue === 'otme');
        showOrHideElement(cascadeChange, selectedValue === 'izka');
        showOrHideElement(am_text, mySelectChange.value === 'am');
    });

    // Initial state
    showOrHideElement(svarInput, mySelectCause.value === 'mcode');
    showOrHideElement(changeIncProviders, mySelectChange.value === 'otme');
    showOrHideElement(cascadeChange, mySelectChange.value === 'izka');
    showOrHideElement(am_text, mySelectChange.value === 'am');

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
