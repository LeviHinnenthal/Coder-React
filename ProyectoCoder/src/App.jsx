import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListemContainer from "./components/ItemListenContainer/ItemListemContainer";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListemContainer greeting={"Bienvenido!"} />
      <Footer />
    </>
  );
}

export default App;
