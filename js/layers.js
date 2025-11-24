ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32639").setExtent([529481.934300, 3935975.038300, 539503.149700, 3950921.592500]);
var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'محدوده واحد جنوب',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> محدوده واحد جنوب'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'محدوده مرکز',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> محدوده مرکز'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'بیمارستان',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> بیمارستان'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'مرکز',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> مرکز'
            });
var format_paygah_gheyre_zamime_5 = new ol.format.GeoJSON();
var features_paygah_gheyre_zamime_5 = format_paygah_gheyre_zamime_5.readFeatures(json_paygah_gheyre_zamime_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_paygah_gheyre_zamime_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paygah_gheyre_zamime_5.addFeatures(features_paygah_gheyre_zamime_5);
var lyr_paygah_gheyre_zamime_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paygah_gheyre_zamime_5, 
                style: style_paygah_gheyre_zamime_5,
                popuplayertitle: 'paygah_gheyre_zamime',
                interactive: true,
                title: '<img src="styles/legend/paygah_gheyre_zamime_5.png" /> paygah_gheyre_zamime'
            });

lyr_OSM_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_paygah_gheyre_zamime_5.setVisible(true);
var layersList = [lyr_OSM_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr_paygah_gheyre_zamime_5];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Name_1': 'Name_1', 'jamiyat': 'jamiyat', 'D_Farvardi': 'D_Farvardi', 'D_Ordibehe': 'D_Ordibehe', 'D_Khordad': 'D_Khordad', 'COD_ADD': 'COD_ADD', 'Madar_bard': 'Madar_bard', 'B_fesharkh': 'B_fesharkh', 'B_diyabet': 'B_diyabet', 'reagion': 'reagion', 'gamiyat': 'gamiyat', 'persenel': 'persenel', 'khadamat_m': 'khadamat_m', 'madar_ba_1': 'madar_ba_1', 'm_koodak': 'm_koodak', 'm_nojavan': 'm_nojavan', 'm_javan': 'm_javan', 'm_miansal': 'm_miansal', 'm_salmand': 'm_salmand', 'bimar_sell': 'bimar_sell', 'bimarybise': 'bimarybise', 'qarbalgari': 'qarbalgari', 'bimar_diab': 'bimar_diab', 'm_bimar_d': 'm_bimar_d', 'bimar_hype': 'bimar_hype', 'm_bimar_hy': 'm_bimar_hy', 'mahale': 'mahale', 'vis_pezesh': 'vis_pezesh', 'vis_dandan': 'vis_dandan', 'daramadp': 'daramadp', 'daramadd': 'daramadd', 'parastari': 'parastari', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', });
lyr__4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'X': 'X', 'Y': 'Y', 'Full_Name': 'Full_Name', });
lyr_paygah_gheyre_zamime_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'X': 'X', 'Y': 'Y', 'name2': 'name2', 'marakez': 'marakez', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Name_1': 'TextEdit', 'jamiyat': 'TextEdit', 'D_Farvardi': 'TextEdit', 'D_Ordibehe': 'TextEdit', 'D_Khordad': 'TextEdit', 'COD_ADD': 'Range', 'Madar_bard': 'TextEdit', 'B_fesharkh': 'TextEdit', 'B_diyabet': 'TextEdit', 'reagion': 'TextEdit', 'gamiyat': 'TextEdit', 'persenel': 'TextEdit', 'khadamat_m': 'TextEdit', 'madar_ba_1': 'TextEdit', 'm_koodak': 'TextEdit', 'm_nojavan': 'TextEdit', 'm_javan': 'TextEdit', 'm_miansal': 'TextEdit', 'm_salmand': 'TextEdit', 'bimar_sell': 'TextEdit', 'bimarybise': 'TextEdit', 'qarbalgari': 'TextEdit', 'bimar_diab': 'TextEdit', 'm_bimar_d': 'TextEdit', 'bimar_hype': 'TextEdit', 'm_bimar_hy': 'TextEdit', 'mahale': 'TextEdit', 'vis_pezesh': 'TextEdit', 'vis_dandan': 'TextEdit', 'daramadp': 'TextEdit', 'daramadd': 'TextEdit', 'parastari': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'NAME': 'TextEdit', });
lyr__4.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Full_Name': 'TextEdit', });
lyr_paygah_gheyre_zamime_5.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', 'X': '', 'Y': '', 'name2': '', 'marakez': '', });
lyr__1.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr__2.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Name_1': 'inline label - always visible', 'jamiyat': 'hidden field', 'D_Farvardi': 'hidden field', 'D_Ordibehe': 'hidden field', 'D_Khordad': 'hidden field', 'COD_ADD': 'hidden field', 'Madar_bard': 'hidden field', 'B_fesharkh': 'hidden field', 'B_diyabet': 'hidden field', 'reagion': 'inline label - always visible', 'gamiyat': 'hidden field', 'persenel': 'hidden field', 'khadamat_m': 'hidden field', 'madar_ba_1': 'hidden field', 'm_koodak': 'hidden field', 'm_nojavan': 'hidden field', 'm_javan': 'hidden field', 'm_miansal': 'hidden field', 'm_salmand': 'hidden field', 'bimar_sell': 'hidden field', 'bimarybise': 'hidden field', 'qarbalgari': 'hidden field', 'bimar_diab': 'hidden field', 'm_bimar_d': 'hidden field', 'bimar_hype': 'hidden field', 'm_bimar_hy': 'hidden field', 'mahale': 'hidden field', 'vis_pezesh': 'hidden field', 'vis_dandan': 'hidden field', 'daramadp': 'hidden field', 'daramadd': 'hidden field', 'parastari': 'hidden field', });
lyr__3.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'NAME': 'header label - visible with data', });
lyr__4.set('fieldLabels', {'OBJECTID': 'hidden field', 'OID_': 'hidden field', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Full_Name': 'header label - visible with data', });
lyr_paygah_gheyre_zamime_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'OID_': 'hidden field', 'Name': 'header label - visible with data', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'name2': 'hidden field', 'marakez': 'hidden field', });
lyr_paygah_gheyre_zamime_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});