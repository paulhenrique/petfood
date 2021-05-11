import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCustomer as setStateCustomer } from "../../store/modules/shop/actions";

import Illustration from "../../assets/illustration.png";
import Header from "../../components/Header";

function Cadastro() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "individual",
    country: "br",
    email: "",
    documents: [
      {
        type: "cpf",
        number: "",
      },
    ],
    phone_numbers: [""],
    birthday: "",
  });
  const goToCheckout = function () {
    dispatch(setStateCustomer(customer));
  };
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hideCart />
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
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              onChange={(e) => {
                setCustomer({ ...customer, phone_numbers: [e.target.value] });
              }}
            />
            <input
              type="text"
              min="19"
              max="19"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
              onChange={(e) => {
                setCustomer({
                  ...customer,
                  documents: [
                    {
                      type: "cpf",
                      number: e.target.value,
                    },
                  ],
                });
              }}
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
              onChange={(e) => {
                setCustomer({
                  ...customer,
                  birthday: e.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                goToCheckout();
              }}
              className="btn btn-lg btn-block w-100 btn-secondary"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
