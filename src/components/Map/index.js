import GoogleMapReact from "google-map-react";
import Marker from "../../components/Marker";
import "./style.scss";

function Map() {
  return (
    <div
      style={{
        overflowY: "hidden",
        height: "calc(100vh - 260px)",
        position: "fixed",
        width: "100%",
        bottom: "0",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={{ lat: -23.561684, lng: -46.625378 }}
        defaultZoom={15}
      >
        <Marker lat={-23.561684} lng={-46.625378} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
