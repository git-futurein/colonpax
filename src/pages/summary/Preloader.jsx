import React from 'react';

const Preloader = () => {
	// const [first, setfirst] = useState(second)
	return (
		<>
			<div className="preloader">
				<div className="loader"></div>
				<h3 className="heading text-center">Dein Programm wird erstellt...</h3>
			</div>
		</>
	);
};

export default Preloader;
