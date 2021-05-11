const topPanel = {
    info(text = "Some text here", autoclose = true) {
        this.showPanel(text, "info", autoclose);
    },
    success(text = "Some text here", autoclose = true) {
        this.showPanel(text, "success", autoclose);
    },
    danger(text = "Some text here", autoclose = false) {
        this.showPanel(text, "danger", autoclose);
    },
    warning(text = "Some text here", autoclose = false) {
        this.showPanel(text, "warning", autoclose);
    },
    showPanel(text, type, autoclose) {
        let btn = autoclose
            ? ""
            : '<button onclick="topPanel.closePanel()>&times;</button>';
        let h = `<div id="top_panel" class="panel_${type}">
        <p>${text}</p>${btn}<div></div>`;
        if (document.getElementById("top_panel") !== null) {
            this.closePanel();
        }
        document
            .getElementsByTagName("body")[0]
            .insertAdjacentHTML("afterbegin", h);
        if (autoclose) {
            const _this = this;
            setTimeout(function () {
                _this.closePanel();
            }, 3000);
        }
    },
    closePanel() {
        document.getElementById("top_panel").remove();
    },
};

/* 
    {
        title:'',
        price:0.00,
        qty:0,
        buy:false
    }
*/

let CART = [
    {
        title: 'Milk',
        price: 22.5,
        qty: 4,
        buy:false
    },
    {
        title: 'Beer',
        price: 25.30,
        qty: 3,
        buy:false
    }
];

const cartAction = {
    add: function($prod){
        $prod.buy = false;
        
        let isset_prod = CART.find(function(el){
           if(el.title==$prod.title){
               return el;
           } 
        });
        if(isset_prod!==undefined){
            const new_qty = $prod.qty + isset_prod.qty;
            const prod_ind = CART.findIndex((el)=>el.title===$prod.title);                            
            CART[prod_ind].qty = new_qty;
            CART[prod_ind].buy = false;
        }else{
            CART.push($prod);

        }
    },
    buyed(k){
        if(CART[k].buy){
            CART[k].buy = false;
        }else{
            CART[k].buy = true;

        }
        printCart();
    },
    remove(k){
        if(!CART[k].buy){
            if(confirm("realy delete product"+CART[k].title+"?")){
                
                CART.splice(k, 1);
                printCart();
            }
        }else{
            topPanel.warning('Product already buyed!', true);
        }
        
    },
    maxTotal(){
        let max_key = 0;
        let max_total = CART[0].price*CART[0].qty;
        for(let i=1; i<CART.length;i++){
            if((CART[i].price*CART[i].qty)>max_total){
                max_total = CART[i].price * CART[i].qty;
                max_key = 1;
            }
        }
        return {
            title: CART[max_key].title,
            total: max_total
        };
    }
};

const max_style = [
    {
        prop:"color",
        value: "#999"
    },
    {
        prop:"font-size",
        value: "30px"
    },
    {
        prop: "text-decoration",
        value: "underline"
    },
    {
        prop: "padding",
        value: "30px 0"
    },
    {
        prop: "text-align",
        value: "center"
    }
]

function maxTotalProduct(){
    const prod = cartAction.maxTotal();

    let stl = '';
    for(let i=0;i<max_style.length;i++){
        stl+=`${max_style[i].prop}:${max_style[i].value};`
    }
    const rez = `
            <p style="${stl}"><b>${prod.title}</b> - ${prod.total.toFixed(2)}</p>
    `;
    document.getElementById("max_prod").innerHTML = rez;
}



function cartBuy(){
    const title = document.getElementById('prodName').value,
        price = parseFloat(document.getElementById('prodPrice').value),
        qty = parseInt(document.getElementById('prodQTY').value);
    let valid = true,
        errMsg = [];
    if(title===""){
        valid = false;
        errMsg.push("Enter product name.");
    }
    if(isNaN(price) || price<=0){
        valid = false;
        errMsg.push("Enter product price.");
    }
    if(qty<=0){
        valid = false;
        errMsg.push("Enter product qty.");
    }
    if(valid){
        cartAction.add({
            title: title,
            price: price,
            qty: qty            
        });                    
        document.getElementById('prodName').value = '';
        document.getElementById('prodPrice').value = '';
        document.getElementById('prodQTY').value = '1';
        document.getElementById('prodName').focus();
        printCart();
    }else{
        topPanel.warning(errMsg.join(' '), true);
    }
}




function printCart(){
    let rez = "<ul>",
        cartTotal = 0;
    for(let i=0;i<CART.length;i++){
        const prod = CART[i];
        const isBuy = prod.buy?'<span class="badge bg-success">&#10003;</span>':'<span class="badge bg-danger">&times;</span>';
        const prodTotal = prod.qty * prod.price;
        cartTotal+=prodTotal;
        rez+=`
            <li>
                ${isBuy} <b>${prod.title}</b> ${prod.qty} X ${prod.price.toFixed(2)} = ${prodTotal.toFixed(2)}<br>
                <button type="button" class="btn btn-info btn-sm" onclick="cartAction.buyed(${i})">Buyed</buton>
                <button type="button" class="btn btn-danger btn-sm" onclick="cartAction.remove(${i})">Delete</buton>
            </li>    
        `;
    }
    rez+=`<li><b>TOTAL: </b>${cartTotal.toFixed(2)}</li>`;
    rez+="</ul>";
    document.getElementById("cart_list").innerHTML = rez;
}

printCart();


/* ================================== */


const AUDIENCE = [
    {
        nameFaculty: "Biology",
        nameAud: "Orange",
        numOfSeats: 10
    },
    {
        nameFaculty: "Biology",
        nameAud: "Grey",
        numOfSeats: 16
    },
    {
        nameFaculty: "History",
        nameAud: "White",
        numOfSeats: 14
    },
    {
        nameFaculty: "History",
        nameAud: "Red",
        numOfSeats: 19
    },
    {
        nameFaculty: "Programming",
        nameAud: "Yellow",
        numOfSeats: 20
    },
    {
        nameFaculty: "Programming",
        nameAud: "Green",
        numOfSeats: 12
    },
    {
        nameFaculty: "Mechanics",
        nameAud: "Black",
        numOfSeats: 18
    },
    {
        nameFaculty: "Mechanics",
        nameAud: "Brown",
        numOfSeats: 17
    },
];

const GROUPS = [
    {
        nameFaculty: "Biology",
        nameGroup: "Biochemistry",
        numOfPers: 9
    },
    {
        nameFaculty: "Biology",
        nameGroup: "Biophysics",
        numOfPers: 12
    },
    {
        nameFaculty: "History",
        nameGroup: "Anthropology",
        numOfPers: 18
    },
    {
        nameFaculty: "History",
        nameGroup: "Microhistory",
        numOfPers: 7
    },
    {
        nameFaculty: "Programming",
        nameGroup: "Basic",
        numOfPers: 18
    },
    {
        nameFaculty: "Programming",
        nameGroup: "Assembler",
        numOfPers: 10
    },
    {
        nameFaculty: "Mechanics",
        nameGroup: "Theoretical mechanics",
        numOfPers: 18
    },
    {
        nameFaculty: "Mechanics",
        nameGroup: "Resistance of materials",
        numOfPers: 14
    }

];

function printAud(){
    let rez = `
            <ul>
                <li><button type="button" class="btn btn-primary" onclick="sortAudName()">Sort A-Z</button>
                    <button type="button" class="btn btn-info" onclick="sortAudSeats()">Sort 0-9</button>
                </li>
    `;
    for(let i=0; i<AUDIENCE.length; i++){
        const list = AUDIENCE[i];
        rez +=`
            <li><i>Faculty of ${list.nameFaculty}</i><br> Audience name: ${list.nameAud}<br><b>${list.numOfSeats}</b> seats.<hr></li>
        `;
    }
    rez += "</ul>";
    document.getElementById("aud_list").innerHTML = rez;
}

function sortAudName(){
    AUDIENCE.sort(function (a, b) {
        let nameA = a.nameAud.toLocaleLowerCase(),
            nameB = b.nameAud.toLocaleLowerCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    });
    printAud();
}

function sortAudSeats(){
    AUDIENCE.sort(function (a, b){        
        return a.numOfSeats - b.numOfSeats;
    });
    printAud();
}

function filterAud(){    
    let rez = "<ul>";
    for(let auditory of AUDIENCE){
        for(let checkbox of document.getElementsByName("choise")){
            if (checkbox.value === auditory.nameFaculty.toLowerCase() && checkbox.checked){
                rez += `<li><i>Faculty of ${auditory.nameFaculty}</i><br> Audience name: ${auditory.nameAud}<br><b>${auditory.numOfSeats}</b> seats.<hr></li>`;
                break;
            }
        }
    }
    rez+="</ul>";
    document.getElementById("aud_list2").innerHTML = rez;
    return rez;
}

/* function selectAud(){
    debugger
    // let a = AUDIENCE[0].numOfSeats,
    //     b = GROUPS[1].numOfPers;
    // if(a===b){
    //     console.log("nice!");
    // }else{
    //     console.log("fuck!");
    // }
    let sel = document.getElementById("selected").value.toLowerCase();
    let rez = "<ul>";
   for(let i=0;i<AUDIENCE.length;i++){
       let aud = AUDIENCE[i];
       for(let j=0; j<GROUPS.length;j++){
           let gro = GROUPS[i].nameGroup.toLocaleLowerCase();
           if(sel===gro.nameGroup && aud.numOfSeats<=gro.numOfPers){
               rez += `<li><i>Faculty of ${gro.nameFaculty}</i><br> Audience name: ${gro.nameGroup}<br><b>${gro.numOfPers}</b> seats.<hr></li>`;
               break;
            }
       }
       break;
   }
    rez+="</ul>";
    document.getElementById("aud_list2").innerHTML = rez;
    return rez;
} */
/* function selectAud() {
    debugger
    // let a = AUDIENCE[0].numOfSeats,
    //     b = GROUPS[1].numOfPers;
    // if(a===b){
    //     console.log("nice!");
    // }else{
    //     console.log("fuck!");
    // }
    let sel = document.getElementById("selected").value.toLowerCase();
    let rez = "<ul>";
    for (let i = 0; i < AUDIENCE.length; i++) {
        let aud = AUDIENCE[i];
        for (let j = 0; j < GROUPS.length; j++) {
            let gro = GROUPS[i].nameGroup.toLocaleLowerCase();            
            if (sel === gro.nameGroup && aud.numOfSeats <= gro.numOfPers) {
                switch (sel.value) {
                    case "biochemistry":
                        rez += `<li><i>Faculty of ${gro.nameFaculty}</i><br> Audience name: ${gro.nameGroup}<br><b>${gro.numOfPers}</b> seats.<hr></li>`;
                    }
                    
                }
            }
            
        }
        
        
    rez += "</ul>";
    document.getElementById("aud_list2").innerHTML = rez;
    return rez;
} */

function selectAud() {
    let sel = document.getElementById("selected").value.toLowerCase();
    let rez = "<ul>";
    let group;
    /* for(let i=0;i<AUDIENCE.length;i++){
        let aud = AUDIENCE[i];
        for(let j=0; j<GROUPS.length;j++){
            let gro = GROUPS[i].nameGroup.toLocaleLowerCase();
            if(sel===gro && aud.numOfSeats<=gro.numOfPers){
                rez += `<li><i>Faculty of ${gro.nameFaculty}</i><br> Audience name: ${gro.nameGroup}<br><b>${gro.numOfPers}</b> seats.<hr></li>`;
                break;
             }
        }
        
    } */

    for (let g of GROUPS) {
        if (sel === g.nameGroup.toLowerCase()) {
            group = g;
            break;
        }
    }
    for (let aud of AUDIENCE) {
        if (aud.nameFaculty.toLowerCase() === group.nameFaculty.toLowerCase()) {
            if (aud.numOfSeats >= group.numOfPers) {
                rez += `<li><i>Faculty of ${aud.nameFaculty}</i><br> Audience name: ${aud.nameAud}<br><b>${aud.numOfSeats}</b> seats.<hr></li>`;
            }
        }
    }
    /* for(let aud of AUDIENCE){
         if(!(aud.nameFaculty.toLowerCase() === group.nameFaculty.toLowerCase())){            
             continue;
         }
         if(aud.numOfSeats < group.numOfPers){            
             continue;
         }
         rez += `<li><i>Faculty of ${aud.nameFaculty}</i><br> Audience name: ${aud.nameAud}<br><b>${aud.numOfSeats}</b> seats.<hr></li>`;
 
     } */
    /* for(let aud of AUDIENCE){
        let audN = aud.nameFaculty.toLowerCase() === group.nameFaculty.toLowerCase(),
            audS = aud.numOfSeats >= group.numOfPers;
        if(audN && audS){
            rez += `<li><i>Faculty of ${aud.nameFaculty}</i><br> Audience name: ${aud.nameAud}<br><b>${aud.numOfSeats}</b> seats.<hr></li>`;
        }
    } */

    rez += "</ul>";
    document.getElementById("aud_list2").innerHTML = rez;
    return rez;
}

printAud();