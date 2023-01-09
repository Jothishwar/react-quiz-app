import './App.css';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

function App() {
  return (
    <div className="app">
      <h1>Quiz app </h1>
      <p>Click the button below to start the quiz. All the best! </p>
      <Button 
        colorScheme='whatsapp' 
        rightIcon={<ArrowForwardIcon />} 
        variant='outline'
        onClick={()=>console.log("s")}
      >
        Start Quiz
      </Button>
    </div>
  );
}

export default App;
