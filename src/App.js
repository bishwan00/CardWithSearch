import "./App.css";
import Container from "./components/container/Container";
import Left from "./components/left-side/Left";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Right from "./components/right-side/Right";
import Card from "./components/Card/Card";
import Cards from "./components/cards/Cards";
import ShowCountry from "./components/country/ShowCountry";

function App() {
  const [render, setRender] = useState(false);
  // const [showBlog, setShowBlog]
  const handleClick = (h) => {
    // 👇️ take the parameter passed from the Child component
    setRender(h);
  };
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <Container>
        <div className="bodyDiv">
          <Left handleClick={handleClick} />
          {render ? (
            <Right showBlog={false} showInsert={true} />
          ) : (
            <Right showBlog={true} showInsert={false} />
          )}
        </div>
      </Container>

      <Container>
        <h1 style={{ textAlign: "center", marginTop: "5%" }}>Rick and Morty</h1>
        <Cards />
      </Container>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "5%" }}>Country</h1>
        <ShowCountry />
      </Container>
    </div>
  );
}

export default App;
