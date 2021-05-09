import GoogleMapReact from "google-map-react";
import Marker from "../../components/Marker";
import "./style.scss";

function Map({ petShops }) {
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
        {petShops.map((petShop) => (
          <Marker
            lat={petShop.location.lat}
            petShop={petShop}
            lng={petShop.location.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
