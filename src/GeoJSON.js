export type FeatureCollection = FeatureCollectionTemplate<Feature[]>;
export type FeatureCollection2D = FeatureCollectionTemplate<Feature2D[]>;
export type FeatureCollection3D = FeatureCollectionTemplate<Feature3D[]>;

export type Feature =
  FeatureTemplate<(
    Point | MultiPoint |
    LineString | MultiLineString |
    Polygon | MultiPolygon |
    GeometryCollection
  )>;

export type Feature2D =
  FeatureTemplate<(
    Point2D | MultiPoint2D |
    LineString2D | MultiLineString2D |
    Polygon2D | MultiPolygon2D |
    GeometryCollection2D
  )>;

export type Feature3D =
  FeatureTemplate<(
    Point3D | MultiPoint3D |
    LineString3D | MultiLineString3D |
    Polygon3D | MultiPolygon3D |
    GeometryCollection3D
  )>;

export type Point = Geometry<'Point', Coord>;
export type Point2D = Geometry<'Point', Coord2D>;
export type Point3D = Geometry<'Point', Coord3D>;

export type MultiPoint = Geometry<'MultiPoint', Coord[]>;
export type MultiPoint2D = Geometry<'MultiPoint', Coord2D[]>;
export type MultiPoint3D = Geometry<'MultiPoint', Coord3D[]>;

export type LineString = Geometry<'LineString', Coord[]>;
export type LineString2D = Geometry<'LineString', Coord2D[]>;
export type LineString3D = Geometry<'LineString', Coord3D[]>;

export type MultiLineString = Geometry<'MultiLineString', Coord[][]>;
export type MultiLineString2D = Geometry<'MultiLineString', Coord2D[][]>;
export type MultiLineString3D = Geometry<'MultiLineString', Coord3D[][]>;

export type Polygon = Geometry<'Polygon', Coord[][]>;
export type Polygon2D = Geometry<'Polygon', Coord2D[][]>;
export type Polygon3D = Geometry<'Polygon', Coord3D[][]>;

export type MultiPolygon = Geometry<'MultiPolygon', Coord[][]>;
export type MultiPolygon2D = Geometry<'MultiPolygon', Coord2D[][]>;
export type MultiPolygon3D = Geometry<'MultiPolygon', Coord3D[][]>;

export type GeometryCollection = GeometryCollectionTemplate<(
  Point | MultiPoint |
  LineString | MultiLineString |
  Polygon | MultiPolygon
)>;

export type GeometryCollection2D = GeometryCollectionTemplate<(
  Point2D | MultiPoint2D |
  LineString2D | MultiLineString2D |
  Polygon2D | MultiPolygon2D
)>;

export type GeometryCollection3D = GeometryCollectionTemplate<(
  Point3D | MultiPoint3D |
  LineString3D | MultiLineString3D |
  Polygon3D | MultiPolygon3D
)>;

type Geometry<T, C> = {
  type: T,
  coordinates: C,
};

type GeometryCollectionTemplate<G> = {
  type: 'GeometryCollection',
  geometries: G,
};

type FeatureTemplate<G> = {
  type: 'Feature',
  bbox: Bbox,
  properties: Properties,
  geometry: G,
};

type FeatureCollectionTemplate<F> = {
  type: 'FeatureCollection',
  bbox: Bbox,
  features: F,
};

type JSONType = JSONObject | JSONArray | string | number | null;
type JSONObject = { [key: string]: JSONType };
type JSONArray = JSONArray[];

type Properties = JSONObject | null;

type Coord = [number, number, number | void];
type Coord2D = [number, number];
type Coord3D = [number, number, number];

type Bbox = [number, number, number, number];
