import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import mapPointer from '../assets/images/paw.svg';
import mapStyles from '../components/MapStyles'

const MapInput = (props) => {

  const libraries = ["places"];

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
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
    googleMapsApiKey: 'AIzaSyDDOMx5CC9QFu2IyUtq5jN3_PCXmL5Rcno',
    libraries,
  });

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    props.onMarkerChange({ lat, lng });
    // setMarker({ lat, lng });
    //console.log(lat, lng);
    //const position = { lat, lng };
    // setMarkers((current) => [
    //   ...current,
    //   {
    //     lat: e.latLng.lat(),
    //     lng: e.latLng.lng(),
    //     time: new Date(),
    //   },
    // ]);
  }


  return (
    isLoaded &&
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      options={options}
      onClick={handleMapClick}
    // onLoad={onMapLoad}
    >

      {props.marker && (
        <Marker
          position={props.marker}
          icon={{
            url: '/paw.svg',
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        >
        </Marker>



      )}



    </GoogleMap>


    || <></>
  );
}

export default MapInput;