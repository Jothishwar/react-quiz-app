import React,{ useState } from 'react';
import { Radio, RadioGroup,Stack,Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Heading,StackDivider } from '@chakra-ui/react';

function Question({question,setCurrentQue}) {

	const [value, setValue] = useState("");
	// console.log(value)
	return (
		<div className="question">
			<Card variant = "filled" size="md" >
				<CardHeader>
					<Heading size="md">{question.number}. {question.question}</Heading>
				</CardHeader>
				<CardBody>
					<RadioGroup onChange={setValue} value={value}>
					  	<Stack direction='column' divider={<StackDivider borderColor='grey.200' />} spacing={4} >
					    	<Radio value={question.options[0]}>{question.options[0]}</Radio>
					    	<Radio value={question.options[1]}>{question.options[1]}</Radio>
					    	<Radio value={question.options[2]}>{question.options[2]}</Radio>
					    	<Radio value={question.options[3]}>{question.options[3]}</Radio>
						</Stack>
					</RadioGroup>
				</CardBody>
				<CardFooter>
					<Button 
					  colorScheme='whatsapp' 
					  onClick={()=>{
					  	console.log(value)
					  	setCurrentQue(question.number+1)
					  }}
					>
					  Submit
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Question;