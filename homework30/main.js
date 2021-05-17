// я сразу прошу прощения за отвратительные стили, вообще голова не варит

let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let list = document.createElement("ul");  
list.setAttribute('style', 'list-style: none;');    
for(let musicList of playList){
    let listItem = document.createElement("li"),
        author = document.createElement("span"),
        song = document.createElement("span");
    author.setAttribute('style', 'font-family: Arial, Helvetica, sans-serif; font-weight: 700;');
    author.innerText = `${musicList.author} -  `;
    listItem.prepend(author);
    song.setAttribute('style', 'font-family: Verdana, Geneva, Tahoma, sans-serif;');
    song.innerText = `${musicList.song};`;
    listItem.append(song);
    
    list.prepend(listItem);
}

/* ========================================== */

const btnOpen = document.createElement('button'),
    modalWrap = document.createElement('div'),
    modalHeader = document.createElement('div'),
    modalFooter = document.createElement('div'),
    modalClose = document.createElement('button'),
    shadow = document.createElement('div');

modalWrap.setAttribute('style', 'position: fixed; z-index: 10001; top:25%; left:35%; width: 90%; max-width: 400px; border:2px dotted pink; border-radius: 3px; text-align:center; padding:10px 0 10px; display:none;');
modalHeader.innerText = 'Your playlist for today';
modalClose.innerText = 'CLOSE';
shadow.setAttribute('style', 'position:fixed; left:0; top:0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, .8); display: none; backdrop-filter: blur(3px); z-index: 10000;');
btnOpen.innerText = 'Open MODAL';



document.body.append(shadow);
document.body.append(btnOpen);
modalWrap.append(modalHeader);
modalWrap.append(list);
modalWrap.append(modalClose);
document.body.append(modalWrap);

btnOpen.onclick = function(){
    modalWrap.style.display ='block';
    shadow.style.display = 'block';
    
}

modalClose.onclick = function(){
    modalWrap.style.display = 'none';
    shadow.style.display = 'none';
}

/* ============================== */



let corp = document.createElement("div"),
    red = document.createElement("div"),
    yellow = document.createElement("div"),
    green = document.createElement("div"),
    btn = document.createElement("button");
corp.setAttribute('class', 'trafficLight');
corp.setAttribute('style', 'width: 210px; height: 800px; border:2px solid #000; margin-bottom: 60px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; border-radius:105px; background-color:#262626');

red.setAttribute('class', 'circle red');
red.setAttribute('style', 'width: 150px; height: 150px; border-radius: 100%; border:1px solid #000; background-color:#3f3939;');

yellow.setAttribute('class', 'circle yellow');
yellow.setAttribute('style', 'width: 150px; height: 150px; border-radius: 100%; border:1px solid #000; background-color:#3f3939;');

green.setAttribute('class', 'circle green');
green.setAttribute('style', 'width: 150px; height: 150px; border-radius: 100%; border:1px solid #000; background-color:#3f3939;');

btn.innerText = 'NEXT';


document.body.prepend(corp);
corp.prepend(red, yellow, green, btn);


let i = -1;
btn.onclick = () => { 
    i++;
    let arr = ['red', 'yellow', 'green'],
        circle = document.querySelectorAll('.circle');
    if(circle[i-1]){
        circle[i-1].style.backgroundColor = '';
    }
    if(i==arr.length){
        i=0;
    }
    circle[i].style.backgroundColor = arr[i];

};





