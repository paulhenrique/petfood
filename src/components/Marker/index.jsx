import MarkerIcon from "../../assets/marker.png";
import SelectedMarkerIcon from "../../assets/marker-selected.png";
import "./style.scss";

function Marker({ petShop }) {
  const { logo, nome } = petShop;
  return (
    <div>
      <img src={logo} alt={`Logo ${nome}`} className="img-marker" />
      <img className="" src={MarkerIcon} alt="Marcador do Mapa" />
    </div>
  );
}

export default Marker;
