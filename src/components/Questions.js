import React,{ useState } from 'react'
import questions from "../questions";
import Question from "./Question";

function Questions() {
	const [currentQue, setCurrentQue] = useState(1);
	const [score, setScore] = useState(0);

	return (
		<div className="question container">
			{ currentQue < questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} currentQue={currentQue} setCurrentQue={setCurrentQue} btntext={"Next"} score={score} setScore={setScore} color={"blue"} />
			)}
			{ currentQue === questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} currentQue={currentQue} setCurrentQue={setCurrentQue} btntext={"Finish"} score={score} setScore={setScore} color={"whatsapp"} />
			)}
			{ currentQue > questions.length && (
				<>
				<p>end of quiz</p>
				<p>Score : {score}</p>
				</>
			)}
		</div>
	)
}

export default Questions;