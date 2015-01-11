var placeholdergeojson = (function(window, document, undefined) {
    
    var Extent = {
        xmin: -180,
        ymin: -90,
        xmax: 180,
        ymax: 90
    };
    var Bounds = [];
    var FeatureCollection = {
        type: 'FeatureCollection',
        features:[]
    };
   
    function generateFeature() {

        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: generateCoordinates()
            },
            properties: {
                name: 'placeholder',
                description: 'placeholder'
            }
        };

    }

    function generateCoordinates(){

        return [ (Math.random() * (Extent.xmax - Extent.xmin) + Extent.xmin).toFixed(4), (Math.random() * (Extent.ymax - Extent.ymin) + Extent.ymin).toFixed(4)];
       
    }

    //Public API
    return {
        /*
            options.extent //Extent to generate in
            options.count  //Number of points to generate
            options.mockdata //include fake data?

        */
        placeholderPoints: function(options) {

            Extent = (options.extent !== undefined) ? options.extent : Extent;
            
            var objArray = [];
            for (var i = 0; i < options.count; i++) {
                var obj = generateFeature();
                FeatureCollection.features.push(generateFeature());
                Bounds.push( { lon: obj.geometry.coordinates[0], lat: obj.geometry.coordinates[1]});
            }
            return {geojson: FeatureCollection, extent: Bounds};
            
        }
    };

})(this, this.document);