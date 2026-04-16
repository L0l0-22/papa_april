"use client";

import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "/pizzaicon.png",
  iconSize: [44, 44],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: "custom-marker",
});

export default function InteractiveMapClient() {
  const mapRef = useRef();

  const locations = [
    { name: "Papa John's – Cairo (Heliopolis)", coords: [30.0900, 31.3220] },
    { name: "Papa John's – Cairo (Nasr City)", coords: [30.0566, 31.3301] },
    { name: "Papa John's – Cairo (Maadi)", coords: [30.0210, 31.2670] },
    { name: "Papa John's – Cairo (Mohandessin)", coords: [30.0520, 31.2110] },
    { name: "Papa John's – New Cairo", coords: [30.0150, 31.5000] },
    { name: "Papa John's – 6th October", coords: [29.9740, 31.0120] },
    { name: "Papa John's – Alexandria", coords: [31.2451, 29.9677] },
  ];

  const zoomToLocation = (coords) => {
    if (mapRef.current) {
      mapRef.current.setView(coords, 10, { animate: true });
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 100);
    }
  }, []);

  return (
    <div className="mx-auto h-[500px] w-full">
      <MapContainer
        center={[27.5000, 30.8025]}
        zoom={6}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap & CARTO'
          url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        />

        {locations.map((loc, idx) => (
          <Marker
            key={idx}
            position={loc.coords}
            icon={markerIcon}
            eventHandlers={{
              click: () => zoomToLocation(loc.coords),
            }}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}