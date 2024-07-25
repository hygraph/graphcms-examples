import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailsCard from '../Components/ProductDetailsCard';
import { getProductBySlug } from '../api';

const ProductDetails = () => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const { cocktail } = await getProductBySlug(slug)
			setProduct(cocktail);
		};

		fetchProduct();
	}, [slug]);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<div className="title">
					<h1>{product.name}</h1>
				</div>
				<ProductDetailsCard product={product}/>
			</div>
		</div>
	);
};

export default ProductDetails;
