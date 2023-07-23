// function reducer(state, action) {
//     if (action.type === 'increment')
//         return {
//             value: state.value + 1
//         }
    
//     if (action.type === 'decrement')
//         return {
//             value: state.value - 1
//         }
//     throw Error(`Unknown action: ${action.type} !`)
// }

export default function Square({dispay, onSquareClick}) {

    // const [state, dispatch] = useReducer(reducer, {value: 0})
    // const [add, setAdd] = useState(true)
    // const btnRef = useRef(null);

    // function handleClick(){
    //     if (add) {
    //         dispatch({type: 'divide'})
    //         setAdd(false)
    //     }
    //     else {
    //         dispatch({type: 'decrement'})
    //         setAdd(true)
    //     }
    // }

    // function handleRefClick(){
    //     btnRef.current.style.background = 'black';
    // }

    return (
        <button onClick={onSquareClick} className="square">{dispay}
        </button>
    )
}