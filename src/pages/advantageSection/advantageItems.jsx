import React from 'react';
import { Link } from 'react-router-dom';
import './AdvantageSection.css';

const AdvantageItems = ({ data }) => {
	return (
		<div>
			<div className="row g-3">
				{data.map((item) => {
					const { id, img, title, desc, link } = item;
					return (
						<div className="col-12 col-lg-6" key={id}>
							<div className="content-box">
								<div className="d-flex justify-content-center">
									<img src={img} alt="" />
								</div>
								<div>
									<h4 className="adv_h4">{title}</h4>
									{link ? (
										<p className="adv_p">
											{desc} <Link to="/studies">{`(${link})`}</Link>
										</p>
									) : (
										<p className="adv_p">{desc}</p>
									)}

									{/* <p className="adv_p">{desc}</p> */}
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
