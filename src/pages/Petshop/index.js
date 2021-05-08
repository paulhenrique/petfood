import Header from "../../components/Header";

function Petshop() {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
              alt="Logo PetLove"
              className="img-responsive "
            />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <b>2,8</b>
              <span className="mdi mdi-cash-usd-outline"></span>
              <b>$$$</b>
              <span className="mdi mdi-crosshairs-gps"></span>
              <b>2,9 km</b>
            </div>
          </div>
          <div className="col10"></div>
        </div>
      </div>
    </div>
  );
}

export default Petshop;
