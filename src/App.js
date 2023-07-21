import './App.css';
import Square from './components/Square';

function App() {
  function handleOnClick(){
    console.log("Clicked")
  }

  return (
    <div className='board'>
      <div className='board-row'>
        <Square onSquareClick={() => handleOnClick()}/>
        <Square onSquareClick={() => handleOnClick()}/>
        <Square onSquareClick={() => handleOnClick()}/>
      </div>
      <div className='board-row'>
        <Square onSquareClick={() => handleOnClick()}/>
        <Square onSquareClick={() => handleOnClick()}/>
        <Square onSquareClick={() => handleOnClick()}/>
      </div>
      <div className='board-row'>
        <Square onSquareClick={() => handleOnClick()}/>
        <Square onSquareClick={() => handleOnClick()}/>
        <Square onSquareClick={() => handleOnClick()}/>
      </div>
    </div>
  );
}

export default App;
