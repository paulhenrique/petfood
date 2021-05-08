import Header from "../../components/Header";
import Petshop from "../../components/Petshop";
import "./style.scss";

function Home() {
  return (
    <div className="container-fluid">
      <Header hideCart />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list d-flex">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Petshop />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
