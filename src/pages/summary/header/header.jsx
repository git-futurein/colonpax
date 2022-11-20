import React from 'react';
import '../../heroSection/HeroSection.css';
// import hero from '../../assets/1.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div className="hero_section">
				<div className="container">
					<div className="row overflow-hidden">
						<div className="col-md-7 hero_div">
							<h2 className="common_h2">
								So wird Colonpax <br /> dein Leben veränder
							</h2>
							<p className="common_p mb-5">
								Keiner redet darüber aber jeder macht es. Egal ob jung oder alt, reich oder arm,
								Kanzler oder Königin.
							</p>
							<h2 className="common_h2 common_h2_secondary">
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
