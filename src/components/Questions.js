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
				<Card variant = "filled" size={{base:"sm",md:"md",lg:"lg"}} w={{base:"70vw",md:"md",lg:"lg"}} fontSize={{base:"24px",md:"md",lg:"lg"}} boxShadow="dark-lg" borderRadius="10px">
					<CardHeader>
						<Heading size="md" fontSize={{base:"0.9em",md:"1.4em",lg:"1.9em"}}>Quiz Completed</Heading>
					</CardHeader>
					<CardBody>
						<Text fontSize={{base:"0.7em",md:"1.1em",lg:"1.6em"}}>Your Score : {score/questions.length*100}% ({score}/{questions.length})</Text>
					</CardBody>
					<CardFooter>
						<Button
							colorScheme="whatsapp"
							onClick={handleRestart}
							size={{base:"sm",md:"md",lg:"lg"}}
							fontSize={{base:"0.5em",md:"1.1em",lg:"2em"}}
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