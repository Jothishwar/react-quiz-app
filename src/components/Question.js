import React,{ useState } from 'react';
import { Radio, RadioGroup,Stack,Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Heading,StackDivider,Text } from '@chakra-ui/react';

function Question({question,currentQue,setCurrentQue,btntext,score,setScore }) {
	const [value, setValue] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isCrct, setIsCrct] = useState(null);
	const [isAnswered, setIsAnswered] = useState(false)

	const handleSubmit=()=>{
		if(question.answer === value){
			setScore(score+1)
			console.log("CRCT")
			setIsDisabled(!isDisabled)
			setIsAnswered(true)
			setIsCrct(true)
		}else{
			console.log("Wrong")
			setIsDisabled(!isDisabled)
			setIsAnswered(true)
			setIsCrct(false)
		}
	}
	console.log("score:",score)

	return (
		<div className="question">
			<Card variant = "filled" size="md" >
				<CardHeader>
					<Heading size="md">{question.number}. {question.question}</Heading>
				</CardHeader>
				<CardBody>
					<RadioGroup onChange={setValue} value={value}>
					  	<Stack direction='column' divider={<StackDivider borderColor='grey.200' />} spacing={4} >
					    	<Radio value={question.options[0]} isChecked={false} isReadOnly={isDisabled} >
					    		{question.options[0]}
					    	</Radio>
					    	<Radio value={question.options[1]} isChecked={false} isReadOnly={isDisabled} >
					    		{question.options[1]}
					    	</Radio>
					    	<Radio value={question.options[2]} isChecked={false} isReadOnly={isDisabled} >
					    		{question.options[2]}
					    	</Radio>
					    	<Radio value={question.options[3]} isChecked={false} isReadOnly={isDisabled} >
					    		{question.options[3]}
					    	</Radio>
						</Stack>
					</RadioGroup>
					<Card>
						<CardBody>
							{ isCrct && isAnswered && (
								<Text color={"green"}>Correct Answer</Text>
							)}
						</CardBody>
					</Card>
				</CardBody>
				<CardFooter justify="space-between" flexWrap="wrap">
					<Button 
					  colorScheme='whatsapp' 
					  onClick={handleSubmit}
					  isDisabled={isDisabled}
					>
					  Submit
					</Button>
					<Button 
					  colorScheme='whatsapp' 
					  onClick={()=>{
					  	setCurrentQue(currentQue+1)
					  	setIsDisabled(!isDisabled)
					  }}
					  isDisabled={!isDisabled}
					>
					  {btntext}
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Question;