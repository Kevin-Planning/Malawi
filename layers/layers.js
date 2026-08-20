var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_malawilocationscores_1 = new ol.format.GeoJSON();
var features_malawilocationscores_1 = format_malawilocationscores_1.readFeatures(json_malawilocationscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malawilocationscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malawilocationscores_1.addFeatures(features_malawilocationscores_1);
var lyr_malawilocationscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_malawilocationscores_1, 
                style: style_malawilocationscores_1,
                popuplayertitle: 'malawi-location-scores',
                interactive: true,
    title: 'malawi-location-scores<br />\
    <img src="styles/legend/malawilocationscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/malawilocationscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/malawilocationscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/malawilocationscores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/malawilocationscores_1_4.png" /> 4 - 5<br />' });
var format_malawidistricts_2 = new ol.format.GeoJSON();
var features_malawidistricts_2 = format_malawidistricts_2.readFeatures(json_malawidistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malawidistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malawidistricts_2.addFeatures(features_malawidistricts_2);
var lyr_malawidistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_malawidistricts_2, 
                style: style_malawidistricts_2,
                popuplayertitle: 'malawi-districts',
                interactive: true,
                title: '<img src="styles/legend/malawidistricts_2.png" /> malawi-districts'
            });
var format_Station_Details_Lat_Long_3 = new ol.format.GeoJSON();
var features_Station_Details_Lat_Long_3 = format_Station_Details_Lat_Long_3.readFeatures(json_Station_Details_Lat_Long_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Station_Details_Lat_Long_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Station_Details_Lat_Long_3.addFeatures(features_Station_Details_Lat_Long_3);
var lyr_Station_Details_Lat_Long_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Station_Details_Lat_Long_3, 
                style: style_Station_Details_Lat_Long_3,
                popuplayertitle: 'Station_Details_Lat_Long',
                interactive: true,
                title: '<img src="styles/legend/Station_Details_Lat_Long_3.png" /> Station_Details_Lat_Long'
            });
var format_planned_4 = new ol.format.GeoJSON();
var features_planned_4 = format_planned_4.readFeatures(json_planned_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_planned_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_planned_4.addFeatures(features_planned_4);
var lyr_planned_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_planned_4, 
                style: style_planned_4,
                popuplayertitle: 'planned',
                interactive: true,
    title: 'planned<br />\
    <img src="styles/legend/planned_4_0.png" /> Hub<br />\
    <img src="styles/legend/planned_4_1.png" /> Swap<br />\
    <img src="styles/legend/planned_4_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_malawilocationscores_1.setVisible(true);lyr_malawidistricts_2.setVisible(true);lyr_Station_Details_Lat_Long_3.setVisible(true);lyr_planned_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_malawilocationscores_1,lyr_malawidistricts_2,lyr_Station_Details_Lat_Long_3,lyr_planned_4];
lyr_malawilocationscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_malawidistricts_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm1_name': 'adm1_name', });
lyr_Station_Details_Lat_Long_3.set('fieldAliases', {'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_planned_4.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', });
lyr_malawilocationscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_malawidistricts_2.set('fieldImages', {'fid': '', 'adm2_name': 'TextEdit', 'adm1_name': 'TextEdit', });
lyr_Station_Details_Lat_Long_3.set('fieldImages', {'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_planned_4.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', });
lyr_malawilocationscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_malawidistricts_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm1_name': 'no label', });
lyr_Station_Details_Lat_Long_3.set('fieldLabels', {'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_planned_4.set('fieldLabels', {'fid': 'no label', 'Type': 'inline label - always visible', });
lyr_planned_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});