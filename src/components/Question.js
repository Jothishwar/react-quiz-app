import React,{ useState } from 'react';
import { Radio, RadioGroup,Stack,Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Heading,StackDivider,Badge,Text } from '@chakra-ui/react';

function Question({question,currentQue,setCurrentQue,btntext,score,setScore,color }) {
	const [value, setValue] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isCrct, setIsCrct] = useState(null);
	const [isAnswered, setIsAnswered] = useState(false)

	const handleSubmit=()=>{
		if(question.answer === value){
			setScore(score+1)
			// console.log("CRCT")
			setIsDisabled(!isDisabled)
			setIsAnswered(true)
			setIsCrct(true)
		}else{
			// console.log("Wrong")
			setIsDisabled(!isDisabled)
			setIsAnswered(true)
			setIsCrct(false)
		}
	}
	// console.log("score:",score)
	return (
		<div className="question">
			<Card variant = "filled" size={{base:"sm",md:"md",lg:"lg"}} w={{base:"90vw",md:"md",lg:"lg"}} fontSize={{base:"24px",md:"md",lg:"lg"}} boxShadow="dark-lg" borderRadius="10px">
				<CardHeader>
					<Heading size="md" fontSize={{base:"0.7em",md:"1.2em",lg:"1.7em"}}>{question.number}. {question.question}</Heading>
				</CardHeader>
				<CardBody>
					<RadioGroup onChange={setValue} value={value}>
					  	<Stack direction='column' divider={<StackDivider borderColor='grey.200' />} spacing={4} >
					    	<Radio value={question.options[0]} isChecked={false} isReadOnly={isDisabled} >
					    		<Text color={ isAnswered?(question.answer===question.options[0] ? "green":"none"):"black"}  fontSize={{base:"0.8em",md:"1.1em",lg:"1.5em"}}>
					    			{question.options[0]}
					    		</Text>
					    	</Radio>
					    	<Radio value={question.options[1]} isChecked={false} isReadOnly={isDisabled} >
					    		<Text color={ isAnswered?(question.answer===question.options[1] ? "green":"none"):"black"} fontSize={{base:"0.8em",md:"1.1em",lg:"1.5em"}} >
					    			{question.options[1]}
					    		</Text>
					    	</Radio>
					    	<Radio value={question.options[2]} isChecked={false} isReadOnly={isDisabled} >
					    		<Text color={ isAnswered?(question.answer===question.options[2] ? "green":"none"):"black"} fontSize={{base:"0.8em",md:"1.1em",lg:"1.5em"}} >
					    			{question.options[2]}
					    		</Text>
					    	</Radio>
					    	<Radio value={question.options[3]} isChecked={false} isReadOnly={isDisabled} >
					    		<Text color={ isAnswered?(question.answer===question.options[3] ? "green":"none"):"black"} fontSize={{base:"0.8em",md:"1.1em",lg:"1.5em"}} >
					    			{question.options[3]}
					    		</Text>
					    	</Radio>
						</Stack>
					</RadioGroup>
					<Card varient="unstyled" boxShadow="none">
						<CardBody>
							{ isCrct && isAnswered && (
								<Badge colorScheme={"green"} variant="subtle" fontSize={{base:"0.5em",md:"1em",lg:"1.5em"}} mt="5" mb="0">Correct Answer 😊🎉</Badge>
							)}
							{!isCrct && isAnswered && (
								<Badge colorScheme={"red"} variant="subtle" fontSize={{base:"0.5em",md:"1em",lg:"1.5em"}} mt="5" mb="0">Wrong Answer 😟</Badge>	
							)}
						</CardBody>
					</Card>
				</CardBody>
				<CardFooter justify="space-between" flexWrap="wrap" mt="0" pt="0">
					<Button 
					  colorScheme="blue" 
					  onClick={handleSubmit}
					  isDisabled={isDisabled}
					  size={{base:"sm",md:"md",lg:"lg"}}
					  fontSize={{base:"0.5em",md:"1.1em",lg:"1.6em"}}
					>
					  Submit
					</Button>
					<Button 
					  colorScheme={color} 
					  onClick={()=>{
					  	setCurrentQue(currentQue+1)
					  	setIsDisabled(!isDisabled)
					  	setIsAnswered(false)
					  }}
					  isDisabled={!isDisabled}
					  size={{base:"sm",md:"md",lg:"lg"}}
					  fontSize={{base:"0.5em",md:"1.1em",lg:"1.6em"}}
					>
					  {btntext}
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Question;