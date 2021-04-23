
// 1
function yourName(){
    let name = prompt("Введите имя.");
    rez = "Привет, " + name + "!";
    alert(rez);
}
// 2
function yourBday(){
    let date = parseInt(prompt("Введите год своего рождения."));
    const thisYear = new Date().getFullYear();
    rez = thisYear - date;
    alert(`Так получается, что вам ${rez} лет:/`);
}
// 3
function perimeter(){
    let length = parseFloat(prompt("Введите длинну стороны квадрата.")),
        perim = length * 4;
    alert(`Периметр квадрата равен: ${perim}`);
}
// 4
function area(){
    let radius = parseFloat(prompt("Введите радиус окружности.")),
        rez = Math.PI * Math.pow(radius, 2);
    alert(`Площадь окружности: ${rez.toFixed(2)}`);    

}
// 5
function distance(){
    let dist = parseFloat(prompt("Введите расстояние между городами.")),
        time = parseFloat(prompt("Введите время, за которое хотите доехать.")),
        speed = dist/time;
    alert(`Вам нужно ехать со скоростью ${Math.floor(speed)} км/ч`);
}
// 6
function convert(){
    let dollar = parseFloat(prompt("Введите сумму в долларах."));
    const coef = 0.83;
    let euro = dollar * coef;
    alert(`Вы получите ${euro.toFixed(3)} Евро. Курс: 0.83.`);
}
// 7
function files(){
    let storage = parseInt(prompt("Введите объем накопителя (Гб)."));
    const file = 820,
        gigs = 1024;
    let rez = (storage * gigs)/820;
    alert(`На флешку помещается ${Math.floor(rez)} файлов объемом 820Мб.`);

}
// 8
function chocolate(){
    let money = parseFloat(prompt("Введите количество денег.")),
        costChoc = parseFloat(prompt("Введите стоимость шоколадки.")),
        quantity = money / costChoc,
        delOfMoney = money % costChoc;
    alert(`На ${money} грн. вы можете купить ${Math.floor(quantity)} шоколадкок, сдачи останется ${delOfMoney.toFixed(2)} грн.`);
}

// 9
function lastToFirst(){
    // debugger;
    const number = parseInt(prompt("Enter number"));
    //234=> 4*100 + 3*10 + 2 = 432

    let s = 0,
        d = 0,
        e = 0,
        rez = 0;
    s = parseInt(number/100);//2
    d = parseInt((number%100)/10);//3
    e = number%10;//4

    rez = e*100+d*10+s;
    alert(rez);
    
    

}
// 10
function contribution(){
    let summa = parseFloat(prompt("Введите сумму депозита:"));
    const percent = 1.05;
    let summaPer = summa * percent,
        percentage = summaPer - summa,
        rez = (percentage / 365)*60;
    alert(`Кол-во процентов за два месяца: ${rez.toFixed(2)} грн.`);
}