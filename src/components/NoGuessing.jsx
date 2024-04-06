import {useState} from 'react'

const NoGuessing = () => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (guessedNumber === number) {
      setMessage('Congratulations! You guessed the correct number.');
    } else if (guessedNumber < number) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
    setGuess('');
  };

  return (
    <div>
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 100:</p>
    <input type="number" value={guess} onChange={handleInputChange} />
    <button onClick={handleGuess}>Guess</button>
    <p>{message}</p>
  </div>
  )
}

export default NoGuessing
