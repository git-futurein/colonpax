import React from 'react';
import './AdvantageSection.css';
import jar from '../../assets/Group 39.svg';
import bord from '../../assets/Group 43.svg';
import watch from '../../assets/Group 41.svg';
import glass from '../../assets/Group 45.svg';
import { Link } from 'react-router-dom';
import AdvantageItems from './advantageItems';

const AdvantageSection = () => {
	const advantageItemData = [
		{
			id: 1,
			img: bord,
			title: 'Entgiftung für den Körper',
			desc: 'Der einzigartige Komplex aus essenziellen Nährstoffen fördert die Entgiftung deines Körpers, indem es den Darm reinigt und exogene und endogene Toxine absorbiert, die das Darmnervensystem schädigen können.',
		},
		{
			id: 2,
			img: watch,
			title: 'nachhaltige Abnehmerfolge',
			desc: 'Colonpax ist ein einzigartiger Ballaststoffkomplex, der die Darmflora und das Verdauungssystem verbessert und deinen Stoffwechsel aktiviert',
		},
		{
			id: 3,
			img: jar,
			title: 'Mehr Energie und bessere Verdauung',
			desc: 'Colonpax kann deine Energie steigern und bringt die Darmfunktion in Schwung. Es löst die Verstofung, reduziert den Blähbauch und Blähungen und lindert die Krämpfe.',
		},
		{
			id: 4,
			img: glass,
			title: 'Der essenzielle Ballaststoff',
			desc: 'lindert Darmbeschwerden wie Durchfall und Verstopfung, reguliert den Blutzuckerspiegel und hilft dabei das Abnehmen zu Beschleunigen ohne dabei auf etwas zu verzichten',
		},
	];

	return (
		<div className="AdvantageSection py-5" id="lösung">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 text-center m-auto">
						<h2 className="advantage_h2">
							Endlich ein neues Darmgefühl, damit Dich nichts mehr aufhält!
						</h2>
						<p className="advantage_p">
							Colonpax ist das Resultat neuster Erkenntnisse der Magen-Darm-Forschung: Eine sanfte
							Lösung für alle, die ihren Körper entgiften, ihre Immunabwehr stärken und Stoffwechsel
							reparieren wollen.
						</p>
					</div>
				</div>

				<AdvantageItems data={advantageItemData} />

				<div className="text-center py-4">
					<Link to="/studies">
						<p className="link_paragraph">
							LESEN SIE HIER DIE AUSFÜHRLICHE STUDIENLISTE ZU UNSEREN INHALTSSTOFFEN
						</p>
					</Link>
					<Link to="/quiz">
						<button className="nav_btn">MACH DEN TEST</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AdvantageSection;
