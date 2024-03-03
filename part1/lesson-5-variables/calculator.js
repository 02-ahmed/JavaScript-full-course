let calculation = localStorage.getItem('calculation') || '';
    showCalculation();

    function updateCalculation(button) {
      calculation+=button;
      showCalculation();
      localStorage.setItem('calculation', calculation);
    }

    function showCalculation(){
      document.querySelector('.js-calculation-display').innerHTML = calculation;
    }