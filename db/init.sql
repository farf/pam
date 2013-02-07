


CREATE OR REPLACE FUNCTION getgeom(geometry, double precision, text, float, float)
  RETURNS geometry AS
$BODY$
 SELECT
st_translate(
st_scale(
st_translate(
St_Intersection(
ST_Transform(ST_SetSRID(ST_GeomFromText($3), 4326), 3857)
, $1 )
, 20037508.34, -20037508.34)
, $2,$2)
, $4, $5)
 $BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;

-- Function: getsvg2(geometry, double precision, text, double precision)

-- DROP FUNCTION getsvg2(geometry, double precision, text, double precision);

CREATE OR REPLACE FUNCTION getsvg2(geometry, double precision, text, double precision, float, float)
  RETURNS text AS
$BODY$

SELECT st_assvg(

st_simplify(
getGeom($1, $2, $3, $5, $6)
,$4)
, 0,0)


 $BODY$
  LANGUAGE sql IMMUTABLE
  COST 100;

-- Function: getgeom(geometry, double precision, text)

CREATE OR REPLACE FUNCTION name2uri(text)
RETURNS text
IMMUTABLE
STRICT
LANGUAGE SQL
AS $$
SELECT REPLACE(trim(regexp_replace(translate(
    lower($1),
    'áàâãäåāăąèééêëēĕėęěìíîïìĩīĭḩóôõöōŏőùúûüũūŭůäàáâãåæçćĉčöòóôõøüùúûßéèêëýñîìíïş',
    'aaaaaaaaaeeeeeeeeeeiiiiiiiihooooooouuuuuuuuaaaaaaeccccoooooouuuuseeeeyniiiis'
), '[^a-z0-9\-]+', ' ', 'g')),' ', '-');
$$;

DROP TABLE joinmap;
CREATE TABLE joinmap
(
	id serial primary key,
	gid integer references gadm2(gid),
	geom geometry(MultiPolygon,3857),
	computername varchar(255),
	name varchar(255),
	zoom integer,
	bounds varchar(500),
	parent_id integer references joinmap(id)
);

-- 0
INSERT INTO  joinmap(gid, geom, computername, zoom, name) 
SELECT  min(gid), st_multi(st_union(geom)), name2uri(name_0), 0, name_0 FROM gadm2 WHERE name_0 = 'France' GROUP BY  id_0, name_0;

-- 1
INSERT INTO  joinmap(gid, geom, computername, zoom, name, parent_id) 
SELECT  min(gid), st_multi(st_union(geom)), name2uri(name_1), 1, name_1, (SELECT id FROM joinmap WHERE name = name_0) FROM gadm2 WHERE name_0 = 'France' GROUP BY  name_0, id_1, name_1;

-- 2
INSERT INTO  joinmap(gid, geom, computername, zoom, name, parent_id) 
SELECT  min(gid), st_multi(st_union(geom)), name2uri(name_2), 2, name_2 , (SELECT id FROM joinmap WHERE name = name_1)FROM gadm2 WHERE name_0 = 'France' GROUP BY  name_1, id_2, name_2;

-- 3
INSERT INTO  joinmap(gid, geom, computername, zoom, name, parent_id) 
SELECT  min(gid), st_multi(st_union(geom)), name2uri(name_3), 3, name_3, (SELECT id FROM joinmap WHERE name = name_2) FROM gadm2 WHERE name_0 = 'France' GROUP BY  name_2, id_3, name_3;

UPDATE joinmap SET computername = name2uri(name);


DROP TABLE computername;
CREATE TABLE computername
(
	gid integer references gadm2(gid),
	computername varchar(255)
);

INSERT INTO computername(gid, computername)
SELECT gid, name2uri(name_5) FROM gadm2  WHERE name_0 = 'France';



CREATE OR REPLACE FUNCTION getLatLB(geometry)
RETURNS float
IMMUTABLE
STRICT
LANGUAGE SQL
AS $$
SELECT st_y (
st_makepoint(
st_xmin(
st_extent(
st_transform($1, 4326)
))

,st_ymin(
st_extent(
st_transform($1, 4326)
)
)
)
) 
$$;


CREATE OR REPLACE FUNCTION getLngLB(geometry)
RETURNS float
IMMUTABLE
STRICT
LANGUAGE SQL
AS $$
SELECT st_x(
st_makepoint(
st_xmin(
st_extent(
st_transform($1, 4326)
))

,st_ymin(
st_extent(
st_transform($1, 4326)
)
)
)
) 
$$;


CREATE OR REPLACE FUNCTION getLatRT(geometry)
RETURNS float
IMMUTABLE
STRICT
LANGUAGE SQL
AS $$
SELECT st_y (
st_makepoint(
st_xmax(
st_extent(
st_transform($1, 4326)
))

,st_ymax(
st_extent(
st_transform($1, 4326)
)
)
)
) 
$$;


CREATE OR REPLACE FUNCTION getLngRT(geometry)
RETURNS float
IMMUTABLE
STRICT
LANGUAGE SQL
AS $$
SELECT st_x(
st_makepoint(
st_xmax(
st_extent(
st_transform($1, 4326)
))

,st_ymax(
st_extent(
st_transform($1, 4326)
)
)
)
) 
$$;


CREATE OR REPLACE FUNCTION getbounds(geometry)
RETURNS text
IMMUTABLE
STRICT
LANGUAGE SQL
AS $$
SELECT getlngLB($1) || ',' || getlatLB($1) || ',' || getlngRT($1) || ',' || getlatRT($1)
$$;

UPDATE joinmap SET bounds = getbounds(geom);

SELECT * FROM joinmap WHERE parent_id = 1