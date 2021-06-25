class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get radiusCircle(){
        return this.radius;
    }
    set circleRadius(newRadius){
        this.radius = newRadius;
    }
    get circleDiametr(){
        return this.radius*2;
    }
    circleArea(){        
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        
    }
    circleLenght(){
        return this.circleArea()*2;
    }    
}


let circle = new Circle(20);

radius.innerHTML = 'Radius: ' + circle.radiusCircle;
diametr.innerHTML = 'Diametr: ' + circle.circleDiametr;
area.innerHTML = 'Area: ' + circle.circleArea();
circle_length.innerHTML = 'Lenght: ' + circle.circleLenght();



/* =============== */


class Employee{
    constructor(firstName, lastName, position){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
}

let bankWorkers = [
    new Employee('Dave', 'Broobeck', 'manager'),
    new Employee('Sara', 'Conor', 'cleaner'),
    new Employee('Dave', 'Kimm', 'assistant')
];

class EmpTable {
    constructor(table = bankWorkers){
        this.table = [...table];
    }

    getHtml(){
        let tableBank = document.getElementById("bank_table");
        let html = '';
        for(let tbl of this.table){
            html+=`
                <tr style="border: 1px solid #000;">
                    <td>${tbl.firstName}</td>
                    <td>${tbl.lastName}</td>
                    <td>${tbl.position}</td>
                </tr>            
            `;
        }
        tableBank.innerHTML = html;
    }
}

let BankTable = new EmpTable(bankWorkers);
BankTable.getHtml();

let bank = new Employee(bankWorkers);

/* ================================== */
/* class LoadingMarker {
    constructor(ink) {
        this.ink = ink;
    }
    loadMarker(ink) {
        if (!this.ink) {
            this.ink += 10;
        }
        // console.log(this.ink);
    }


} */


/* class Marker extends LoadingMarker{
    constructor(color, ink){
        super(ink);
        this.color = color;
        this.ink = ink;
    }
    printText(){
        let str = document.getElementById('text_marker').value;
        let rez = `<p><span style='background-color: ${this.color}'>`;
        let closed = false;
        for(let i=0; i<str.length;i++){
            if(str[i]!=' ' && this.ink>0){
                this.ink-=0.5;
            }
            if(this.ink===0 && !closed){
                rez+='</span>';
                closed = true;                
            }
            rez+= str[i];
        }
        rez = document.getElementById('text_get').innerHTML = rez;
        console.log(this.ink);
    }
}





text_marker.addEventListener('change', (e)=>{
    loadedMarker.printText();

});

load_marker.addEventListener('click', (e)=>{
    // console.log(e.target);
    loadedMarker.loadMarker();
    console.log(markerRed.ink);
});


let loadedMarker = new LoadingMarker('red', 50); */


/* Маркер мне помогла сделать Лена, поэтому это не мой маркер */

class Marker {
    constructor(options) {
        this.color = options.color;
        this.quantity = options.quantity;
    }
    print(text) {
        let style = `color: ${this.color}`;
        let d = document.getElementById('res_text2');
        d.innerHTML = (`<p style="${style}">${text}</p>`)
    }
    color_text(text) {
        // debugger;
        let style = `color: ${this.color}`;
        let a = this.quantity;
        let str = "";
        for (let i = 0; i < text.length; i++) {
            if (a !== 0) {
                if (text[i] !== " ") {
                    a = a - 0.5;
                }
                str += text[i];
            } else {

                alert("Чернила закончились! Заправьте маркер!");
                break;
            }
        }
        this.print(str)
    }
}


const blueText = new Marker({
    color: "blue",
    quantity: 2
});


function go_marker() {
    debugger;
    let text_1 = document.getElementById('text').value;
    if (text_1 !== "") {
        blueText.color_text(text_1);
        let btn = document.getElementById('btn-c')
        btn.classList.add('close');

    } else {
        alert("Введите текст");
    }

}



class Fill_marker extends Marker {
    fill() {
        this.quantity += 10;
        console.log(this.quantity);
    }
}


let redText = new Fill_marker({
    color: "blue",
    quantity: 2
});


function fill_m() {
    debugger;
    let text_1 = document.getElementById('text').value;
    redText.fill(10);
    redText.color_text(text_1);
}
