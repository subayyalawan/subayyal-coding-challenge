import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const APIKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKey,
  });

  return (
    <div className="h-full w-full">
      {isLoaded ? (
        <GoogleMap
          center={{ lat: Number(lat), lng: Number(lng) }}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <MarkerF position={{ lat: Number(lat), lng: Number(lng) }}></MarkerF>
        </GoogleMap>
      ) : null}
    </div>
  );
};

export default Map;
