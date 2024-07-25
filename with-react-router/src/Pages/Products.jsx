import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { getAllCocktails } from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const { cocktails } = await getAllCocktails();
      setProducts(cocktails);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>CockTails</h1>
      </div>
      <div className="cocktails-container">
        {products.map((product) => (
          <div key={product.id} className="cocktail-card">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
