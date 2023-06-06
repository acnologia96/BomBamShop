import "./App.css";
import Data from "./DataProduct/Data";
function App() {
  return (
    <div>
      <header>
        <a href="/">BomBam Shop</a>{" "}
      </header>
      <main>
        <h1>สินค้า</h1>
        <div className="products">
          {Data.product.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to Card </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
