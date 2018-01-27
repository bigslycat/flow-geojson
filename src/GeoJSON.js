export type FeatureCollection = FeatureCollectionTemplate<Feature[]>;
export type FeatureCollectionStrict = FeatureCollectionTemplate<FeatureStrict[]>;
export type FeatureCollection2D = FeatureCollectionTemplate<Feature2D[]>;
export type FeatureCollection2DStrict = FeatureCollectionTemplate<Feature2DStrict[]>;
export type FeatureCollection3D = FeatureCollectionTemplate<Feature3D[]>;
export type FeatureCollection3DStrict = FeatureCollectionTemplate<Feature3DStrict[]>;

export type Feature =
  FeatureTemplate<(
    Point | MultiPoint |
    LineString | MultiLineString |
    Polygon | MultiPolygon |
    GeometryCollection
  )>;

export type FeatureStrict =
  FeatureTemplate<(
    PointStrict | MultiPointStrict |
    LineStringStrict | MultiLineStringStrict |
    PolygonStrict | MultiPolygonStrict |
    GeometryCollectionStrict
  )>;

export type Feature2D =
  FeatureTemplate<(
    Point2D | MultiPoint2D |
    LineString2D | MultiLineString2D |
    Polygon2D | MultiPolygon2D |
    GeometryCollection2D
  )>;

export type Feature2DStrict =
  FeatureTemplate<(
    Point2DStrict | MultiPoint2DStrict |
    LineString2DStrict | MultiLineString2DStrict |
    Polygon2DStrict | MultiPolygon2DStrict |
    GeometryCollection2DStrict
  )>;

export type Feature3D =
  FeatureTemplate<(
    Point3D | MultiPoint3D |
    LineString3D | MultiLineString3D |
    Polygon3D | MultiPolygon3D |
    GeometryCollection3D
  )>;

export type Feature3DStrict =
  FeatureTemplate<(
    Point3DStrict | MultiPoint3DStrict |
    LineString3DStrict | MultiLineString3DStrict |
    Polygon3DStrict | MultiPolygon3DStrict |
    GeometryCollection3DStrict
  )>;

export type Point = Geometry<'Point', Coord>;
export type PointStrict = Geometry<'Point', CoordStrict>;
export type Point2D = Geometry<'Point', Coord2D>;
export type Point2DStrict = Geometry<'Point', Coord2DStrict>;
export type Point3D = Geometry<'Point', Coord3D>;
export type Point3DStrict = Geometry<'Point', Coord3DStrict>;

export type MultiPoint = Geometry<'MultiPoint', Coord[]>;
export type MultiPointStrict = Geometry<'MultiPoint', CoordStrict[]>;
export type MultiPoint2D = Geometry<'MultiPoint', Coord2D[]>;
export type MultiPoint2DStrict = Geometry<'MultiPoint', Coord2DStrict[]>;
export type MultiPoint3D = Geometry<'MultiPoint', Coord3D[]>;
export type MultiPoint3DStrict = Geometry<'MultiPoint', Coord3DStrict[]>;

export type LineString = Geometry<'LineString', Coord[]>;
export type LineStringStrict = Geometry<'LineString', CoordStrict[]>;
export type LineString2D = Geometry<'LineString', Coord2D[]>;
export type LineString2DStrict = Geometry<'LineString', Coord2DStrict[]>;
export type LineString3D = Geometry<'LineString', Coord3D[]>;
export type LineString3DStrict = Geometry<'LineString', Coord3DStrict[]>;

export type MultiLineString = Geometry<'MultiLineString', Coord[][]>;
export type MultiLineStringStrict = Geometry<'MultiLineString', CoordStrict[][]>;
export type MultiLineString2D = Geometry<'MultiLineString', Coord2D[][]>;
export type MultiLineString2DStrict = Geometry<'MultiLineString', Coord2DStrict[][]>;
export type MultiLineString3D = Geometry<'MultiLineString', Coord3D[][]>;
export type MultiLineString3DStrict = Geometry<'MultiLineString', Coord3DStrict[][]>;

export type Polygon = Geometry<'Polygon', Coord[][]>;
export type PolygonStrict = Geometry<'Polygon', CoordStrict[][]>;
export type Polygon2D = Geometry<'Polygon', Coord2D[][]>;
export type Polygon2DStrict = Geometry<'Polygon', Coord2DStrict[][]>;
export type Polygon3D = Geometry<'Polygon', Coord3D[][]>;
export type Polygon3DStrict = Geometry<'Polygon', Coord3DStrict[][]>;

export type MultiPolygon = Geometry<'MultiPolygon', Coord[][]>;
export type MultiPolygonStrict = Geometry<'MultiPolygon', CoordStrict[][]>;
export type MultiPolygon2D = Geometry<'MultiPolygon', Coord2D[][]>;
export type MultiPolygon2DStrict = Geometry<'MultiPolygon', Coord2DStrict[][]>;
export type MultiPolygon3D = Geometry<'MultiPolygon', Coord3D[][]>;
export type MultiPolygon3DStrict = Geometry<'MultiPolygon', Coord3DStrict[][]>;

export type GeometryCollection = GeometryCollectionTemplate<(
  Point | MultiPoint |
  LineString | MultiLineString |
  Polygon | MultiPolygon
)>;

export type GeometryCollectionStrict = GeometryCollectionTemplate<(
  PointStrict | MultiPointStrict |
  LineStringStrict | MultiLineStringStrict |
  PolygonStrict | MultiPolygonStrict
)>;

export type GeometryCollection2D = GeometryCollectionTemplate<(
  Point2D | MultiPoint2D |
  LineString2D | MultiLineString2D |
  Polygon2D | MultiPolygon2D
)>;

export type GeometryCollection2DStrict = GeometryCollectionTemplate<(
  Point2DStrict | MultiPoint2DStrict |
  LineString2DStrict | MultiLineString2DStrict |
  Polygon2DStrict | MultiPolygon2DStrict
)>;

export type GeometryCollection3D = GeometryCollectionTemplate<(
  Point3D | MultiPoint3D |
  LineString3D | MultiLineString3D |
  Polygon3D | MultiPolygon3D
)>;

export type GeometryCollection3DStrict = GeometryCollectionTemplate<(
  Point3DStrict | MultiPoint3DStrict |
  LineString3DStrict | MultiLineString3DStrict |
  Polygon3DStrict | MultiPolygon3DStrict
)>;

export type Geometry<T, C> = {
  type: T,
  coordinates: C,
};

export type GeometryCollectionTemplate<G> = {
  type: 'GeometryCollection',
  geometries: G,
};

export type FeatureTemplate<G> = {
  type: 'Feature',
  bbox?: Bbox,
  properties: Properties,
  geometry: G,
};

export type FeatureCollectionTemplate<F> = {
  type: 'FeatureCollection',
  bbox?: Bbox,
  features: F,
};

export type JSONType = JSONObject | JSONArray | string | number | null;
export type JSONObject = { [key: string]: JSONType };
export type JSONArray = JSONArray[];

export type Properties = JSONObject | null;

export type Coord = [number, number, number | void];
export type CoordStrict = [Longitude, Latitude, Altitude | void];

export type Coord2D = [number, number];
export type Coord2DStrict = [Longitude, Latitude];

export type Coord3D = [number, number, number];
export type Coord3DStrict = [Longitude, Latitude, Altitude];

export type Bbox = [number, number, number, number];

export opaque type Longitude: number = number;
export opaque type Latitude: number = number;
export opaque type Altitude: number = number;
