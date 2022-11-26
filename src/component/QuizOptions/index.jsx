export default function QuizOptions({
	quizData,
	handleSelection,
	handleQuizPages,
	isSelected,
	currentOption,
	title,
}) {
	return (
		<>
			<h3 className="heading-3">{title}</h3>
			{quizData && (
				<ul className="health-list">
					{quizData.map((item) => {
						const { id, img, text, png, selected } = item;
						return (
							<li
								className={
									selected ? 'health-item health-item-text checked' : 'health-item health-item-text'
								}
								key={id}
							>
								{!img && !png ? (
									<>
										<i className="bi bi-check2"></i>
										<button className="btn btn-health" onClick={() => handleSelection(item)}>
											<span className="text">{text}</span>
										</button>
									</>
								) : null}

								{img || png ? (
									<button
										className="btn btn-health"
										onClick={() => {
											handleSelection(item);
											handleQuizPages();
										}}
									>
										{img && (
											<svg className="icon">
												<use xlinkHref={`/images/icons.svg#icon-${img}`}></use>
											</svg>
										)}
										{png && <img src={png} className="icon" alt="" />}
										<span className="text">{text}</span>
									</button>
								) : null}
							</li>
						);
					})}
				</ul>
			)}
			{quizData && !quizData[0].img && !quizData[0].png ? (
				<button
					onClick={handleQuizPages}
					className={isSelected ? 'btn-continue show-btn' : 'btn-continue'}
				>
					Weiter
				</button>
			) : null}
		</>
	);
}
