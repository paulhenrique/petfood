import Sidebar from "./components/Sidebar";
import Cadastro from "./pages/Cadastro";
import Checkout from "./pages/Checkout";
import Petshop from "./pages/Petshop";
function App() {
  return (
    <div className="App h-100">
      <Sidebar />
      <Petshop />
    </div>
  );
}

export default App;
