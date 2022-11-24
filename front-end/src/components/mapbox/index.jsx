import mapboxgl from "mapbox-gl";
import "./index.css";
import React, { useRef, useEffect, useState } from "react";

export default function Mapbox() {
    mapboxgl.accessToken = "pk.eyJ1IjoiYXNobGV5LXNoYXciLCJhIjoiY2xha3dkdHgxMDN6bTNwc3o2ZXFlN20waiJ9.VuJuoTPAMUl1nTL-7S79UA";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    return <section ref={mapContainer} className="mapBox"></section>;
}
