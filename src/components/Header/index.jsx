import Logo from "../../assets/logo.png";
import LogoWhite from "../../assets/logo-white.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header({ whiteVersion, hideCart }) {
  const { cart } = useSelector((state) => state.shop);
  const productsInCart = cart.length;
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-6 text-center py-5 offset-3 d-flex justify-content-center align-items-center">
          <header>
            <Link to="/">
              <img
                src={whiteVersion ? LogoWhite : Logo}
                alt="PetFood"
                className="img-responsive"
              />
            </Link>
          </header>
        </div>
        <div className="col-3  text-align-right d-flex justify-content-end align-items-center">
          {!hideCart && (
            <button
              className="btn btn-secondary ml-0"
              onClick={() => {
                openDrawer();
              }}
            >
              <span className="mdi mdi-cart pr-1"></span>
              <b>{productsInCart} Itens</b>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
