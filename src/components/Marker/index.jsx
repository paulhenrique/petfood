import { useSelector } from "react-redux";
import MarkerIcon from "../../assets/marker.png";
import SelectedMarkerIcon from "../../assets/marker-selected.png";
import "./style.scss";

function Marker({ petShop }) {
  const { logo, nome, _id } = petShop;

  const { petshopMapSelected } = useSelector((state) => state.shop);

  return (
    <div>
      <img src={logo} alt={`Logo ${nome}`} className="img-marker" />
      <img
        className=""
        src={_id === petshopMapSelected ? SelectedMarkerIcon : MarkerIcon}
        alt="Marcador do Mapa"
      />
    </div>
  );
}

export default Marker;
