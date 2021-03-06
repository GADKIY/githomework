// 1
const aboutCar = {
    Brand:"Zaz",
    Model:"968A",
    "Year of manufacture":1973,
    "Average speed":65,
    distance(a){    
        let b = 0,
            c = 0,
            d = 0;    
        for(let i = 0; i<=b;i++){
            b = Math.floor(a/this["Average speed"]);
            c = Math.floor(d/4);
            d = b+c;        
        }
        return d;
    }
};

function car(){    
    let a = parseFloat(document.getElementById("distance").value);
    let h = '<ul>';    
    for(let k in aboutCar){
        if(typeof aboutCar[k]!=="function"){
            h += `<li><b>${k}: </b>${aboutCar[k]}</li>`;
        }
    }
    h += '</ul>';
    rez = aboutCar.distance(a);
    document.getElementById("carInfo_rez").innerHTML = h;
    document.getElementById("car_rez").innerHTML = `На даноном автомобиле вы сможете проехать такое расстояние за ${rez} часов.`;
    
}

/* function distance(a){    
    let b = 0,
        c = 0,
        d = 0;    
    for(let i = 0; i<=b;i++){
        b = Math.floor(a/65);
        c = Math.floor(d/4);
        d = b+c;        
    }
    return d;
} */

// 2
let fraction = {
    f1:{
        c:2,
        z:15
    },
    f2:{
        c:7,
        z:6
    },
    multiply(){
        c = this.f1.c*this.f2.c;
        z = this.f1.z*this.f2.z;
        return{c, z};
    },
    dividing(){
        c = this.f1.c*this.f2.z;
        z = this.f1.z*this.f2.c;
        return{c, z};
    },
    gcd(a, b){
        if(b===0){
            return a;
        }
        return this.gcd(b, a%b);
    },
    lcm(){
        return Math.abs(this.f1.z*this.f2.z)/this.gcd(this.f1.z, this.f2.z);
    },
    sub(n=true, m=true){
        // debugger
        let _lcm = this.lcm(this.f1.z, this.f2.z);
        let n1 = (_lcm/this.f1.z)*this.f1.c,
            n2 = (_lcm/this.f2.z)*this.f2.c,
            f3 = n?{c:n1-n2, z:_lcm}:{c:n1+n2, z:_lcm};
        if(m){
            return this.simplify(f3);
        }
        return f3;
    },
    simplify(a){
        let _gcd = this.gcd(Math.abs(a.c), Math.abs(a.z));
        return {c:a.c/_gcd, z:a.z/_gcd};
    }
}

function fa(){
    // debugger
    fraction.f1.c = parseInt(document.getElementById("f1c").value) || fraction.f1.c;
    fraction.f1.z = parseInt(document.getElementById("f1z").value) || fraction.f1.z;
    fraction.f2.c = parseInt(document.getElementById("f2c").value) || fraction.f2.c;
    fraction.f2.z = parseInt(document.getElementById("f2z").value) || fraction.f2.z;


    let rez = `
                <ul>
                    <li>Первая дробь: <sup>${fraction.f1.c}</sup>/<sub>${fraction.f1.z}</sub></li>
                    <li>Вторая дробь: <sup>${fraction.f2.c}</sup>/<sub>${fraction.f2.z}</sub></li>
                
    `;

    for(let checkbox of document.getElementsByName("choise")){
        if(checkbox.checked){
            switch(checkbox.value){
                case "0":
                    let mu = fraction.simplify(fraction.multiply());
                    rez+=`<li>Результат умножения: <sup>${mu.c}</sup>/<sub>${mu.z}</sub></li>`;
                    break;
                case "1":
                    let di = fraction.simplify(fraction.dividing());
                    rez+=`<li>Результат деления: <sup>${di.c}</sup>/<sub>${di.z}</sub></li>`;
                    break;
                case "2":
                    let su = fraction.sub();
                    rez+=`<li>Результат вычетания: <sup>${su.c}</sup>/<sub>${su.z}</sub></li>`;
                    break;
                case "3":
                    let add = fraction.sub(false);
                    rez+=`<li>Результат сложения: <sup>${add.c}</sup>/<sub>${add.z}</sub></li>`;
                    break;
            }
        }
    }
    rez+=`</ul>`;

    document.getElementById("fa_rez").innerHTML = rez;
}

 class DateTime {
     constructor(hours, minutes, seconds) {
        this.minutes = 0;
        this.hours = 0;
        if (seconds >= 60) {
            this.seconds = seconds % 60;
            this.minutes += Math.floor(seconds / 60);
        } else {
            this.seconds = seconds;
        }

        if (minutes >= 60) {
            this.minutes += minutes % 60;
            this.hours += Math.floor(minutes / 60);
        } else {
            this.minutes += minutes;
        }

        if (hours >= 24) {
            this.hours = 0;
        } else {
            this.hours += hours;
        }
    }

    //Time output
    printTime(id_output) {
        document.getElementById(id_output).innerHTML = `<div><b>${(this.hours<10)?'0'+this.hours:this.hours}</b>:<b>${(this.minutes<10)?'0'+this.minutes:this.minutes}</b>:<b>${(this.seconds<10)?'0'+this.seconds:this.seconds}</b></div>`;
    }

    update() {
        if(this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds%60;
        }else if (this.seconds < 0) {
            this.minutes -= Math.floor(Math.abs(this.seconds) / 60);
            if (this.seconds%60){
                --this.minutes;
                this.seconds = 60 + (this.seconds % 60);
            }
        }       
        if(this.minutes>=60){
            this.hours+=Math.floor(this.minutes/60);
            this.minutes = this.minutes%60;
        }else if(this.minutes < 0){
            this.hours -= Math.floor(Math.abs(this.minutes) / 60);
            if(this.minutes%60){
                --this.hours;
                this.minutes = 60 + (this.minutes % 60);
            }
        }
        if(this.hours >= 24 || this.hours < 0) {
            this.hours = 0;
        }

        // return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    addSeconds(seconds){
        this.seconds+=seconds;
        this.update();
        // return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    addMinutes(minutes){
        this.minutes+=minutes;
        this.update();
        // return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    addHours(hours){
        this.hours+=hours;
        this.update();
        // return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
}
let d = new Date();
let temp = new DateTime(d.getHours(), d.getMinutes(), d.getSeconds());

function time () {
    for (let text of document.getElementsByName("time")) {
        if(text.value){
            let num = parseInt(text.value);
            switch (text.id) {
                case "seconds":
                    temp.addSeconds(num);
                    break;
                case "minutes":
                    temp.addMinutes(num);
                    break;
                case "hours":
                    temp.addHours(num);
                    break;
            }
        }
    }
    temp.printTime("time_rez");
}

