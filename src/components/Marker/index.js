import MarkerIcon from "../../assets/marker.png";
import SelectedMarkerIcon from "../../assets/marker-selected.png";
import "./style.scss";

function Marker() {
  return (
    <div>
      <img
        src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
        alt="Logo PetLove"
        className="img-marker"
      />
      <img className="" src={MarkerIcon} alt="Marcador do Mapa" />
    </div>
  );
}

export default Marker;
