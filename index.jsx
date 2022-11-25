import mapboxgl from "mapbox-gl";
import "./index.css";
import React, { useRef, useEffect, useState } from "react";

export default function Mapbox() {
    mapboxgl.accessToken =
        "pk.eyJ1IjoiYXNobGV5LXNoYXciLCJhIjoiY2xha3dkdHgxMDN6bTNwc3o2ZXFlN20waiJ9.VuJuoTPAMUl1nTL-7S79UA";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-1);
    const [lat, setLat] = useState(51);
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

    useEffect(()=> {
        if(!map){
            return;
        }
        const fetcher = async () => {
            await fetch("http://localhost:5001/atms")
                .then((response) => response.json())
                .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        const lng = data[i].longitude;
                        const lat = data[i].latitude;
                        geojson.features.push({
                            type: "feature",
                            geometry: {
                                type: "Point",
                                coordinates: [lng, lat],
                            },
                            properties: {
                                title: "Mapbox",
                                description: "N/A",
                            },
                        });
                    }
                });
        };
    
        fetcher().then(() => {for(let feature of geojson.features){

                let newMarker = <div className="marker"></div>;
                new mapboxgl.Marker(newMarker).setLngLat(feature.geometry.coordinates).addTo(map.current);
    }})
    },[map])

    const geojson = {
        type: "FeatureCollection",
        features: [],
    };



    return <section ref={mapContainer} className="mapBox"></section>;
}
