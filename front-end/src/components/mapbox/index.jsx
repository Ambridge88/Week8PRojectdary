import ReactMapBoxGl, { Layer, Feature } from "react-mapbox-gl";
import "./index.css";
import React, { useEffect } from "react";

export default function Mapbox() {
    const Map = ReactMapBoxGl({
        accessToken:
            "pk.eyJ1IjoiYXNobGV5LXNoYXciLCJhIjoiY2xha3dkdHgxMDN6bTNwc3o2ZXFlN20waiJ9.VuJuoTPAMUl1nTL-7S79UA",
    });

    const geojson = [];

    useEffect(() => {
        if (!Map) {
            return;
        }
        const fetcher = async () => {
            await fetch("http://localhost:5001/atms")
                .then((response) => response.json())
                .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        const lng = data[i].longitude;
                        const lat = data[i].latitude;
                        geojson.push([lng, lat]);
                    }
                });
        };
        fetcher();
    });
    const markers = geojson.map((coordinates) => (
        <Feature coordinates={coordinates} />
    ));

    return (
        <Map
            className="mapBox"
            intialViewState={{
                longitude: -1,
                latitude: 51,
                zoom: 9,
            }}
            style="mapbox://styles/mapbox/streets-v8"
        >
            <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
            >
                <Feature coordinates={[-1, 51]} />
            </Layer>
        </Map>
    );
}
