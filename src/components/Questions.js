import React,{ useState } from 'react'
import questions from "../questions";
import Question from "./Question";

function Questions() {
	const [currentQue, setCurrentQue] = useState(1);

	return (
		<div className="question container">
			{ currentQue <= questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} setCurrentQue={setCurrentQue} />
			)}
		</div>
	)
}

export default Questions;