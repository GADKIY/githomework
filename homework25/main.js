// 1
function printNumber(parse, rez, overwrite = true){
    parse = document.getElementById(parse);
    if(overwrite){
        parse.innerHTML = rez;
    }else{
        parse.innerHTML = parse.innerHTML+rez;
    }
}

function getNumber(a){
    return parseInt(document.getElementById(a).value);
}

function compNumber(a, b){
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }
    return 0;
}

/* function number(){
    let a = parseInt(document.getElementById("firstNumber1").value),
        b = parseInt(document.getElementById("secondNumber1").value),
        rez = compNumber(a, b);
document.getElementById("number_rez1").innerText = rez;
} */

function number(){
    let a = getNumber("firstNumber1"),
        b = getNumber("secondNumber1"),
        rez = compNumber(a, b);
    printNumber("number_rez1", rez, false);
}

// 2
function fact(n){
    if(n===1 && n!==0){
        return n;
    }
    return n*fact(n-1);
}

function factorial(){
    let a = getNumber("factNumber1");
    printNumber("fact_rez", fact(a));
}

// 3
function concat(a, b, c){
    if(c>9){
        alert("Да ну нахер!");
        return null;
    }
    return (a*100)+(b*10)+c;
}

function numberConcat(){
    let a = getNumber("number1"),
        b = getNumber("number2"),
        c = getNumber("number3"),
        rez = concat(a, b, c);
    if(rez===null){
        return;
    }
    printNumber("concat_rez", rez);
}

// 4
function Area(a, b){
    if(b===undefined){
        return a**2;
    }
    return a*b;
}

function area(){
    let a = getNumber("side1"),
        b = getNumber("side2"),
        rez;
    if(isNaN(a) && isNaN(b)){
        printNumber("area_rez", "Введи ка число!");
        return;
    }else if(isNaN(a)){
        rez = Area(b);
    }else if(isNaN(b)){
        rez = Area(a);
    }else{
        rez = Area(a, b);
    }
    printNumber("area_rez", rez);
}

// 5
function perfect(a){
    debugger
    rez = 0;        
    for (let i = 1; i<a; i++){
        if(a%i==0){
            rez += i;
        }
    }
    if(a===rez){
        return ("This is a perfect number!");
    }else{
        return ("This is not a perfect number.");
    }               
}

function perfectNumber(){
    let a = getNumber("perfectNumber");
    if(isNaN(a)){
        printNumber("perfect_rez", "Enter number!");
        return;
    }
    printNumber("perfect_rez", perfect(a));
}

// 6 вот тут не смог понять почему в консоль выводит ве цифры, а в оле для результатов только одну, и ещё не смог объединить эту функцию с той которая просто проверяет число на совершенность
function perfect2(a, b){
    for(let i=a; i<b;i++){
        rez = 0;
        for(let j=1; j<i; j++){
            if(i%j===0){
                rez+=j;
            }
            if(rez===i){
                return i;
                console.log(i);
            }
        }
    }
}

function perfectNumbers(){
    let a = getNumber("perfectNumber1"),
        b = getNumber("perfectNumber2");
    if(isNaN(a) || isNaN(b)){
        printNumber("perfect2_rez", "Entet number!");
        return;
    }
    printNumber("perfect2_rez", perfect2(a, b));

}

// 7 and 8
function addZero(n){
    return (n<10)?"0"+n:n;
}

function timeFormat(a=0, b=0, c=0){
    return addZero(a)+":"+addZero(b)+":"+addZero(c);
}

function time(){
    let a = getNumber("hours"),
        b = getNumber("minutes");
        c = getNumber("seconds");
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        printNumber("time_rez", "Enter correct numbers");
        return;
    }
    printNumber("time_rez", timeFormat(a, b, c));
    printNumber("time2_rez", timeInSeconds(a, b, c));
}

function timeInSeconds(a=0, b=0, c=0){
    a = a*3600;
    b = b*60;
    rez = a+b+c;
    return rez;
}

// 9
function seconds(s){
    let m = 0;
    let h = 0;
    m = Math.floor(s/60)%60;
    h = Math.floor(s/3600);
    s = s%60;
    return addZero(h)+":"+addZero(m)+":"+addZero(s);
}

function secondsToTime(){
    let s = getNumber("seconds2");
    if(isNaN(s) && s<0){
        printNumber("seconds_rez", "Enter correct data")
    }
    printNumber("seconds_rez", seconds(s));
}