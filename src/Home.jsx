import React from "react";
import AboutLeft from "./Componentes/AboutLeft";

const Home = ({ informations, setInformations }) => {
  return (
    <div>
      <AboutLeft
        informations={informations}
        setInformations={setInformations}
      />
    </div>
  );
};

export default Home;
