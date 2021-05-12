import { useSelector, useDispatch } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";
import "./style.scss";
function Product({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const isOnShoppingCart =
    cart.findIndex((p) => p._id === product._id) === -1 ? true : false;

  const handleToggleShoppingCart = () => {
    dispatch(toggleCartProduct(product));
  };

  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/715aYupxI5L._AC_SX466_.jpg"
            className="img-fluid"
            alt={product.nome}
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">{product?.preco}</label>
          </h6>
          <small>
            <b>{product.nome}</b>
          </small>
        </div>
        <div className="col-3">
          <button
            className={
              isOnShoppingCart
                ? "btn rounded-circle btn-primary"
                : "btn rounded-circle btn-secondary"
            }
            onClick={() => handleToggleShoppingCart()}
          >
            {isOnShoppingCart ? "+" : "-"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
