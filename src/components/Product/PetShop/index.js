import "./style.scss";

function Product({ produto }) {
  return (
    <div className="col-md-3 mb-5 petshopProduct">
      <div className="containProductImage d-flex pt-4 justify-content-center position-relative">
        <img src={produto.capa} alt={produto.nome} />
        <button className="btn btn-lg rounded-circle btn-primary position-absolute">
          +
        </button>
      </div>
      <div className="d-flex justify-content-between w-100 pt-2">
        <label className="badge">R$ {produto.preco}</label>
      </div>
      <div className="title pt-2">
        <b>{produto.nome}</b>
      </div>
    </div>
  );
}

export default Product;
