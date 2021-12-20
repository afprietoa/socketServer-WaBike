

class Markers {

    constructor(){
        this.active = {};
    }
    addMarker(marker){
        this.active[marker.id] = marker;
        return marker;
    }
    removeMarker(id){
        delete this.active[id];
    }
    updateMarker(marker){
        this.active[marker.id] = marker;
    }
}

module.exports = Markers;

