import { useSpring, animated } from 'react-spring';

const Preloader = () => {
	// const [first, setfirst] = useState(second)
	function Number({ n }) {
		const { number } = useSpring({
			from: { number: 0 },
			number: n,
			delay: 200,
			config: { mass: 1, tension: 20, friction: 10 },
		});
		return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
	}

	return (
		<>
			<div className="preloader">
				<div className="loader"></div>
				<div className="number">
					<Number n={100} />
				</div>
				<h3 className="heading text-center">Dein Programm wird erstellt...</h3>
			</div>
		</>
	);
};

export default Preloader;
