"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";
import styles from "./map.module.scss";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 50.46542320319895,
        lng: 30.611525719080603,
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 18,
        mapId: "ENVENT_MAPID",
      };

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      const marker = new Marker({
        // const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);
  return <div ref={mapRef} className={styles.map} />;
};

export default Map;
