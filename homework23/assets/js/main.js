// 1

function age(){
    let yourAge = parseInt(prompt("Введите свой возраст:"));
    if (yourAge != ""){
        if (yourAge>0 && yourAge<12){
            alert("Ты ещё ребёнок.");
        }else if(yourAge>=12 && yourAge<18){
            alert("Ты подросткок.");
        }else if(yourAge>=18 && yourAge<60){
            alert("Ты уже взрослый!");
        }else if(yourAge>=60){
            alert("Сиди дома, пенсия!");
        }
    }else{
        alert("Это не похоже на возраст");
    }
}

// 2
function keys(){
    let key = parseInt(prompt("Выбери клавишу от 1 до 0:"));
    let keyChoice = "";
    switch (key){
        case 1:
            keyChoice = "!";
            break;
        case 2:
            keyChoice = "@";
            break;
        case 3:
            keyChoice = "#";
            break;
        case 4:
            keyChoice = "$";
            break;
        case 5:
            keyChoice = "%";
            break;
        case 6:
            keyChoice = "^";
            break;
        case 7:
            keyChoice = "&";
            break;
        case 8:
            keyChoice = "*";
            break;
        case 9:
            keyChoice = "(";
            break;
        case 0:
            keyChoice = ")";
            break;
        default:
            keyChoice = "Введите правильную цифру";
            break;
    }
    alert(keyChoice);
}

// 3
function number(){
    let number = parseInt(prompt("Введите трёхзначное число:"));
    s = parseInt(number/100);
    d = parseInt((number%100)/10);
    e = number%10;
    if(s == d || d == e || s == e){
        alert("Совпадения найдены");
    }else{
        alert("Совпадения не найдены");
    }
}

// 4
function leapYear(){
    let year = parseInt(prompt("Введите год:"));
    if (year%400 === 0 || (year%4 === 0 && year%100 !== 0)){
        alert("Год високосный.");
    }else{
        alert("Год не високосный");
    }
}

// 5
function palindrom(){
    let number = parseInt(prompt("Введите пятизначное число: ")),
        number1 = parseInt((number%100000)/10000),
        number2 = parseInt((number%10000)/1000),
        number4 = parseInt((number%100)/10),
        number5 = number%10;
    if(number1 === number5 && number2 === number4){
        alert("Число палиндром.");
    }else{
        alert("Число не палиндром.");
    }
}


// 6 здесь я только не смог понять, как сделать так, чтобы в зависимости от того, в какую валюту пользователь конвертировал деньги, наименование ввыводить в алерт
function exchange(){
    
    let dollar = parseFloat(prompt("Введите сумму для обмена:")),
        euro = 0.83,
        uah = 27.90,
        azn = 1.70,
        exchRes = 0;
    if (!isNaN(dollar)){
        let choice = parseFloat(prompt("Выберите валюту:\r 1)EUR;\r 2)UAH;\r 3)AZN."));
        switch (choice){
            case 1:
                exchRes = (dollar*euro).toFixed(2);
                break;
            case 2:
                exchRes = (dollar*uah).toFixed(2);
                break;
            case 3:
                exchRes = (dollar*azn).toFixed(2);
                break;
            default:
                alert("Выберите один из трех вариантов.");    
        }
    }else{
        alert("Введите правильную сумму!");
    }
    alert(`Сумма обмена ${exchRes} денег.`);
    
}

// 7
function discount(){
    let amount = parseFloat(prompt("Введите сумму покупки:")),
        disc3 = 0.03,
        disc5 = 0.05,
        disc7 = 0.07,
        toPay = 0;
    if(!isNaN(amount)){
        if(amount>=200 && amount<300){
            toPay = (amount-(amount*disc3)).toFixed(2);
            alert(`Сумма к оплате с учётом скидки ${toPay} баксов.`);
        }else if(amount>=300 && amount<500){
            toPay = (amount-(amount*disc5)).toFixed(2);
            alert(`Сумма к оплате с учётом скидки ${toPay} баксов.`);
        }else if(amount>=500){
            toPay = (amount-(amount*disc7)).toFixed(2);
            alert(`Сумма к оплате с учётом скидки ${toPay} баксов.`);
        }else{
            alert(`Сумма к оплате ${amount} баксов.`);
        }
    }else{
        alert("Введите правильную сумму.")
    }    
}

// 8
function square() {
    let square = parseFloat(prompt("Введите периметр квадрата: ")),
        circle = parseFloat(prompt("введите длину окружности: "));
     let squareSide = square/4,
        squareArea = Math.pow(squareSide, 2),
        circleArea = ((Math.pow(circle, 2))/4)*Math.PI;
    let result = squareArea>=circleArea?alert("Такая окружность может поместится в квадрат."):alert("Такая окружность не может поместиться в квадрате.");    
}