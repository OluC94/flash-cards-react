import { useState } from "react"

export default function Card(props) {
    const [hide, setHide] = useState(props.showChar)

    return (
        <div className="card" onClick={() => {}}>
            <h3 >{props.character}</h3>
            <h3 >{props.sound}</h3>
        </div>

)
}