export default function Reset(){

    function handleReset() {
        console.log('reset clicked')
    }

    return (<button onClick={handleReset}>
        Reset
    </button>)
}