import { useState } from "react"
import hiraganaData from "../hiragana-data"
import Card from "./Card"
import Reset from "./Reset"

export default function FlashCards() {
    const [cards, setCards] = useState(hiraganaData)

    const cardElements = hiraganaData.map((hiragana, index) => {
        return <Card key={index} sound={hiragana.sound} character={hiragana.character} showSound={hiragana.showSound}/>
    })
    return (
        <main >
            <h1>Hiragana Flashcards </h1>
            <Reset setCards={setCards}/>
            <div className="flashcard-area">{cardElements}</div>
        </main>

)
}