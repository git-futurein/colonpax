import React from 'react';
import HeaderBox from '../../quiz/headerBox';

const Header = () => {
	return (
		<div>
			<HeaderBox />
			<div className="container">
				<h2 className="heading-2">Colonpax</h2>
				<div className="content-wrapper row g-4">
					<div className="col-12 col-lg-7">
						<div className="content">
							<h2 className="common_h2">
								Es ist echt. Es ist köstlich. Und es wirkt nachweislich!
							</h2>
							<p className="text">
								Löse die Verstopfung, verliere an Gewicht und sage Tschüss zum Blähbauch
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<figure className="image">
							<img src="/images/plan-img-1.png" alt="" />
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
