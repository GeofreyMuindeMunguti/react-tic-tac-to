export default function Square({dispay, onSquareClick}) {
    return (
        <button onClick={onSquareClick} className="square">{dispay}
        </button>
    )
}