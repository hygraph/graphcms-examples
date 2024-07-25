import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">
					<h2>It's time for some Cocktails</h2>
					<Link to="/products">
						<div className="btn">View Cocktails</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
