import React, { useEffect } from 'react';
import './tarms.css';

const Tarms = () => {
	const tarmsData = [
		{
			id: 1,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
		{
			id: 2,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
		{
			id: 3,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
		{
			id: 4,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
		{
			id: 5,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
		{
			id: 6,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
		{
			id: 7,
			title: 'EINFÜHRUNG',
			desc: `Diese Allgemeinen Verkaufsbedingungen sowie die hierin erwähnten Dokumente (die
							"Allgemeinen Geschäftsbedingungen") regeln die Nutzung dieser Website und den zwischen
							Ihnen und uns geschlossenen Vertrag. Sie sollten diese Allgemeinen
							Geschäftsbedingungen sorgfältig lesen, bevor Sie diese Website nutzen. Indem Sie diese
							Website nutzen oder eine Bestellung über diese Website aufgeben, erklären Sie sich mit
							der Einhaltung dieser Geschäftsbedingungen einverstanden. Wenn Sie nicht mit allen
							diesen Gf Bestellungen aufgeben. Diese Allgemeinen Geschäftsbedingungen können
							jederzeit geändert werden; Sie sollten sie zur Kenntnis nehmen, bevor Sie eine
							Bestellung aufgeben. Es gelten automatisch die zum Zeitpunkt Ihres Besuchs auf der
							Website oder zum Zeitpunkt des Vertragsabschlusses geltenden Bedingungen (wie unten
							definiert). Der Vertrag (wie unten definiert) kann in jeder der Sprachen ausgeführt
							werden, in denen die Allgemeinen Geschäftsbedingungen verfügbar sind.`,
		},
	];

	return (
		<div className="tarms">
			<img src="/images/tarms-img-1.png" className="tarms-img tarms-img-1" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-2" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-3" alt="" />
			<img src="/images/cards-img-1.png" className="tarms-img tarms-img-4" alt="" />
			<div className="container">
				<div className="tarms-header">
					<h2 className="tarms_heading2_primary">Colonpax</h2>
					<p className="text">
						<a href="www.colonpax.com">www.colonpax.com</a> (nachfolgend die Website oder E
						Commerce-Plattform) wird von der United Nutrition UÖ, Kesklinna linnaosa, Järvevana tee
						9, 11314, Tallinn, eingetragen im estnischen Handelsregister mit der Registernummer
						16591552, betrieben.
					</p>
					<h2 className="tarms_heading2_secondary">allgemeine Geschäftsbedingungen</h2>
				</div>

				<div className="tarms_wrapper">
					{tarmsData.map((item) => {
						const { id, title, desc } = item;
						return (
							<div className="tarms_item" key={id}>
								<h5 className="tarms_heading5">
									{id}. {title}
								</h5>
								<p className="text">{desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
//   2. UNSERE KONTAKTDATEN Diese Website wird von United Nutrition UÖ, einer estnischen juristischen Gesellschaft mit Sitz in de, Kesklinna linnaosa, Järvevana tee 9, 11314, Tallinn betrieben. United Nutrition UÖ ist im estnischen Register unter der Nr. eingetragen. 0739685673, (nachstehend "United Nutrition UÖ," genannt). Sie können uns kontaktieren unter E-Mail: info@colonpax.com Oder hello@colonpax.com 3. IHRE ANGABEN UND WEBSITE-BESUCH Alle von Ihnen gelieferten Informationen oder persönlichen Daten werden gemäß den in der Datenschutzerklärung festgelegten Bedingungen verarbeitet. Durch die Nutzung dieser Website erklären Sie sich mit der Verarbeitung dieser Informationen und Angaben einverstanden und erklären, dass alle von Ihnen gemachten Angaben wahrheitsgemäß und korrekt sind. 4. NUTZUNG DER WEBSITE Durch die Nutzung dieser Website und das Aufgeben von Bestellungen über diese Website erklären Sie sich damit einverstanden: 1. Verwenden Sie die Website nur für legitime Anfragen oder Bestellungen. 2. Geben Sie keine spekulativen, falschen oder betrügerischen Bestellungen auf. Wenn wir Grund zur Annahme haben, dass eine solche Bestellung aufgegeben wurde, behalten wir uns das Recht vor, die Bestellung zu stornieren und die zuständigen Behörden zu benachrichtigen. 3. Geben Sie eine korrekte, genaue E-Mail-Adresse, Postanschrift und/oder andere Informationen an, die es uns ermöglichen, mit Ihnen in Kontakt zu treten, in Anerkennung der Tatsache, dass wir diese Angaben verwenden können, um Sie zu kontaktieren, wenn wir dies für notwendig erachten (vgl. unsere Datenschutzerklärung). Wenn Sie nicht alle erforderlichen Informationen angeben, können wir Ihre Bestellung möglicherweise nicht bearbeiten. Mit der Bestellung über die Website erklären Sie, dass Sie mindestens 18 Jahre alt und rechtsfähig sind, einen Vertrag abzuschließen. 5. DIENSTVERFÜGBARKEIT Trotz der Tatsache, dass die Website und die E-Commerce Plattform mit grösstmöglicher Sorgfalt zusammengestellt werden, ist es möglich, dass Informationen unvollständig sind, materielle Fehler enthalten oder nicht auf dem neuesten Stand sind. Offensichtliche Fehler oder Irrtümer bei der Produktauswahl sind für United Nutrition UÖ, nicht bindend. Hinsichtlich der Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen ist United Nutrition UÖ, lediglich an die Mittelverpflichtung gebunden. United Nutrition UÖ, ist in keiner Weise haftbar im Falle von offensichtlichen Material- oder Druckfehlern. Wenn der Kunde spezifische Fragen hat, z.B. zu Größen, Farbe, Verfügbarkeit, Lieferbedingungen oder Methode, bitten wir den Kunden, sich vorab mit unserer Kundendienstabteilung in Verbindung zu setzen. Die Produktauswahl ist gültig solange der Vorrat reicht und kann jederzeit von United Nutrition UÖ, geändert oder zurückgezogen werden. United Nutrition UÖ, kann nicht für die Nichtverfügbarkeit eines Produktes haftbar gemacht werden. Wenn ein Angebot zeitlich begrenzt oder an Bedingungen geknüpft ist, wird dies im Angebot ausdrücklich angegeben. 6. ABSCHLUSS DES VERTRAGES Die in diesen Allgemeinen Geschäftsbedingungen enthaltenen Informationen und die auf der Website angegebenen Einzelheiten stellen eine Aufforderung zur Abgabe eines Angebots und kein Verkaufsangebot dar. Kein Vertrag in Bezug auf die Produkte besteht zwischen Ihnen und dem Verkäufer, bis wir Ihre Bestellung angenommen haben (unabhängig davon, ob der Gesamtbetrag der Bestellung von Ihrem Konto abgebucht wurde oder nicht). Wenn Ihre Bestellung nicht angenommen wird, der Betrag aber bereits von Ihrem Konto abgebucht wurde, erhalten Sie eine vollständige Rückerstattung. 7. WEBSITE-ABONNEMENT Um eine Bestellung aufzugeben, kann der Kunde zunächst ein persönliches Konto einrichten, indem er seine persönlichen Daten ausfüllt (das "Persönliche Konto"). Das Abonnement des Kunden wird von United Nutrition UÖ, nach Prüfung des vom Kunden ausgefüllten Standardformulars validiert. Eine Bestätigung des Abonnements wird dem Kunden per E-Mail zugesandt. Durch die Erstellung des persönlichen Kontos gewährleistet der Kunde die Richtigkeit und Vollständigkeit der angegebenen Daten. Der Kunde muss seine persönlichen Daten aktualisieren. Wenn ein Fehler in Bezug auf die Empfängeradresse auftritt, kann United Nutrition UÖ, nicht haftbar gemacht werden, falls die bestellten Produkte nicht geliefert werden können. Um eine Bestellung aufzugeben, muss der Kunde volljährig und voll geschäftsfähig sein und eine gültige Zahlungskarte besitzen, die von einer für den Zahlungsanbieter United Nutrition UÖ, akzeptablen Bank ausgestellt wurde. United Nutrition UÖ, behält sich das Recht vor, jede Anfrage oder Bestellung abzulehnen und ein Konto nach eigenem Ermessen zu schließen. 8. PRODUKTVERFÜGBARKEIT Alle Produktbestellungen sind von der Verfügbarkeit der Produkte abhängig. Dementsprechend behalten wir uns das Recht vor, Ihnen im Falle von Lieferproblemen oder wenn die Produkte nicht mehr vorrätig sind, durch vorherige Ankündigung Ersatz von gleicher oder höherer Qualität und höherem Wert anzubieten, den Sie dann nachbestellen können. Wenn Sie solche Ersatzprodukte nicht bestellen möchten, erstatten wir Ihnen die bereits gezahlten Gelder zurück. 9. ABLEHNUNG VON BESTELLUNGEN Wir behalten uns das Recht vor, jederzeit Produkte von der Website zu entfernen und/oder Inhalte oder Informationen, die auf der Website erscheinen, zu ersetzen oder zu ändern. Obwohl wir alle Anstrengungen unternehmen werden, um auf eingereichte Bestellungen zu reagieren, kann es außergewöhnliche Umstände geben, die es erforderlich machen, dass wir die Bearbeitung oder Annahme einer Bestellung nach ihrem Eingang und nachdem wir Ihnen eine Auftragsbestätigung geschickt haben, ablehnen. Weder Sie noch Dritte können uns haftbar machen für unsere
export default Tarms;
