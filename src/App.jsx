import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import "./App.css";
import Header from "./Componentes/Elements/Header";

const App = () => {
  const [informations, setInformations] = React.useState(false);

  return (
    <BrowserRouter>
      <Header setInformations={setInformations} informations={informations} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              informations={informations}
              setInformations={setInformations}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
