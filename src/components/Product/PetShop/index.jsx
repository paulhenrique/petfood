import { useDispatch, useSelector } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";
import "./style.scss";

function Product({ produto }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const isOnShoppingCart =
    cart.findIndex((p) => p._id === produto._id) === -1 ? true : false;

  const handleToggleShoppingCart = () => {
    dispatch(toggleCartProduct(produto));
  };

  return (
    <div className="col-md-3 mb-5 petshopProduct">
      <div className="containProductImage d-flex pt-4 justify-content-center position-relative">
        <img src={produto.capa} alt={produto.nome} />
        <button
          className={`btn btn-lg rounded-circle ${
            isOnShoppingCart ? "btn-primary" : "btn-secondary"
          }  position-absolute`}
          onClick={() => handleToggleShoppingCart()}
        >
          {isOnShoppingCart ? "+" : "-"}
        </button>
      </div>
      <div className="d-flex justify-content-between w-100 pt-2">
        <label className="badge">R$ {produto.preco}</label>
      </div>
      <div className="title pt-2">
        <b>{produto.nome}</b>
      </div>
    </div>
  );
}

export default Product;
