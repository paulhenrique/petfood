import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import Dock from "react-dock";
import Product from "../Product/list";
function Sidebar() {
  const [opened, setOpened] = useState(false);
  const { cart } = useSelector((state) => state.shop);
  const total = cart.map((e) => e.preco).reduce((a, b) => a + b);
  useEffect(() => {
    window.addEventListener("openCart", () => {
      setOpened(true);
    });
  }, []);
  return (
    <Dock
      position="right"
      onVisibleChange={(e) => {
        setOpened(e);
      }}
      isVisible={opened}
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola (5) </h5>

        <div className="row products">
          {cart.map((p) => (
            <Product product={p} key={p._id} />
          ))}
        </div>

        <div className="row footer align-items-end">
          <div className="col-12 d-flex justify-content-between">
            <b>Total</b>
            <h3>R$ {total.toFixed(2)}</h3>
          </div>
          <button className="btn btn-block btn-lg btn-primary rounded-0 h-50">
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
}

export default Sidebar;
