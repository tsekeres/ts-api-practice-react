import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import getJokes from '../helpers/data/jokeData';

function App() {
  const [oneJoke, setOneJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      getJokes()
        .then((jokes) => {
          setOneJoke(jokes);
        });
    } else {
      setShowPunchline(true);
    }
  };

  useEffect(() => {
    getJokes()
      .then((jokes) => {
        setOneJoke(jokes);
      });
  }, []);

  console.warn(oneJoke);

  return (
    <div className='App'>
      <h1>Here is a joke:</h1>
      <h2>{oneJoke[0]?.setup}</h2>
      <p>{showPunchline && oneJoke[0]?.punchline}</p>
      <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get another joke?' : 'Get Punchline'}
      </Button>
    </div>
  );
}

export default App;
