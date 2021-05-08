import "./style.scss";
function Product() {
  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/715aYupxI5L._AC_SX466_.jpg"
            className="img-fluid"
            alt="Nome da ração"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>
              Amazon Ração Baw Waw para cães pequeno e médio porte sabor Carne e
              Frango 15kg
            </b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
