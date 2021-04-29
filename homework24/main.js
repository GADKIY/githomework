// 1
function number() {    
    let numberOt = parseInt(document.getElementById("numberOt").value),
        numberDo = parseInt(document.getElementById("numberDo").value);
    let rez = 0;    
    if(!isNaN(numberOt) && !isNaN(numberDo)){
        for(let i = numberOt; i<numberDo;i++){
            rez+=i;
        }
        document.getElementById("number_rez").innerText = rez;
    }else{
        document.getElementById("number_rez").innerText = 'Введтиде числа!';
    }
}

// 2
function divider(){       
    let a = parseInt(document.getElementById("dividerNumber1").value),
        b = parseInt(document.getElementById("dividerNumber2").value);
    let rez = 0;
    if(!isNaN(a) && !isNaN(b)){        
        while(a !==0 && b !==0){
            if(a>b){
                a = a%b;
            }else{
                b = b%a;
            }
           rez = (a+b);
        }
        document.getElementById("divider_rez").innerText = rez;
    }else{
        document.getElementById("divider_rez").innerText = 'Введите числа!';
    }
}

// 3
function dividers(){  
    let a = parseInt(document.getElementById("dividersNumber").value);
    rez = 0;
    if(!isNaN(a) && a>0){
        for (let i = 1; i<=a; i++){
            if(a%i==0){
                rez += i + ", ";
            }
        }
        document.getElementById("dividers_rez").innerText = rez;
    }else{
        document.getElementById("dividers_rez").innerText = "Введите правильное число!";
    }
}

// 4
function quantity(){
    let a = parseInt(document.getElementById("quantNumber").value),
        rez = 0;
    if(!isNaN(a) && a>0){
        for(let i=0; a!=0; i++){
            a = (a/10).toFixed(0);        
            rez = i+1;
        }
        document.getElementById("quantity_rez").innerText = rez;
    }else{
        document.getElementById("quantity_rez").innerText = "Введите правильное число!";
    }

}

// 5
function tenNumbers(){
    debugger
    let evenNumber = 0,
        oddNumber = 0,
        zero = 0,
        positiveNumber = 0,
        negativeNumber = 0;
    for( let i = 1; i<=10; i++){
        let a = parseInt(prompt("Введите число."));
        if(a % 2 === 0 && a!==0){            
            evenNumber+=1;
            if(a>0){
                positiveNumber+=1;
            }else{
                negativeNumber+=1;
            }
        }else if(a % 2 !== 0 && a!==0){
            oddNumber+=1;
            if(a>0){
                positiveNumber+=1;
            }else{
                negativeNumber+=1;
            }
        }else if(a===0){
            zero+=1;        
        }else{
            alert("Введте число!");
        }
    }
    document.getElementById("tenNumbers_rez").innerText =`
        Вы ввели: 
        ${evenNumber} четных чисел,
        ${oddNumber} нечетных чисел, 
        ${zero} нулей,
        ${positiveNumber} положительных,
        ${negativeNumber} отрицательных чисел.
    `;
    i--;
}

//6
function calc(){
    do{
        let rez = 0,
            a = parseInt(prompt("Введите первое число: ")),
            b = parseInt(prompt("Введите второе число: "));
        if(!isNaN(a) && !isNaN(b)){
           let action = prompt("Что будем делать с этими числами?");
            switch(action){
                case '+':
                    rez = a+b;
                break;
                case '-':
                    rez = a-b;
                break;
                case '*':
                    rez = a*b;
                break;
                case '/':
                    rez = a/b;
                default:
                    alert("Выберите действие");
            }
        }else{
            alert("Введите число!");
        }
        alert(rez);
        answer = confirm("Считаем дальше?");
    }while(answer == true);
}

// 7
/* function move(){
    let a = parseInt(getElementById("parseNumber").value),
        b = parseInt(getElementById("moveNumber").value);

} */

// 8
function date(){
    let date = new Date(); //использовал объект Date()
    let day = date.getDay();  //после этого получили номер дня недели с помощью метода .getDay()  
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; //Чтобы получаь дни недели словами создали массив
    do{        
        alert(days[day]); //вывели актуальный день недели вызвав его из массива
        answer = confirm("Хотите узнать следующий день?"); 
        if (day < 6){  
            day++;
        }else{
            day=0;
        }                           
    }while(answer == true);     
}

/* function multiply(){
    debugger

    let a = parseInt(document.getElementById("multiply").value),
        rez = '';
        
    for (let i = 1; i<=a; i++){
        for (let j = 1; j<=a; j++){
            rez = i*j;
        }
        document.getElementById("multiply_rez").innerText = rez;
    }
} */