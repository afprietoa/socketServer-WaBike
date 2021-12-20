const Markers = require('./markers');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.markers = new Markers();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            socket.emit('active-markers', this.markers.active)

            socket.on('new-marker', (marker)=>{
               this.markers.addMarker(marker) 

               socket.broadcast.emit('new-marker', marker)
            })
            socket.on('updated-marker', (marker) =>{
                this.markers.updateMarker(marker)

                socket.broadcast.emit('updated-marker', marker)
            })
        
        });
    }


}


module.exports = Sockets;