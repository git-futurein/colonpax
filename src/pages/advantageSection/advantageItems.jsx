import React from 'react';
import './AdvantageSection.css';

const AdvantageItems = ({ data }) => {
	return (
		<div>
			<div className="row g-3">
				{data.map((item) => {
					const { id, img, title, desc } = item;
					return (
						<div className="col-12 col-lg-6" key={id}>
							<div className="content-box">
								<div className="d-flex justify-content-center">
									<img src={img} alt="" />
								</div>
								<div>
									<h4 className="adv_h4">{title}</h4>
									<p className="adv_p">{desc}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AdvantageItems;
