import './App.css';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Questions from './components/Questions'
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);
  
  const handleStart = () => {
    setIsShown(true);
  };

  return (
    <div className="app">
      {!isShown && (
        <div className="home">
          <h1>Quiz app </h1>
          <p>Click the button below to start the quiz.<br></br>
          All the best! </p>
          <Button 
            colorScheme='whatsapp' 
            rightIcon={<ArrowForwardIcon />} 
            onClick={handleStart}
          >
            Start Quiz
          </Button>
        </div>
      )}

      {isShown && (
        <Questions />
      )}
    </div>
  );
}

export default App;
