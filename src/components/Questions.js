import React,{ useState } from 'react'
import questions from "../questions";
import Question from "./Question";
import { Card, CardHeader, CardBody, CardFooter,Heading,Button,Text,Progress } from '@chakra-ui/react';

function Questions({setIsShown}) {
	const [currentQue, setCurrentQue] = useState(1);
	const [score, setScore] = useState(0);

	const handleRestart=()=>{
		setIsShown(false);
	}

	return (
		<div className="question container">
			<Progress size={"sm"} height={"6px"} hasStripe isAnimated value={currentQue/questions.length*100} borderRadius="5px" position="relative" top="6.25px" zIndex="99" />
			{ currentQue < questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} currentQue={currentQue} setCurrentQue={setCurrentQue} btntext={"Next"} score={score} setScore={setScore} color={"blue"} />
			)}
			{ currentQue === questions.length &&(
				<Question key={questions.number} question={questions[currentQue-1]} currentQue={currentQue} setCurrentQue={setCurrentQue} btntext={"Finish"} score={score} setScore={setScore} color={"whatsapp"} />
			)}
			{ currentQue > questions.length && (
				<Card variant="filled">
					<CardHeader>
						<Heading>Quiz Completed</Heading>
					</CardHeader>
					<CardBody>
						<Text>Your Score : {score/questions.length*100}% ({score}/{questions.length})</Text>
					</CardBody>
					<CardFooter>
						<Button
							colorScheme="whatsapp"
							onClick={handleRestart}
						>
							Restart
						</Button>
					</CardFooter>
				</Card>
			)}
		</div>
	)
}

export default Questions;