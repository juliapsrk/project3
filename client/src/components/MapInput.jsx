import React, { Children, useState, cloneElement, forwardRef, createElement, useRef, useImperativeHandle, useEffect, memo, useCallback, createRef } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, useGoogleMap, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import mapStyles from '../components/MapStyles'


const libraries = ["places"];


export const SingleMarkerMap = ({ marker, ...props }) => {

  let navigate = useNavigate();

  //const handleOnClick = () => navigate(`/pet/${id);

  const icon = {
    url: '/paw.svg',
    scaledSize: new window.google.maps.Size(30, 30),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15)
  }
  return (<>
    <Marker icon={icon} position={marker} />
    {/* onClick={handleOnClick} */}
  </>)
}

export const MultipleMarkerMap = ({ markers, petId, ...props }) => {
  return (
    <>
      {markers.map(marker => <SingleMarkerMap key={marker.lat} marker={marker} handleOnClick={petId} {...props} />)}
    </>
  )
}

export const MapInput = memo((props) => {

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const center = {
    lat: 52.506630,
    lng: 13.291150,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });


  const [map, setMap] = useState(null)
  const onLoad = useCallback((map) => {
    setMap(map)
  }, [])
  const onUnmount = useCallback((map) => {
    console.log("onUnmount ")
    setMap(null)
  }, [])

  const handleMapClick = useCallback((e) => {
    console.log("handleMapClick", e)
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    props.onMarkerChange({ lat, lng });
  })


  return (
    <>
      {isLoaded && <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={handleMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* {children} */}
        {cloneElement(props.children, { map })}
      </GoogleMap>
      }


    </>);
})





