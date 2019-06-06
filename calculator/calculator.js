var numberClicked = false; //전역변수로 설정

function add(char) {
    if(numberClicked == false) { //만약 이전에 연산자를 입력했다면
        if(isNaN(char) == true) { //또 연산자를 입력하면
        
        }else { //연산자가 아니면 == 숫자면
            // var display = document.getElementById('display'); 식을 입력할 input 태그를 불러옴 
            // display.value = display.value + char; // dispaly.value는 input 태그 안에 들어있는 값을 의미 
            // dispaly.value += char;
            // input 태그 값 뒤에 char 문자를 추가해 주는 역할
            document.getElementById('display').value += char;
        }
    }else { //만약 이전에 숫자를 입력했다면
        document.getElementById('display').value += char; //계속해서 입력
    }

    if(isNaN(char) == true) {//char값이 숫자가 아니라면 = 연산자를 눌렀다면
        numberClicked = false; 
    }else {
        numberClicked = true;
    }
    
    
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}

