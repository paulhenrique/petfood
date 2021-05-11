import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPetshops } from "../../store/modules/shop/actions";
import Header from "../../components/Header";
import Map from "../../components/Map";
import Petshop from "../../components/Petshop";
import "./style.scss";

function Home() {
  const dispatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop);

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
          {petshops.map((el) => (
            <Petshop key={el._id} petShop={el} />
          ))}
        </ul>
      </div>
      <Map petShops={petshops} />
    </div>
  );
}

export default Home;
