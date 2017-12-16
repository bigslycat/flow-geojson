# Flow GeoJSON [![Build Status][status-img]][status-url]

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

### Available types

- `FeatureCollection`
- `FeatureCollection2D`
- `FeatureCollection3D`
- `Feature`
- `Feature2D`
- `Feature3D`
- `Point`
- `Point2D`
- `Point3D`
- `MultiPoint`
- `MultiPoint2D`
- `MultiPoint3D`
- `LineString`
- `LineString2D`
- `LineString3D`
- `MultiLineString`
- `MultiLineString2D`
- `MultiLineString3D`
- `Polygon`
- `Polygon2D`
- `Polygon3D`
- `MultiPolygon`
- `MultiPolygon2D`
- `MultiPolygon3D`
- `GeometryCollection`
- `GeometryCollection2D`
- `GeometryCollection3D`

[status-url]: https://travis-ci.org/bigslycat/flow-geojson
[status-img]: https://travis-ci.org/bigslycat/flow-geojson.svg?branch=master
