import React, { createContext, useContext, useState, useMemo } from "react";

interface MapContextType {
    map: any
    setMap: (map: any) => void
    lngLat: any
    setLngLat: (lngLat: any) => void
    zoom: number
    setZoom: (zoom: number) => void
    // popupContent: any
    // setPopupContent: (popupContent: any) => void
    // popupLngLat: any
    // setPopupLngLat: (popupLngLat: any) => void
}

const MapContext = createContext<MapContextType>({} as MapContextType);

export const useMapContext = () => {
    return useContext(MapContext);
}

type MapContextProviderProps = React.PropsWithChildren<{

}>

export const MapContextProvider = ({ children }: MapContextProviderProps) => {
    const [map, setMap] = useState(null);
    const [lngLat, setLngLat] = useState({ lng: 151.20, lat: -33.86 }); // Sydney CBD's lnglat
    const [zoom, setZoom] = useState(12);
    // const [popupContent, setPopupContent] = useState([]);
    // const [popupLngLat, setPopupLngLat] = useState(null);

    const value = useMemo(() => {
        return {
            map,
            setMap,
            lngLat,
            setLngLat,
            zoom,
            setZoom,
            // popupContent,
            // setPopupContent,
            // popupLngLat,
            // setPopupLngLat
        }
    }, [map, lngLat, zoom])

    return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}