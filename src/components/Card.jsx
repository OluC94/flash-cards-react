import { useState } from "react"

export default function Card(props) {
    const [show, setShow] = useState(props.showSound)
    function handleToggle() {
        setShow(currVal => !currVal)
    }
    return (
        <div className="card" onClick={handleToggle}>
            <h3 >{props.character}</h3>
            <h3 >{show && props.sound}</h3>
        </div>
)
}