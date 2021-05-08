import Logo from "../../assets/logo.png";
import LogoWhite from "../../assets/logo-white.png";
function Header({ whiteVersion }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-center py-5 offset-3 d-flex justify-content-center align-items-center">
          <header>
            <img
              src={whiteVersion ? LogoWhite : Logo}
              alt="PetFood"
              className="img-responsive"
            />
          </header>
        </div>
        <div className="col-3 text-align-right d-flex justify-content-end align-items-center">
          <button class="btn btn-secondary ml-0">
            <span className="mdi mdi-cart pr-1"></span>
            <b>2 Itens</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
