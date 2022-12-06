import React from 'react';

const Cards2 = ({ age }) => {
	const agePlus5 = +age + 5;

	return (
		<div className="cards2-wrapper">
			<div className="container">
				<div className="cards2">
					<div className="parcent">98%</div>
					<div className="details">
						<p className="text">
							In your age group ({age}-{agePlus5}) have lost{' '}
							<strong className="weight">7 kg</strong> in the first 4 weeks
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards2;
