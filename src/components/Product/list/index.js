function Product() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/715aYupxI5L._AC_SX466_.jpg"
            className="img-fluid"
            alt="Nome da ração"
          />
        </div>
        <div className="col-6">
          <small>
            <b>Nome do Produto</b>
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
