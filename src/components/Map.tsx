import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapContext } from "../context/mapContext";
import styled from "styled-components";
import { randomLocations } from '../utils/randomLocations';

const MapInitialization = ({
    mapContainer,
    mapStyleUri, 
    lngLat, 
    zoom, 
    setMap
}: any) => {

    const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyleUri,
        center: [lngLat.lng, lngLat.lat],
        zoom: zoom
    });

    mapInstance.on("load", () => {
        setMap(mapInstance);
        mapInstance.addSource("locations", {
            type: "geojson",
            data: {
                "type": "FeatureCollection",
                "features": randomLocations({count: 100})
            }
        });

        mapInstance.addLayer({
            'id': 'locations-layer',
            'type': 'symbol',
            'source': 'locations',
            'layout': {
                'icon-image': '{icon}',
                'icon-allow-overlap': true
            }
        });
        
    })
}

const Map = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN!;
    const mapStyleUri = process.env.REACT_APP_MAP_STYLE_URL;

    const mapContainer = useRef(null);

    const { map, lngLat, zoom, setMap } = useMapContext();

    useEffect(() => {
        if (!map) {
            MapInitialization({ 
                mapContainer, 
                mapStyleUri, 
                lngLat,
                zoom,
                map,
                setMap })
        }
    }, [map]);

    return (
        <>
            <MapboxContainer ref={(el: any) => {mapContainer.current = el}} />
        </>
    )
};


const MapboxContainer = styled.div`
    position: absolute; 
    top: 0; 
    bottom: 0; 
    width: 100%; 
`;

export default Map;