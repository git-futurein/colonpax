import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../tarms/tarms.css';

const Studies = () => {
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
					<h2 className="tarms_heading2_secondary text-center">
						Die Studienlage zu den Colonpax Inhaltsstoffen
					</h2>
					{/* <p className="text">
						<a href="www.colonpax.com">www.colonpax.com</a> (nachfolgend die Website oder E
						Commerce-Plattform) wird von der United Nutrition UÖ, Kesklinna linnaosa, Järvevana tee
						9, 11314, Tallinn, eingetragen im estnischen Handelsregister mit der Registernummer
						16591552, betrieben.
					</p> */}
				</div>

				<div className="tarms_wrapper">
					<div className="tarms_item">
						<h5 className="tarms_heading5">1. Inulin</h5>
						<p className="text">
							[1] Inulin reduces visceral adipose tissue mass and improves glucose tolerance through
							altering gut metabolites 10.1177/1477153517748189 <br />
							<br />
							<a href="https://nutritionandmetabolism.biomedcentral.com/articles/10.1186/s12986-022-00685-1">
								https://nutritionandmetabolism.biomedcentral.com/articles/10.1186/s12986-022-00685-1
							</a>
							<br />
							<br />
							[2] Algvere, PV, Marshall, J., Seregard, S. (2003), Acta Ophthalmologica Scandinavica,
							p. 1621–1624. <br />
							<br />
							Age-related maculopathy and the impact of blue light hazard. doi:
							10.1111/j.1600-0420.2005.00627.x. <br />
							<br />
							<a href="https://pubmed.ncbi.nlm.nih.gov/16445433/">
								https://pubmed.ncbi.nlm.nih.gov/16445433/
							</a>
							<br />
							<br />
							[3] Wilkins, A. Veitch, J., Lehman, B. (2010). IEEE Standard PAR1789 Update. LED
							Lighting Flicker and Potential Health Concerns. doi: 10.1109/ECCE.2010.5618050 <br />
							<br />
							<a href="https://www.researchgate.net/profile/Arnold_Wilkins/publication/">
								https://www.researchgate.net/profile/Arnold_Wilkins/publication/
							</a>
							<br />
							<br />
							224188247_LED_lighting_flicker_and_potential_health_concerns_IEEE_standard_PAR1789_update/links/
							0c960532f4bbe82b89000000/LED-lighting-flicker-and-potential-health-concerns-IEEE-standard-PAR1789-
							update.pdf <br />
							<br />
							[4] Tähkämö, L. Patronen, T., Pesonen, AK. (2018). Chronobiol Int., p. 151-170.
							Systematic Review of Light Exposure Impact on Human Circadian Rhythm. doi:
							10.1080/07420528.2018.1527773 <br />
							<br />
							<a href="https://pubmed.ncbi.nlm.nih.gov/30311830/">
								https://pubmed.ncbi.nlm.nih.gov/30311830/
							</a>
							<br />
							<br />
							[5] Figuerio, MG, Rea MS (2010). Int J Endocrinol. The Effects of Red and Blue Lights
							on Circadian Variations in Cortisol, Alpha Amylase, and Melatonin. doi:
							10.1155/2010/829351 <br />
							<br />
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2905913/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2905913/
							</a>
							<br />
							<br />
							[6] Nagare, R., Plitnick, B., Figueiro, MG. (2018). Light Res Technol., p. 373-383.
							Does the iPad Night Shift mode reduce melatonin suppression?. doi:
							10.1177/1477153517748189 <br />
							<br />
							<a href="https://journals.sagepub.com/doi/abs/10.1177/1477153517748189">
								https://journals.sagepub.com/doi/abs/10.1177/1477153517748189
							</a>
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">2. Flohsamenschalen</h5>
						<p className="text">
							[1] Sabine Pal, <span className="text opacity-50">Simone Radavelli-Bagatini,</span>
							Effects of psyllium on metabolic syndrome risk factors <br />
							<br />
							<a
								href="https://onlinelibrary.wiley.com/doi/10.1111/j.1467-789X.2012.01020.x"
								className="color-blue"
							>
								https://onlinelibrary.wiley.com/doi/10.1111/j.1467-789X.2012.01020.x
							</a>
							<br />
							<br />
							<span className="text opacity-50">
								[2] , Kristiina R. Juvonen, Sanna M. Flander, Kirsi-Helena Liukkonen, Liisa
								Lähteenmäki, Maritta Siloaho, David E. Laaksonen, Karl-Heinz Herzig, Matti I.
								Uusitupa, Kaisa S. Poutanen
							</span>
							<br /> A Psyllium Fiber-Enriched Meal Strongly Attenuates Postprandial
							Gastrointestinal Peptide Release in Healthy Young Adults <br />
							<br />
							[3] M Sierra, JJ García, N Fernández, MJ Diez & AP Calle on behalf of Farmafibra Group
							European Journal of Clinical Nutrition Therapeutic effects of psyllium in type 2
							diabetic patients <br />
							<br />
							<a href="https://www.nature.com/articles/1601398">
								https://www.nature.com/articles/1601398
							</a>
						</p>
					</div>
					<div className="tarms_item">
						<h5 className="tarms_heading5">3. Guarkernmehl</h5>
						<p className="text opacity-50">
							[1] Linetzky Waitzberg D, Alves Pereira CC, Logullo L, Manzoni Jacintho T, Almeida D,
							Teixeira da Silva <br />
							<br />
							ML, Matos de Miranda Torrinhas RS. Microbiota benefits after inulin and partially
							hydrolized guar gum supplementation: a randomized clinical trial in constipated women.
							Nutr Hosp. 2012 JanFeb;27(1):123-9. doi: 10.1590/S0212-16112012000100014. PMID:
							22566311. <br />
							<br />
							<a href="https://pubmed.ncbi.nlm.nih.gov/22566311/">
								https://pubmed.ncbi.nlm.nih.gov/22566311/
							</a>
							<br />
							<br />
							[2] Butt MS, Shahzadi N, Sharif MK, Nasir M. Guar gum: a miracle therapy for
							hypercholesterolemia, hyperglycemia and obesity. Crit Rev Food Sci Nutr.
							2007;47(4):389-96. doi: 10.1080/10408390600846267. PMID: 17457723. <br />
							<br />
							<a href="https://pubmed.ncbi.nlm.nih.gov/17457723/">
								https://pubmed.ncbi.nlm.nih.gov/17457723/
							</a>
							<br />
							<br />
							[3] Jang AL, Hwang SK, Kim DU. Effects of guar gum ingestion on postprandial blood
							pressure in older adults. J Nutr Health Aging. 2015 Mar;19(3):299-304. doi:
							10.1007/s12603-015-0453-8. PMID: 25732215. <br />
							<br />
							<a href="https://pubmed.ncbi.nlm.nih.gov/25732215/">
								https://pubmed.ncbi.nlm.nih.gov/25732215/
							</a>
							<br />
							<br />
							[4] Role of guar fiber in appetite control 2016 Oct 1;164(Pt A):277-83. doi:
							10.1016/j.physbeh.2016.06.014. Epub 2016 Jun 15., <br />
							<br />
							<a href="https://pubmed.ncbi.nlm.nih.gov/27317834/">
								https://pubmed.ncbi.nlm.nih.gov/27317834/
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Studies;
