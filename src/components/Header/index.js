import Logo from "../../assets/logo.png";
import LogoWhite from '../../assets/logo-white.png';
function Header({ whiteVersion }) {
  return (
    <div className="col-12 text-center py-5">
      <header>
        <img src={whiteVersion ? LogoWhite : Logo} alt="PetFood" className="img-responsive" />
      </header>
    </div>
  )
}

export default Header
