import React from 'react';
import { Link } from 'react-router-dom';
import '../../heroSection/HeroSection.css';
// import hero from '../../assets/1.png';
// import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div className="hero_section overflow-hidden">
				<div className="container">
					<div className="hero_section_heading d-flex justify-content-between align-items-center flex-wrap">
						<h2 className="common_h2">Colonpax</h2>
						<Link to="/plans" className="btn btn-product text-decoration-none text-white">
							PRODUKT ANZEIGEN
						</Link>
					</div>
					<div className="row ">
						<div className="col-md-7 hero_div">
							<h2 className="common_h2 d-none d-sm-block">
								So wird Colonpax <br /> dein Leben veränder
							</h2>
							<h2 className="common_h2 d-sm-none">So wird Colonpax dein Leben veränder</h2>
							<p className="common_p">
								Keiner redet darüber aber jeder macht es. Egal ob jung oder alt, reich oder arm,
								Kanzler oder Königin.
							</p>
							<h2 className="common_h2 common_h2_secondary d-none d-sm-block">
								Basierend auf deinen <br /> Antworten wirst du
							</h2>
							<h2 className="common_h2 common_h2_secondary d-sm-none">
								Basierend auf deinen Antworten wirst du
							</h2>
						</div>
						<div className="col-md-5">
							<div className="banner-img-part">
								<img src="/images/plan-img-5.png" alt="hero image" className="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
