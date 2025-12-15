"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { geocodeAddress } from "@/util/geocode";

export default function PropertyMap({ address }) {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize the map
    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: [75.8577, 22.7196], // Indore default
      zoom: 11,
    });

    return () => mapInstance.current?.remove();
  }, []);

  useEffect(() => {
    async function loadLocation() {
      if (!address) return;
      const loc = await geocodeAddress(address);

      console.log("📍 Geocode:", loc);

      if (!loc) return;

      // move map
      mapInstance.current.setCenter([loc.lon, loc.lat]);
      mapInstance.current.setZoom(15);

      // add marker
      new maplibregl.Marker().setLngLat([loc.lon, loc.lat]).addTo(mapInstance.current);
    }

    loadLocation();
  }, [address]);

  return (
    <div>
      <div ref={mapContainer} className="w-full h-96 rounded-lg" />
    </div>
  );
}
