import Header from "../../components/Header";
import Map from "../../components/Map";
import Petshop from "../../components/Petshop";
import "./style.scss";

function Home() {
  return (
    <div className="">
      <Header hideCart />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5 className="mb-5">Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list d-flex">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Petshop />
          ))}
        </ul>
      </div>
      <Map />
    </div>
  );
}

export default Home;