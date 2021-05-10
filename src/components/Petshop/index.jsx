import "./style.scss";

function Petshop({ petShop }) {
  return (
    <li className="petshopComponent d-flex align-center">
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
