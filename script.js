let display = document.querySelector(".display");




function printDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = null;
  }

  function delElement() {
   
    display.value =display.value.substring(0,display.value.length - 1);
  }

  function calculateResult() {
    let cal = display.value;
      let result = eval(cal);
      display.value = result;
    
    
  }


