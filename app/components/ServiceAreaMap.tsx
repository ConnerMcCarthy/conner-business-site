"use client";

import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Columbus, NC coordinates - 20 mile radius
const CENTER: [number, number] = [35.2532, -82.1445];
const RADIUS_METERS = 20 * 1609.34;

export default function ServiceAreaMap() {
  return (
    <div className="h-[400px] w-full md:h-[450px] [&_.leaflet-container]:cursor-default [&_.leaflet-container]:pointer-events-none">
      <MapContainer
        center={CENTER}
        zoom={9}
        className="h-full w-full"
        dragging={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={CENTER}
          radius={RADIUS_METERS}
          pathOptions={{
            color: "#d946ef",
            fillColor: "#d946ef",
            fillOpacity: 0.2,
            weight: 2,
          }}
        />
      </MapContainer>
    </div>
  );
}
