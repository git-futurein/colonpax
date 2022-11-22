import React from 'react';
import AdvantageItems from '../../advantageSection/advantageItems';
import './diese.css';

const Diese = () => {
	const diesesItemData = [
		{
			id: 1,
			img: '/images/diese-img-1.png',
			title: 'Entgiftung für den Körper',
			desc: 'Der einzigartige Komplex aus essenziellen Nährstoffen fördert die Entgiftung deines Körpers, indem es den Darm ganzheitlich reinigt und exogene und endogene Toxine absorbiert, die das Darmnervensystem schädigen können.',
		},
		{
			id: 2,
			img: '/images/diese-img-2.png',
			title: 'nachhaltige Abnehmerfolge',
			desc: 'Colonpax ist ein einzigartiger Ballaststoffkomplex, der die Darmflora und das Verdauungssystem verbessert und deinen Stoffwechsel wieder in Schwung bringt.',
		},
		{
			id: 3,
			img: '/images/diese-img-3.png',
			title: 'Mehr bessere Verdauung',
			desc: 'Colonpax kann deine Energie steigern und bring die Darmfunktion in Schwung. Es löst die Verstofung, reduziert den Blähbauch und Blähungen und lindert die Krämpfe.',
		},
		{
			id: 4,
			img: '/images/diese-img-4.png',
			title: 'Der essenzielle Ballaststoff',
			desc: 'Einzigartiger Ballaststoffkomplex Colonpax ist ein einzigartiger Ballaststoffkomplex, der Darmbeschwerden wie Durchfall und Verstopfung lindert, den Blutzuckerspiegel reguliert und das Abnehmen beschleunigt',
		},
	];

	return (
		<div className="diese py-5">
			<div className="container">
				<h2 className="common_h2 h2_primary text-center">
					Diese Inhaltsstoffe
					<span className="text-color">heizen deinen Stoffwechsel</span>
					an und schenken dir ein <span className="text-color">neues Darmgefühl</span>
					bereits nach
				</h2>
				<h2 className="common_h2 common_h2_bg text-center">
					<img src="/images/Brus-img.png" alt="" />
					<span>12–72 Stunden</span>
				</h2>
				<p className="text text-center mb-5">
					KLICKE HIER FÜR DIE VOLLSTÄNDIGE LISTE DER INHALTSSTOFFE
				</p>

				<AdvantageItems data={diesesItemData} />
			</div>
		</div>
	);
};

export default Diese;
