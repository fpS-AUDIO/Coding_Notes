
# React-Leaflet Documentation

## Introduction
`react-leaflet` is a React wrapper for the popular Leaflet library, which provides interactive maps. It allows developers to integrate and control Leaflet maps in their React applications using a set of React components.

## Installation
To install the `react-leaflet` package, you can use npm or yarn:

```sh
npm install react-leaflet leaflet --save
# or
yarn add react-leaflet leaflet
```

## Usage
Here is a basic example of how to use `react-leaflet` in a React component:

```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
```

### Explanation
- **Importing**: The `react-leaflet` components and Leaflet CSS file are imported.
- **MapContainer**: The main container for the map, specifying the center and zoom level.
- **TileLayer**: Adds a tile layer to the map, usually provided by a third-party service like OpenStreetMap.
- **Marker and Popup**: Adds a marker with a popup to the specified position on the map.

## Components
`react-leaflet` provides various components to create and control different map elements:

- `MapContainer`: The main container for the map.
- `TileLayer`: For adding tile layers from various sources.
- `Marker`: For adding markers to the map.
- `Popup`: For displaying popups when markers or other elements are clicked.
- `Circle` and `Rectangle`: For drawing shapes on the map.
- `Polyline` and `Polygon`: For drawing lines and polygons on the map.

### Example with Multiple Components
```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MultiComponentMap = () => {
  const center = [51.505, -0.09];
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const polygon = [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={center} radius={200} />
      <Polyline positions={polyline} />
      <Polygon positions={polygon} />
    </MapContainer>
  );
};

export default MultiComponentMap;
```

## Customization

### Custom Icons
To use custom icons for markers, you can use the `L.icon` method from the Leaflet library:

```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon
const customIcon = new L.Icon({
  iconUrl: 'path/to/custom-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'path/to/marker-shadow.png',
  shadowSize: [41, 41],
});

const CustomIconMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]} icon={customIcon} />
    </MapContainer>
  );
};

export default CustomIconMap;
```

### Event Handling
You can handle various events like clicks and zoom changes using event handlers:

```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EventHandlingMap = () => {
  const handleClick = (e) => {
    alert(`Clicked at latitude: ${e.latlng.lat}, longitude: ${e.latlng.lng}`);
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
      onClick={handleClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default EventHandlingMap;
```

## Conclusion
`react-leaflet` is a powerful library that brings the flexibility of Leaflet maps to React applications. With a variety of components and customization options, it can be tailored to fit various mapping needs. For more detailed information and advanced usage, refer to the official [react-leaflet documentation](https://react-leaflet.js.org/).

