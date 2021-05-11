import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import Marker from "../../components/Marker";
import "./style.scss";

function Map({ petShops }) {
  const { mapCenter } = useSelector((state) => state.shop);

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
        center={mapCenter}
        defaultZoom={15}
      >
        {petShops.map((petShop) => (
          <Marker
            key={petShop.id}
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
