import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Cadastro from "./pages/Cadastro";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Petshop from "./pages/Petshop";

function Routes() {
  return (
    <>
      <Sidebar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/petshop/:id" exact component={Petshop} />
      </Router>
    </>
  );
}

export default Routes;
