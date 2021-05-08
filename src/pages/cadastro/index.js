import Logo from "../../assets/logo-white.png";
import Illustration from "../../assets/illustration.png";

function Cadastro() {
  return (
    <div className="container-fluid h-100 bg-primary">
      <div className="col-12">
        <img src={Logo} alt="" />
      </div>
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} alt="Ilustração" className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco para fazer o seu pet feliz.
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
            />
            <button className="btn btn-lg btn-block w-100 btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
