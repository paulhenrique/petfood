import "./style.scss";

function Petshop() {
  return (
    <li className="petshopComponent d-flex align-center">
      <div className="containerImage">
        <img
          src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
          alt="Logo PetLove"
          className="img-fluid"
        />
      </div>
      <div className="containPetshopInfos">
        <b>Petlove</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star"></span>
          <b>2,8</b>
          <span className="mdi mdi-cash-usd-outline"></span>
          <b>$$$</b>
          <span className="mdi mdi-crosshairs-gps"></span>
          <b>2,9 km</b>
        </div>
        <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
}

export default Petshop;
