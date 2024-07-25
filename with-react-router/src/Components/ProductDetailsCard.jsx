const ProductDetailsCard = ({ product }) => {
  return (
    <div className="flex-container">
					{product.image && (
						<img src={product.image.url} alt="" className="cocktail-img" />
					)}
					<div className="cocktail-infos">
						<div className="row">
							<h3 className="label">Name: </h3>
							<p className="text">{product.name}</p>
						</div>
						<div className="row">
							<h3 className="label">Category: </h3>
							<p className="text">{product.category}</p>
						</div>
						<div className="row">
							<h3 className="label">Info: </h3>
							<p className="text">{product.info}</p>
						</div>
						<div className="row">
							<h3 className="label">Instructions: </h3>
							<p className="text">{product.instructions}</p>
						</div>
						<div className="row">
							<h3 className="label">Ingredients: </h3>
							<p className="text">{product.ingredients}</p>
						</div>
					</div>
				</div>
    );
}
 
export default ProductDetailsCard;