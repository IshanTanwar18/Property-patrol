"use client";

import { Map } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function TestMap() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: 22.7196,
          longitude: 75.8577,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />
    </div>
  );
}
