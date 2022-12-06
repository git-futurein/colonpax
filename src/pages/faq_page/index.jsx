import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../tarms/tarms.css';

const Faq_page = () => {
	return (
		<div className="tarms">
			<img src="/images/tarms-img-1.png" className="tarms-img tarms-img-1" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-2" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-3" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-4" alt="" />

			<div className="container">
				<div className="tarms-header">
					{/* <h2 className="tarms_heading2_primary">Colonpax</h2> */}
					<Link to="/" className="mb-3 d-block">
						<img src="/images/logo.svg" alt="" />
					</Link>
					<h2 className="tarms_heading2_secondary text-center">Häufig gestellte Fragen</h2>
					<p className="text">
						Hier findest Du eine kurze Auswahl an den wichtigsten Fragen. Sollte deine Frage
						unbeantwortet sein besuche einfach unsere FAQ Seite oder kontaktiere uns.
					</p>
				</div>

				<div className="tarms_wrapper">
					<div className="tarms_item">
						<h5 className="tarms_heading5">1. Kann Colonpax Blähungen verursachen?</h5>
						<p className="text">
							Der Colonpax - Ballaststoffomplex ist gut verträglich und sicher. Wenn du Colonpax zum
							ersten Mal verwendest, könntest du in den ersten Tagen der Anwendung leichte Blähungen
							verspüren. Aber bitte keine Sorge, dein Körper muss sich nur auf die erhöhte
							Ballaststoffzufuhr einstellen.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">2. Warum sind Ballaststoffe so wichtig?</h5>
						<p className="text">
							Ballaststoffe sind wichtig für die Gesundheit , deine Verdauung und für einen
							regelmäßigen Stuhlgang. Der Colonpax - Ballaststoffkomplex sorgt auch für ein längeres
							Sättigungsgefühl, und aktiviert den Stoffwechsel. Ballaststoffe können auch zur
							Vorbeugung von Krankheiten wie Diabetes, Herzerkrankungen oder Darmkrebs beitragen.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">3. Wann fängt Colonpax an zu wirken?</h5>
						<p className="text">
							Das hängt von deiner individuellen Stoffwechselreaktion und deinem Stoffwechselalter
							ab und kann bei jedem unterschiedlich variieren; nach ca. 24–72 Stunden solltest du
							aber eine Veränderung bei deinem Stuhlgang bemerken. Wir raten Dir daher unser
							kostenfreies Quiz zu machen um zu sehen wie Colonpax bei Dir wirkt.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							4. Kann ich Colonpax während des Intervall-Fastens einnehmen?
						</h5>
						<p className="text">
							Kurz und einfach: Ja, du kannst Colonpax während des Intervall-Fastens zu dir nehmen
							und wird dein Fasten auch nicht brechen.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							5. Kann ich Colonpax während einer Keto-Diät einnehmen?
						</h5>
						<p className="text">
							Ja, das kannst du gern machen! Colonpax wird im Gegensatz zu anderen Mikronährstoffen
							wie beispielsweise Proteinen oder Kohlenhydraten, die der Körper abbaut und
							absorbiert, nicht verdaut. Stattdessen bleibt der Colonpax - Ballaststoffkomplex sie
							relativ intakt in Magen, Dünndarm und Dickdarm. Du wirst also keine zusätzlichen
							Kohlenhydrate aufnehmen. Dein Körper wird die Ballaststoffe weder absorbieren noch in
							Zucker zerlegen.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">6. Wird Colonpax mein Intervall-Fasten brechen ?</h5>
						<p className="text">
							Auch hier ist die Antwort kurz und einfach: Nein. Du bist auch hier auf der sicheren
							Seite: Es wird dein Fasten nicht brechen. Im Gegensatz zu anderen Makronährstoffen wie
							Fetten, Proteinen oder Kohlenhydraten, die der Körper abbaut und absorbiert, wird der
							Colonpax - Ballaststoffkomplex nicht von deinem Körper verdaut. Und wie bei Tee oder
							Kaffee empfehlen wir dir auch hier, den Drink während deines Fasten-Fensters
							einzunehmen.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							7. Kann ich Colonpax während einer Keto-Diät einnehmen?
						</h5>
						<p className="text">
							Ja, das kannst du gern machen! Colonpax wird im Gegensatz zu anderen Mikronährstoffen
							wie beispielsweise Proteinen oder Kohlenhydraten, die der Körper abbaut und
							absorbiert, nicht verdaut. Stattdessen bleibt der Colonpax - Ballaststoffkomplex sie
							relativ intakt in Magen, Dünndarm und Dickdarm. Du wirst also keine zusätzlichen
							Kohlenhydrate aufnehmen. Dein Körper wird die Ballaststoffe weder absorbieren noch in
							Zucker zerlegen.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							8. Wie unterscheidet sich Colonpax zu anderen Nahrungsergänzungsmitteln mit
							Ballaststoffen wie beispielsweise Flohsamenschalen?
						</h5>
						<p className="text">
							Ja, es gibt ähnliche Produkte auf dem Markt, und wir können deren Produktqualität
							nicht bewerten und wollen uns auch hierzu nicht äussern. Wir können dir aber
							versichern, dass Colonpax ein sensibler aufeinander abgestimmter Ballaststoffkomplex
							ist, der in seiner Rezeptur einzigartig ist. Wir verwenden nur die besten Rohstoffe in
							Bio-Qualität, die ausgiebig und mit einem hohen Qualitätssicherungsstandard überprüft
							wurden. Wir wollen nicht prahlen, aber unser Produkt ist hochwirksam und braucht nicht
							viel Zeit, um zu wirken.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">9. Wie lange sollte ich Colonpax circa einnehmen?</h5>
						<p className="text">
							Um die besten Ergebnisse zu erzielen, solltest du Colonpax für einen Gesamtzeitraum
							von 2–3 Monate einnehmen. Mach dir keine Sorgen – es geht schnell!
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							10. Kann ich Colonpax während der Schwangerschaft oder Stillzeit einnehmen?
						</h5>
						<p className="text">
							Mutter zu werdend zu sein ist eine einzigartige Reise, die aber in Wirklichkeit nicht
							immer einfach ist. Eine Schwangerschaft und die Stillzeit sind geprägt von
							Stimmungsschwankungen, Blähungen, Krämpfen,Empfindlichkeit gegenüber bestimmten
							Lebensmitteln und vor allem Heißhunger. Du musst deine Ernährung ausbalancieren und
							sicherstellen, dass du trotzdem alle wichtigen Nährstoffe für Dich und dein Kind
							erhältst. Colonpax kann dabei helfen. Um sicherzugehen, ob sich Colonpax für deine
							Reise eignet, empfehlen wir Dir, deinen Arzt zu konsultieren, bevor du unser Produkt
							verwendest, besonders wenn du schwanger bist, stillst oder versuchst, schwanger zu
							werden.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							11. Kann ich Colonpax als Reizdarm-Syndrom Patient einnehmen?
						</h5>
						<p className="text">
							Hier muss ganz klar differenziert werden, denn es hängt davon ab, welche Art von
							Reizdarmsyndrom (RDS) du hast (egal welche, RDS ist die Hölle). Wenn du RDS-C hast,
							empfehlen wir dir, die Aufnahme von löslichen Ballaststoffen zu erhöhen. Coloonpax ist
							dafür eine ausgezeichnete Wahl. Wenn du allerdings an RDS-D leidest, müssen wir dir
							von der Einnahme von Colonpax leider abraten. Solltest du RDS haben, empfehlen wir
							dir, vor dem Kauf bzw. Einnahme von Nahrungsergänzungsmitteln mit deinem Arzt zu
							sprechen bzw. ihn zu konsultieren.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							12. Muss ich, wenn ich Colonpax einnehme, ständig auf die Toilette?
						</h5>
						<p className="text">
							In den ersten Tagen der Anwendung könntest du einige Veränderungen beim Stuhlgang
							spüren oder leichte Blähungen bemerken, aber keine Sorge. Dein Körper braucht etwas
							Zeit, um sich auf die erhöhte Ballaststoffzufuhr einzustellen. Es dauert dann circa 5
							Tage. Danach wirst du nicht mehr so oft auf dem Thron sitzen! Dein Stuhlgang wird dann
							unbeschwert, Du wirst dich leichter fühlen und deine allgemeinen Darmbeschwerden
							können sich bereits jetzt lindern.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							13. Wie lange dauert es bis ich mein Paket mit Colonpax erhalte?
						</h5>
						<p className="text">
							Die Lieferung dauert 3–7 Werktage. Aber keine Sorge, Sobald dein Paket auf dem Weg zu
							dir ist, erhältst du eine E-Mail mit dem Trackingkink des Versanddiesntleisters (DHL
							oder GLS)
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">14. Kann ich Colonpax mit Diabetes einnehmen ?</h5>
						<p className="text">
							Ballaststoffreiche Ergänzungsmittel wie Colonpax können Diabetiker sicher neben ihrer
							normalen Ernährung zu sich nehmen, da es gut vertragen wird und die glykämische und
							lipide Kontrolle bei Männern und Frauen mit Diabetes verbessert. <br />
							<br />
							Du solltest Colonpsx{' '}
							<strong>
								<u>
									mindestens 2 Stunden vor oder nach jeglichen Medikamenten einnehmen, da der
									lösliche Ballsatstoffkomplex die Aufnahme mehrerer Medikamentenklassen
									verschlechtern kann.
								</u>
							</strong>
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							15. Kann ich Colonpax als stillende Mutter einnehmen ?
						</h5>
						<p className="text">
							Der Colonpax Ballaststoffkomplec (Inulin, Flohsamenschalen und Guargummi) ist
							unbedenklich für stillende Mütter. Diese Ballaststoffe können im Gegensatz zu anderen
							Kohlenhydraten nicht in verdauliche Zuckermoleküle aufgespalten werden und
							beeinträchtigen daher auch nicht die Qualität der Muttermilch. <br />
							<br />
							Generell raten wir, immer zuerst einen Arzt zu konsultieren, bevor du in der Stillzeit
							irgendwelche Nahrungsergänzungsmittel kaufst.
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">
							16. Kann ich Colonpax mit einer Schilddrüsenüberfunktion bedenkenlos zu mir nehmen?
						</h5>
						<p className="text">
							Ballaststoffe sind ein wichtiger Bestandteil der Ernährung, aber es gibt viele Aspekte
							einer ballaststoffreichen Ernährung, die für Menschen mit Schilddrüsenerkrankungen von
							besonderer Bedeutung und Nutzen sind. Ballaststoffe senken das Risiko für
							Herz-Kreislauf-Erkrankungen, helfen beim Gewichtsverlust und bei der Kontrolle des
							Gewichts, fördern das Verdauungssystem, helfen bei der Kontrolle des
							Blutzuckerspiegels und verringern das Risiko von Divertikulitis. <br />
							<br />
							Colonpax ist ein natürlicher Ballaststoffkomplex auf pflanzlicher Basis, der die
							Gesundheit der Verdauung fördert und sich positiv auf den Blutzuckerspiegel, den
							Blutdruck und den Gewichtsverlust auswirkt. <br />
							<br />
							Bitte denke aber daran, dass Ballaststoffe die Aufnahme von Medikamenten
							beeinträchtigen und die Dosierung deiner Schilddrüsenmedikamente erheblich verändern
							können. Deshalb solltest du darauf achten, dass du deine Schilddrüsenmedikamente
							mindestens eine Stunde vor dem Essen oder der Einnahme von Ballaststoffen zu dir
							nimmst.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq_page;
