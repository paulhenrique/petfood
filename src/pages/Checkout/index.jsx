import Header from "../../components/Header";
import Product from "../../components/Product/list";
import { useSelector } from "react-redux";
import "./style.scss";
function Checkout() {
  const { cart } = useSelector((state) => state.shop);
  const total = cart
    .map((e) => e.preco)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  return (
    <div className="h-100">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12  d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$ {total}</h3>
              </div>
              <div className="col-12">
                <div className="btn btn-block w-100 btn-lg btn-primary">
                  Finalizar Compra
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="box mb-4 box-sidebar">
              <h4>Minha Sacola ({cart.length})</h4>
              <div className="row products">
                {cart.map((p) => (
                  <Product product={p} key={p._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
