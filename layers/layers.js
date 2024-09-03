var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parislocations_1 = new ol.format.GeoJSON();
var features_parislocations_1 = format_parislocations_1.readFeatures(json_parislocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parislocations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parislocations_1.addFeatures(features_parislocations_1);
var lyr_parislocations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parislocations_1, 
                style: style_parislocations_1,
                popuplayertitle: "paris locations",
                interactive: true,
                title: '<img src="styles/legend/parislocations_1.png" /> paris locations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_parislocations_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_parislocations_1];
lyr_parislocations_1.set('fieldAliases', {'id': 'id', 'Name': 'Place Name', });
lyr_parislocations_1.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', });
lyr_parislocations_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_parislocations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});