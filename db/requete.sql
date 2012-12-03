SELECT '{"attrZoom":"continentZoom","attrOver":"continentover","attr":"continent","title":"France","link":"http://yvan.evaneos.dev/developper/map/france","path":"'|| getSvg2(st_union(geom), 0.0004863417365560, 1) || '"},' FROM fra_adm2  


// assets france_2
SELECT '{"id":'||id_2||',"title":"'|| name_2 ||'","path":"'|| getSvg2(geom, 0.0004863417365560, 1) || '"},' FROM fra_adm2  


SELECT '{"id":'||id_2||',"attrZoom":"continentZoom","attrOver":"continentover","attr":"continent","link":"http://yvan.evaneos.dev/developper/map/france"},' FROM fra_adm2  
