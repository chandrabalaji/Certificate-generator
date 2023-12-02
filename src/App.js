import "./style.scss";
import Userinfo from "./components/Userinfo";
import Certificate from "./components/Certificate";
import { Route, Router, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Userinfo />} />
          <Route path="certificate" element={<Certificate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
