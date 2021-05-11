import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestPetshops } from "../../store/modules/shop/actions";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header";
import Map from "../../components/Map";
import Petshop from "../../components/Petshop";
import "./style.scss";

function Home() {
  const dispatch = useDispatch();
  const [petShops, setPetShops] = useState([]);

  const buscarPetShops = async () => {
    try {
      const { data } = await api.get("/petshops");
      setPetShops(await data.petshops);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    dispatch(requestPetshops());
  }, []);
  return (
    <div className="">
      <Header hideCart />
      <div className="petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5 className="mb-5">Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list d-flex">
          {petShops.map((el) => (
            <Link
              key={el._id}
              style={{ textDecoration: "none", color: "#3d3d3d" }}
              to={`/petshop/${el._id}`}
            >
              <Petshop petShop={el} />
            </Link>
          ))}
        </ul>
      </div>
      <Map petShops={petShops} />
    </div>
  );
}

export default Home;
