// import logo from "./logo.svg";
import "./App.css";

function App() {
  const AllHero = ["SHAKAIB KHAN", 32, "Riaz", 44, "Bappa", 35];
  const Heroine = ["OPu", "shabnur", "purnima"];
  const allProducts = [
    { name: "Photoshop", price: "$ 24.00" },
    { name: "Illustrator", price: "$ 30.00" },
    { name: "Adobe XD", price: "$ 45.00" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <MakeDive name={AllHero[0]} heroine={Heroine[0]} Age={AllHero[1]}>
          {" "}
        </MakeDive>
        <MakeDive name={AllHero[2]} heroine={Heroine[1]} Age={AllHero[3]}>
          {" "}
        </MakeDive>
        <MakeDive name={AllHero[4]} heroine={Heroine[2]} Age={AllHero[5]}>
          {" "}
        </MakeDive>
        <Product name={allProducts[0].name} price={allProducts[0].price}></Product>
        <Product name={allProducts[1].name} price={allProducts[1].price}></Product>
        <Product name={allProducts[2].name} price={allProducts[2].price}></Product>
        
      </header>
    </div>
  );
}

function MakeDive(props) {
  const styleDiv = {
    border: "1px solid yellow",
    margin: "10px",
  };
  return (
    <div style={styleDiv}>
      <h2> Hero Name:{props.name} </h2>
      <h3>His Heroine : {props.heroine} </h3>
      <h3> Age: {props.Age} </h3>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid red",
    backgroundColor: "blue",
    width: "240px",
    borderRadius: "5px",
  };
  return (
    <div style={productStyle}>
      <div>
        <h3>{props.name}</h3>
        <h5>{props.price}</h5>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default App;
