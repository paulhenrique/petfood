import Header from "../../components/Header";
import Product from "../../components/Product/PetShop";
import "./style.scss";
function Petshop() {
  return (
    <div className="h-100 petshop">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
              alt="Logo PetLove"
              className="img-fluid"
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
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h4 className="mb-4">Produtos</h4>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <Product />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Petshop;
