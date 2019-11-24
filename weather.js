const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, coordsObj);
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(JSON.stringify(coordsObj));
}

function handleGeoError() {
    console.error("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,
                                             handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {

    }
}

function init () {
    loadCoords();
}

init();
