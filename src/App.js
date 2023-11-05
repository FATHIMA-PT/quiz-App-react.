import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of the following tag used to make underlined text?',
			answerOptions: [
				{ answerText: '<i>', isCorrect: false },
				{ answerText: '<li>', isCorrect: false },
				{ answerText: '<ul>', isCorrect: true },
				{ answerText: '<pre>', isCorrect: false },
			],
		},
		{
			questionText: 'What is the primary purpose of the vitual DOM in React?',
			answerOptions: [
				{ answerText: 'To directly manipulate the real DOM', isCorrect: false },
				{ answerText: 'to optimize server-side rendering', isCorrect: false },
				{ answerText: 'to represent component hierarchy', isCorrect: false },
				{ answerText: 'to efficiently update the real DOM', isCorrect: true },
			],
		},
		{
			questionText: 'Which operator used to conditionally rendering using if statements?',
			answerOptions: [
				{ answerText: '! operator', isCorrect: false },
				{ answerText: '|| operator', isCorrect: false },
				{ answerText: '&& operator', isCorrect: false},
				{ answerText: '?:operator', isCorrect: true },
			],
		},
		{
			questionText: 'In one-way binding where is the truth for the data?',
			answerOptions: [
				{ answerText: 'Child component', isCorrect: false },
				{ answerText: 'Parent component', isCorrect: false },
				{ answerText: 'External API', isCorrect: false },
				{ answerText: 'Redux store', isCorrect: true },
			],
		},
		{
			questionText: 'Which type of component is primarily responsible for rendering UI elements and does not manage state?',
			answerOptions: [
				{ answerText: 'Functional component', isCorrect: true },
				{ answerText: 'Class component', isCorrect: false },
				{ answerText: 'Containner component', isCorrect: false },
				{ answerText: 'Higher-order component', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
