// import logo from "./logo.svg";
import "./App.css";

function App() {
  const allProducts = [
    { name: "Photoshop", price: "$ 24.00" },
    { name: "Illustrator", price: "$ 30.00" },
    { name: "Adobe XD", price: "$ 45.00" },
    { name: "Adobe EL", price: "$ 45.00" },
  ];
  const products = allProducts.map((myProduct) => myProduct);
  console.log(products);

  return (
    <div className="App">
       {
        products.map(pd=> <Product product={pd.name} price={pd.price}></Product>)
       }
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid red",
    backgroundColor: "blue",
    width: "240px",
    borderRadius: "5px",
    color:'white'
  };
  console.log(props);
  return (
    <div style={productStyle}>
      <div>
        <h3>{props.product}</h3>
        <h5>{props.price}</h5>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default App;
