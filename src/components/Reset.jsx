import hiraganaData from "../hiragana-data"

export default function Reset(props){

    function handleReset() {
       props.setCards(hiraganaData)
    }

    return (<button onClick={handleReset}>
        Hide all
    </button>)
}