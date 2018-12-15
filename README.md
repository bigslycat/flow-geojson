# Flow GeoJSON [![Build Status][status-img]][status-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/bigslycat/flow-geojson.svg)](https://greenkeeper.io/)

Flow type definitions for GeoJSON

- [Install](#install)
  - [npm](#npm)
  - [Yarn](#yarn)
- [Usage](#usage)
  - [About coordinates](#about-coordinates)
  - [Available types](#available-types)

## Install

### npm
```bash
npm install --save-dev flow-geojson
```

### Yarn
```bash
yarn add --dev flow-geojson
```

## Usage

### About coordinates

Because of the flow restrictions, the package uses three types of coordinates:

```js
/**
 * For universal, but less strict type checking
 * [longitude, latitude] or [longitude, latitude, altitude]
 */
type Coord   = [number, number, number | void];

/**
 * [longitude, latitude]
 */
type Coord2D = [number, number];

/**
 * [longitude, latitude, altitude]
 */
type Coord3D = [number, number, number];
```

All exported types are named similarly to the type of coordinates used.

### Opaque types support

Since version 2.0.0, you can use types with the suffix `Strict`. For example `Point3D`
contains `[number, number, number]` when `Point3DStrict` contains `[Longitude, Latitude, Altitude]`.

### Available types

- `Longitude` (opaque type)
- `Latitude` (opaque type)
- `Altitude` (opaque type)
- `FeatureCollection`
- `FeatureCollectionStrict` (use coordinates as opaque types)
- `FeatureCollection2D`
- `FeatureCollection2DStrict` (use coordinates as opaque types)
- `FeatureCollection3D`
- `FeatureCollection3DStrict` (use coordinates as opaque types)
- `Feature`
- `FeatureStrict` (use coordinates as opaque types)
- `Feature2D`
- `Feature2DStrict` (use coordinates as opaque types)
- `Feature3D`
- `Feature3DStrict` (use coordinates as opaque types)
- `Point`
- `PointStrict` (use coordinates as opaque types)
- `Point2D`
- `Point2DStrict` (use coordinates as opaque types)
- `Point3D`
- `Point3DStrict` (use coordinates as opaque types)
- `MultiPoint`
- `MultiPointStrict` (use coordinates as opaque types)
- `MultiPoint2D`
- `MultiPoint2DStrict` (use coordinates as opaque types)
- `MultiPoint3D`
- `MultiPoint3DStrict` (use coordinates as opaque types)
- `LineString`
- `LineStringStrict` (use coordinates as opaque types)
- `LineString2D`
- `LineString2DStrict` (use coordinates as opaque types)
- `LineString3D`
- `LineString3DStrict` (use coordinates as opaque types)
- `MultiLineString`
- `MultiLineStringStrict` (use coordinates as opaque types)
- `MultiLineString2D`
- `MultiLineString2DStrict` (use coordinates as opaque types)
- `MultiLineString3D`
- `MultiLineString3DStrict` (use coordinates as opaque types)
- `Polygon`
- `PolygonStrict` (use coordinates as opaque types)
- `Polygon2D`
- `Polygon2DStrict` (use coordinates as opaque types)
- `Polygon3D`
- `Polygon3DStrict` (use coordinates as opaque types)
- `MultiPolygon`
- `MultiPolygonStrict` (use coordinates as opaque types)
- `MultiPolygon2D`
- `MultiPolygon2DStrict` (use coordinates as opaque types)
- `MultiPolygon3D`
- `MultiPolygon3DStrict` (use coordinates as opaque types)
- `GeometryCollection`
- `GeometryCollectionStrict` (use coordinates as opaque types)
- `GeometryCollection2D`
- `GeometryCollection2DStrict` (use coordinates as opaque types)
- `GeometryCollection3D`
- `GeometryCollection3DStrict` (use coordinates as opaque types)

[status-url]: https://travis-ci.org/bigslycat/flow-geojson
[status-img]: https://travis-ci.org/bigslycat/flow-geojson.svg?branch=master
