import "./style.scss";

function Product() {
  return (
    <div className="col-md-3">
      <div className="containProductImage d-flex pt-4 justify-content-center position-relative">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/715aYupxI5L._AC_SX466_.jpg"
          alt="Imagem da Ração"
        />
        <button className="btn btn-lg rounded-circle btn-primary position-absolute">
          +
        </button>
      </div>
      <div className="d-flex justify-content-between w-100 pt-2">
        <div className="left">
          <span className="mdi mdi-star"></span>
          <b>2,8</b>
        </div>
        <label className="badge">R$ 22,90</label>
      </div>
      <div className="title pt-2">
        <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
      </div>
    </div>
  );
}

export default Product;
