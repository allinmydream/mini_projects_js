function add(char) {
    // 식을 입력할 input 태그를 불러옴 
    var display = document.getElementById('display');
    //dispaly.value는 input 태그 안에 들어있는 값을 의미 
    display.value = display.value + char;
    // dispaly.value += char;
    // input 태그 값 뒤에 char 문자를 추가해 주는 역할
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
}