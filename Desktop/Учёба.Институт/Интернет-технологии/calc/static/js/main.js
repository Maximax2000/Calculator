"use strict";

(function() {
    const resultField = document.querySelector('#result');
    const clearBtn = document.querySelector('#clear');
    const digitButtons = document.querySelectorAll('.digit-button');
    const operatorButtons = document.querySelectorAll('.operator-button');

    let s = "";
    let res;
    let num1;
    let num2;

    digitButtons.forEach(function(digitButton) {
        digitButton.addEventListener('click', function(e) {
            let element = e.target;
            let value = element.value;
            console.log(s)
            if(value == '1'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '2'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '3'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '4'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '5'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '6'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '7'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '8'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '9'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '0'){
                s = s + value;
                resultField.value = s;
            }
        });
    });

    operatorButtons.forEach(function(operatorButton) {
        operatorButton.addEventListener('click', function(e) {
            let element = e.target;
            let value = element.value;
            console.log(s)
            if(value == '+'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '-'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '*'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '/'){
                s = s + value;
                resultField.value = s;
            }
            if(value == '='){
                let pos = -1;
                while ((pos = s.indexOf('+', pos + 1))!= -1){
                    let a = 0;let b = pos; 
                    num1 = s.slice(a, b);
                    num2 = s.slice(b + 1, s.length);
                    res = Number.parseInt(num1) + Number.parseInt(num2)
                }
                while ((pos = s.indexOf('-', pos + 1))!= -1){
                    let a = 0;let b = pos; 
                    num1 = s.slice(a, b);
                    num2 = s.slice(b+1, s.length);
                    res = Number.parseInt(num1) - Number.parseInt(num2)
                }
                while ((pos = s.indexOf('*', pos + 1))!= -1){
                    let a = 0;let b = pos; 
                    num1 = s.slice(a, b);
                    num2 = s.slice(b+1, s.length);
                    res = Number.parseInt(num1) * Number.parseInt(num2)
                }
                while ((pos = s.indexOf('/', pos + 1))!= -1){
                    let a = 0;let b = pos; 
                    num1 = s.slice(a, b);
                    num2 = s.slice(b+1, s.length);
                    res = Number.parseInt(num1) / Number.parseInt(num2)
                }
                resultField.value = res;
                s = res;
            }
        });
    });

    clearBtn.addEventListener('click', function(e) {
        resultField.value = 0;
        s = "";
    });
})();