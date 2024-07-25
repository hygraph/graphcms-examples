import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <>
      <img src={product.image.url} alt="" className="cocktail-img" />
      <div className="cocktail-info">
        <div className="content-text">
          <h2 className="cocktail-name">{product.name}</h2>
          <span className="info">{product.info}</span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <div className="btn">View Details</div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
