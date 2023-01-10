import React,{ useState } from 'react'
import questions from "../questions";
import Question from "./Question";

function Questions() {
	const [value, setValue] = useState("");
	const [currentQue, setCurrentQue] = useState(1);
	const handleSubmit=()=>{
		console.log(value);
	}

	return (
		<div className="question container">
			{ currentQue < questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} currentQue={currentQue} setCurrentQue={setCurrentQue} btntext={"Next"} handleSubmit={handleSubmit} value={value} setValue={setValue} />
			)}
			{ currentQue === questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} currentQue={currentQue} setCurrentQue={setCurrentQue} btntext={"Finish"} handleSubmit={handleSubmit} value={value} setValue={setValue} />
			)}
			{ currentQue > questions.length &&(
				<p>end of quiz</p>
			)}
		</div>
	)
}

export default Questions;