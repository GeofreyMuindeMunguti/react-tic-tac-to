import { createContext, useState } from 'react';
import './App.css';
import Square from './components/Square';
import { useOnlineStatus } from './hooks/network';

export const UserContext = createContext(null);

function calculate_winner(last_play, values) {
  const winning_positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (var i = 0; i < winning_positions.length; i++) {
    const [a, b, c] = winning_positions[i]

    if (last_play !== null && values[a] === last_play && values[b] === last_play && values[c] === last_play) {
      return true;
    }
  }
  return null;
}


function App() {

  const [values, setValues] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  const [message, setMessage] = useState("Start playing");
  const [playCount, setPlayCount] = useState(0);
  const isOnline = useOnlineStatus();

  function restart_match() {
    console.log("Restarting match")
    setValues(Array(9).fill(null));
    setIsNext(false);
    setPlayCount(0);
    setMessage("Start playing");
  }

  function handleOnClick(id){
    if (values[id]){
      setMessage("Select another box")
    }
    else{
      var total_play_count = playCount + 1
      setPlayCount(total_play_count);
      if (isNext){
        values[id] = "X"
        setMessage("Next player: O");
      }
      else{
        values[id] = "O"
        setMessage("Next player: X");
      }
      setValues(values);
      setIsNext(!isNext);
      
      if (total_play_count > 4) {
        if (calculate_winner(values[id], values)) {
          setMessage("Player: " + values[id] + " won!");
          setTimeout(() => restart_match(), 3000);
        }
      }

      if (total_play_count === 9) {
        setMessage("No winner");
        setTimeout(() => restart_match(), 3000);
      }
    }
  }

  return (
    <UserContext.Provider value={'Muinde'}>
    <div>
      {isOnline ? <p>Online</p>: <p>Offline</p>}
      <p className='message'>{message}</p>
    </div>
    <div className='board'>
      <div className='board-row'>
        <Square dispay={values[0]} onSquareClick={() => handleOnClick(0)}/>
        <Square dispay={values[1]} onSquareClick={() => handleOnClick(1)}/>
        <Square dispay={values[2]} onSquareClick={() => handleOnClick(2)}/>
      </div>
      <div className='board-row'>
        <Square dispay={values[3]}  onSquareClick={() => handleOnClick(3)}/>
        <Square dispay={values[4]}  onSquareClick={() => handleOnClick(4)}/>
        <Square dispay={values[5]}  onSquareClick={() => handleOnClick(5)}/>
      </div>
      <div className='board-row'>
        <Square dispay={values[6]} onSquareClick={() => handleOnClick(6)}/>
        <Square dispay={values[7]} onSquareClick={() => handleOnClick(7)}/>
        <Square dispay={values[8]} onSquareClick={() => handleOnClick(8)}/>
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
