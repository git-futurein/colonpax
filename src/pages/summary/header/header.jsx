import React from 'react';
import { Link } from 'react-router-dom';
import '../../heroSection/HeroSection.css';
import HeaderBox from '../../quiz/headerBox';

const Header = () => {
	return (
		<div>
			<div className="hero_section overflow-hidden pb-5">
				<div className="container">
					<div className="hero_section_heading d-flex justify-content-between align-items-center flex-wrap pt-5">
						{/* <h2 className="common_h2">Colonpax</h2> */}
						<Link to="/">
							<img src="/images/logo.svg" alt="" />
						</Link>
						<Link to="/plans" className="btn btn-product text-decoration-none text-white">
							PRODUKT ANZEIGEN
						</Link>
						{/* <Link to="/email" className="btn btn-product text-decoration-none text-white">
							PRODUKT ANZEIGEN
						</Link> */}
					</div>
					<HeaderBox />
					<div className="row ">
						<div className="col-md-12 hero_div">
							<h2 className="common_h2 text-center">
								Colonpax schafft langfristige Ergebnisse durch die Beschleunigung deines
								Stoffwechsels, nicht durch restriktive Diäten
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
