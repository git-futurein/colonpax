import React from 'react';
import { Link } from 'react-router-dom';
import AdvantageItems from '../../advantageSection/advantageItems';
import './diese.css';

const Diese = () => {
	const diesesItemData = [
		{
			id: 1,
			img: '/images/diese-img-1.png',
			title: 'Inulin',
			desc: 'Der in Colonpax verwendet kalorienarme Ballaststoff Inulin ist in Studien bewährt. Inulin reguliert den Energiestoffwechsel, kurbelt die Verdauung an und löst auch Verstopfungen. Es kettet sich an Flüssigkeiten und quillt auf, wodurch der Stuhlgang normalisiert wird und du dich länger satt fühlst',
			link: 1,
		},
		{
			id: 2,
			img: '/images/diese-img-2.png',
			title: 'Flohsamenschalenpullver',
			desc: 'Das in Colonpax verwendete hochkonzentrierten Flohsamenschalenpullver ist ein wahrer Alleskönner: Es reguliert sie Blutdruck, die Blutfette und auch den Blutzuckerspiegel und unterstützt gleichzeitig das Abnehmen. Es fördert eine gesunde Darmflora und hilft bei Darmbeschwerden, stoppt den Durchfall und löst die Verstopfung.',
			link: 2,
		},
		{
			id: 3,
			img: '/images/diese-img-3.png',
			title: 'Guar',
			desc: 'Colonpax enthält konzentriertes Guar. Durch Studien belegt, besitzt es nicht nur eine aufquellende Wirkung und schützt dich somit vor Heisshunger und Essattacken, sondern auch eine bindende Wirkung. So werden Fette im Körper aufgefangen, was wiederum zu einer Reduzierung des Körpergewicht führt. Es unterstützt die Darmfunktion und hilft dabei exogene und endogene Toxine zu absorbieren, die das Darmnervensystem schädigen können.',
			link: 2,
		},
		{
			id: 4,
			img: '/images/diese-img-4.png',
			title: 'Natürlicher Erdbeergschmack',
			desc: 'Damit es nicht nur wirkt sondern auch einfach lecker schmeckt. Aus natürliche Aromen hergestellt ist unser Produkt einzigartig lecker und erfrischend zugleich mit einer zart süaßen Note. Jeder Drink schmeckt einfach einzigartig!',
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
				<Link to="/studies">
					<p className="text text-center mb-5">
						KLICKE HIER FÜR DIE VOLLSTÄNDIGE LISTE DER INHALTSSTOFFE
					</p>
				</Link>

				<AdvantageItems data={diesesItemData} />
			</div>
		</div>
	);
};

export default Diese;
