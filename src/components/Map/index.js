import GoogleMapReact from "google-map-react";
import "./style.scss";

function Map() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={{ lat: -23.561684, lng: -46.625378 }}
        defaultZoom={15}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
