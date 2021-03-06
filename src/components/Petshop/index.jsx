import { useDispatch, useSelector } from "react-redux";
import {
  setShopMapSelected,
  setMapCenter,
} from "../../store/modules/shop/actions";
import "./style.scss";

function Petshop({ petShop }) {
  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector((state) => state.shop);
  const setSelectedPetShop = () => {
    dispatch(setShopMapSelected(petShop._id));
    dispatch(setMapCenter(petShop.location));
  };

  return (
    <li
      className={`petshopComponent d-flex align-center ${
        petShop.id === petshopMapSelected && "active"
      }`}
      onClick={() => setSelectedPetShop()}
    >
      <div className="containerImage">
        <img
          src={petShop.logo}
          alt={`Logo ${petShop.nome}`}
          className="img-fluid"
        />
      </div>
      <div className="containPetshopInfos">
        <b>{petShop.nome}</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star"></span>
          <b>2,8</b>
          <span className="mdi mdi-crosshairs-gps"></span>
          <b>2,9 km</b>
        </div>
        <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
}

export default Petshop;
