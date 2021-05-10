import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import Header from "../../components/Header";
import Product from "../../components/Product/PetShop";
import "./style.scss";

function Petshop() {
  const { id } = useParams();
  const [petShop, setPetShop] = useState({ product: [] });

  const buscaPetShop = async () => {
    try {
      const { data } = await api.get(`/petshops/${id}`);
      setPetShop(await data.petshop);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    buscaPetShop();
  }, []);

  return (
    <div className="h-100 petshop">
      <Header />
      <div className="container">
        {petShop && (
          <div className="row">
            <div className="col-2">
              <img
                src={petShop.logo}
                alt={`Logo ${petShop.logo}`}
                className="img-fluid"
              />
              <b>{petShop.nome}</b>
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
                {petShop.product.map((p) => (
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
