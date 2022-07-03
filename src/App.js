import "./App.css";
import DrawerLeft from "./components/DrawerLeft";
import Info from "./components/Info";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <DrawerLeft />
      <Info />
    </div>
  );
}

export default App;
