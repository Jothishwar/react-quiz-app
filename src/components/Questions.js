import React from 'react'
import questions from "../questions";
import Question from "./Question";

function Questions() {
	return (
		<div className="question container">
			{questions.map((question)=>(
				<Question key={question.number} question={question} />
				)
			)}
		</div>
	)
}

export default Questions;