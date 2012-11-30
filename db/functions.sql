CREATE OR REPLACE FUNCTION upgis_filter_rings(geometry,FLOAT) RETURNS geometry AS
$$ SELECT ST_BuildArea(ST_Collect(a.geom)) AS final_geom
        FROM ST_DumpRings($1) AS a
          WHERE a.path[1] = 0 OR
                (a.path[1] > 0 AND ST_Area(a.geom) > $2)
$$
  LANGUAGE 'sql' IMMUTABLE;

CREATE OR REPLACE FUNCTION filter_rings(geometry, FLOAT)
  RETURNS geometry AS
$BODY$
SELECT ST_MakePolygon(c.outer_ring, d.inner_rings) AS final_geom
  FROM (/* Get outer ring of polygon */
        SELECT ST_ExteriorRing(b.geom) AS outer_ring
          FROM (SELECT (ST_DumpRings($1)).*) b
          WHERE b.path[1] = 0 /* ie the outer ring */
        ) c,
       (/* Get all inner rings > a particular area */
        SELECT ST_Accum(ST_ExteriorRing(b.geom)) AS inner_rings
          FROM (SELECT (ST_DumpRings($1)).*) b
          WHERE b.path[1] > 0 /* ie not the outer ring */
            AND ST_Area(b.geom) > $2
        ) d
$BODY$
  LANGUAGE 'sql' IMMUTABLE;
  
CREATE OR REPLACE FUNCTION getGeom(geometry, float)
 RETURNS geometry AS
 $$
 SELECT
st_scale(
st_translate(
St_Intersection(
ST_Transform(ST_SetSRID(ST_GeomFromText('POLYGON((-4.9657552689314 51.343739595123,9.8109371960163 51.343739595123,9.8109371960163 41.169601464631,-4.9657552689314 41.169601464631,-4.9657552689314 51.343739595123))'), 4326), 3857)
, $1 )
, 20037508.34, -20037508.34)
, $2,$2)
 $$
 LANGUAGE 'sql' IMMUTABLE;

 
CREATE OR REPLACE FUNCTION getSvg(geometry, float, float)
 RETURNS text AS
 $$

SELECT st_assvg(

st_simplify(
ST_BuildArea(ST_Collect(polygons.geom))
,$3)
, 0,0)
FROM (

 SELECT (st_dumprings(
 ST_GeometryN(getGeom($1, $2),generate_series(1, ST_NumGeometries(getGeom($1, $2))))
 )).geom as geom

  ) as polygons
  WHERE st_area(polygons.geom) > $2 * $2

 $$
 LANGUAGE 'sql' IMMUTABLE;



CREATE OR REPLACE FUNCTION getSvg2(geometry, float, float)
 RETURNS text AS
 $$

SELECT st_assvg(

st_simplify(
getGeom($1, $2)
,$3)
, 0,0)


 $$
 LANGUAGE 'sql' IMMUTABLE;
