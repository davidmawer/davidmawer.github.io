        var runLayer = omnivore.gpx('Rides/1.gpx', null, customLayerRide)
            .on('ready', function() {
                map.fitBounds(runLayer.getBounds());
            })
            .addTo(map);
