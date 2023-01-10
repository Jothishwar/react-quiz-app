import React,{ useState } from 'react';
import { Radio, RadioGroup,Stack } from '@chakra-ui/react';

function Question({question}) {

	const [value, setValue] = useState("");
	console.log(value)
	return (
		<div className="question">
			<h3>{question.number}. {question.question}</h3>
			<RadioGroup onChange={setValue} value={value}>
			  	<Stack direction='column'>
			    	<Radio value={question.options[0]}>{question.options[0]}</Radio>
			    	<Radio value={question.options[1]}>{question.options[1]}</Radio>
			    	<Radio value={question.options[2]}>{question.options[2]}</Radio>
			    	<Radio value={question.options[3]}>{question.options[3]}</Radio>
				</Stack>
			</RadioGroup>
		</div>
	)
}

export default Question