import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Product from "../../components/Product/PetShop";
import { requestPetshop } from "../../store/modules/shop/actions";
import "./style.scss";

function Petshop() {
  const dispatch = useDispatch();
  const { petshop } = useSelector((state) => state.shop);

  const { id } = useParams();

  useEffect(() => {
    dispatch(requestPetshop(id));
  }, []);

  return (
    <div className="h-100 petshop">
      <Header />
      <div className="container">
        {petshop && (
          <div className="row">
            <div className="col-2">
              <img
                src={petshop.logo}
                alt={`Logo ${petshop.logo}`}
                className="img-fluid"
              />
              <b>{petshop.nome}</b>
              <div className="petshop-infos">
                <span className="mdi mdi-star"></span>
                <b>2,8</b>
                <span className="mdi mdi-cash-usd-outline"></span>
                <b>{petshop.categoria}</b>
                <span className="mdi mdi-crosshairs-gps"></span>
                <b>2,9 km</b>
              </div>
              <label className="badge badge-primary">Frete Grátis</label>
            </div>
            <div className="col-10">
              <h4 className="mb-4">Produtos</h4>
              <div className="row">
                {petshop &&
                  petshop.product?.map((p) => (
                    <Product key={p._id} produto={p} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Petshop;
