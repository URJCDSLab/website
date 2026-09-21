"use client";

import * as React from "react";
import "leaflet/dist/leaflet.css";
import { useTheme } from "next-themes";

interface LeafletMapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export default function LeafletMap({
  center = [40.336001, -3.877938],
  zoom = 15,
  className = "w-full h-80 sm:h-96",
}: LeafletMapProps) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const mapInstance = React.useRef<any>(null);
  const tileLayerRef = React.useRef<any>(null);
  const { resolvedTheme } = useTheme();
  const [lat, lng] = center;

  const isDark = resolvedTheme === "dark";
  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png?key=cb1_3pp6_1_069788c37b5eb0e33c446fe2"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3pp6_1_069788c37b5eb0e33c446fe2";
  const tileUrlRef = React.useRef(tileUrl);

  // Handle dynamic theme switching without recreating markers or resetting map state
  React.useEffect(() => {
    tileUrlRef.current = tileUrl;
    if (mapInstance.current && tileLayerRef.current) {
      tileLayerRef.current.setUrl(tileUrl);
    }
  }, [tileUrl]);

  React.useEffect(() => {
    let isMounted = true;
    let resizeTimer: NodeJS.Timeout | null = null;

    async function initMap() {
      if (!mapRef.current || mapInstance.current) return;

      const L = (await import("leaflet")).default;

      if (!isMounted || !mapRef.current) return;
      if (mapInstance.current) return;
      if ((mapRef.current as any)._leaflet_id) {
        delete (mapRef.current as any)._leaflet_id;
      }

      // Initialize map instance
      const map = L.map(mapRef.current, {
        center: [lat, lng],
        zoom,
        scrollWheelZoom: false,
      });
      mapInstance.current = map;

      // CartoDB tile layer (Voyager in light mode, Dark Matter in dark mode)
      const tileLayer = L.tileLayer(tileUrlRef.current, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);
      tileLayerRef.current = tileLayer;

      // DSLAB Marker (Custom icon)
      const dslabIcon = L.icon({
        iconUrl: "/assets/images/logos/DSLab_icon.png",
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -44],
        className: "dslab-map-pin drop-shadow-md",
      });

      const dslabMarker = L.marker([lat, lng], { icon: dslabIcon }).addTo(map);
      dslabMarker.bindPopup(
        `<div style="font-family: inherit; padding: 2px;">
          <strong style="font-size: 13px; color: #0086BA;">Data Science Lab (DSLAB)</strong>
          <div style="font-size: 11px; color: #475569; margin-top: 2px;">
            Department Building II<br />
            Móstoles Campus, URJC
          </div>
        </div>`
      );

      // Metro Marker (Raw Metro Madrid SVG logo)
      const metroIcon = L.icon({
        iconUrl: "/assets/images/contact/metro_madrid.svg",
        iconSize: [38, 23],
        iconAnchor: [19, 11.5],
        popupAnchor: [0, -12],
        className: "metro-madrid-logo drop-shadow-md",
      });

      const metroMarker = L.marker([40.3348569, -3.8721732], { icon: metroIcon }).addTo(map);
      metroMarker.bindPopup(
        `<div style="font-family: inherit; padding: 2px;">
          <strong style="font-size: 13px; color: #0038A8;">Metro: Universidad Rey Juan Carlos</strong>
          <div style="font-size: 11px; color: #475569; margin-top: 2px;">
            Metro de Madrid &bull; <strong>Line 12 (MetroSur)</strong>
          </div>
        </div>`
      );

      // Cercanías Marker (Raw Cercanías SVG logo)
      const cercaniasIcon = L.icon({
        iconUrl: "/assets/images/contact/cercanias.svg",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15],
        className: "cercanias-logo drop-shadow-md",
      });

      const cercaniasMarker = L.marker([40.330905, -3.882267], { icon: cercaniasIcon }).addTo(map);
      cercaniasMarker.bindPopup(
        `<div style="font-family: inherit; padding: 2px;">
          <strong style="font-size: 13px; color: #EF2C30;">Cercanías: Móstoles-El Soto</strong>
          <div style="font-size: 11px; color: #475569; margin-top: 2px;">
            Renfe Cercanías &bull; <strong>Line C5</strong>
          </div>
        </div>`
      );

      // Fit map view to comfortably include DSLAB, Metro, and Cercanías
      const group = L.featureGroup([dslabMarker, metroMarker, cercaniasMarker]);
      map.fitBounds(group.getBounds().pad(0.18));

      // Invalidate container size after mount to prevent partial tile loading in responsive containers
      resizeTimer = setTimeout(() => {
        if (isMounted && mapInstance.current) {
          mapInstance.current.invalidateSize();
        }
      }, 150);
    }

    initMap();

    return () => {
      isMounted = false;
      if (resizeTimer) clearTimeout(resizeTimer);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      className={`relative z-0 ${className}`}
      style={{ isolation: "isolate" }}
    />
  );
}
