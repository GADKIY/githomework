// карта у меня получилась, но не получиось сделать подгрузку, я долго мучился, но так и не вышло

let map;

const PLACES = [
    {
        lat: 49.091678,
        lng: 33.451642,
        title: 'Дом',
        descr: 'Тут я живу',
        type:'green'
    },
    {
        lat: 49.06920553701443,
        lng: 33.41621841257502,
        title: 'Барбершоп',
        descr: 'Тут я стригусь',
        type:'yellow'
    },
    {
        lat: 49.0668392918799,
        lng: 33.4235267653332,
        title: 'Спортивный клуб',
        descr: 'Тут я становлюсь лучшей версией себя по словам моего тренера.',
        type:'green'
    },
    {
        lat: 49.06658554032959,
        lng: 33.409490140643825,
        title: 'Кафешка',
        descr: 'Тут я пью кофэ.',
        type:'blue'
    },
    {
        lat: 49.06717316211137,
        lng: 33.410891530123514,
        title: 'Кафешка 2',
        descr: 'И тут я пью кофэ.',
        type:'blue'
    },
    {
        lat: 49.066004899967034,
        lng: 33.41087865794536,
        title: 'Вкусная шаурма',
        descr: 'Реально вкусная, стоит пропробовать.',
        type:'orange'
    },
    {
        lat: 49.07676506045673,
        lng: 33.42614295371157,
        title: 'Парк',
        descr: 'Очень симпатичный маленький парк.',
        type:'green'
    },
    {
        lat: 49.0905375986733, 
        lng: 33.42793043962265,
        title: 'Макдональдз',
        descr: 'Ну что тут говорить?',
        type:'orange'
    },
    {
        lat: 49.1226549062642, 
        lng: 33.4402069202634,
        title: 'Кинотеатр',
        descr: 'Тут киношки смотрю.',
        type:'yellow'
    },
    {
        lat: 49.18131867813111, 
        lng: 33.46387862710749,
        title: 'Работа',
        descr: 'Тут работу работаю (только тссс, об этом никому нельзя знать).',
        type:'red'
    }
    
]



function initMap() {
    map = L.map('map').setView([49.091678, 33.451642], 9);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    let LeafIcon = L.Icon.extend({
        options: {
            iconSize: [25, 48],
            iconAnchor: [25, 48],
            popupAnchor: [-10, -48]
        }
    });
    
    let markers = L.markerClusterGroup();

    for(let mark of PLACES){
        let marker = L.marker([mark.lat, mark.lng], {icon: new LeafIcon({iconUrl: 'assets/markers/leaf-'+mark.type+'.png'})}).bindPopup(`
        <h3>${mark.title}</h3>
        <p>${mark.descr}</p>
        `); 
        markers.addLayer(marker);               
        map.addLayer(markers);
    }

    let lc = L.control.locate({
        position: 'topright',
        strings:{
            title: "Show me"
        }
    }).addTo(map);
     
}


map_link.addEventListener('click', function () {
    /* let clust = document.createElement("link");
    clust.setAttribute("rel", "stylesheet");
    clust.setAttribute("href", "assets/plugins/cluster/MarkerCluster.css");
    document.head.append(clust);
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "assets/plugins/leaflet/leaflet.css");
    document.head.append(link); */


    // let script = document.createElement('script');
    // script.setAttribute("src", "assets/plugins/leaflet/leaflet.js");
    // document.body.append(script);
    // script.onload = initMap;
    /* let script_1 = false;
    script.onload = function(){ script_1 = true;};

    let clustScript = document.createElement("script");
    clustScript.setAttribute("src", "assets/plugins/cluster/leaflet.markercluster.js");
    document.body.append(clustScript);
    let script_2 = false;
    clustScript.onload = function(){ script_2 = true};

    const indID = setInterval(()=>{
        if(script_2 && script_1){
            clearInterval(indID);
            initMap();
        }
    }, 100); */

    map_link.remove();
    map_pic.remove();
    initMap();
});
