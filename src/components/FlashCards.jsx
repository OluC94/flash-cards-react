import { useState } from "react"
import hiraganaData from "../hiragana-data"
import Card from "./Card"

export default function FlashCards() {
    const [cards, setCards] = useState(hiraganaData)

    const cardElements = hiraganaData.map((hiragana, index) => {
        return <Card key={index} sound={hiragana.sound} character={hiragana.character}/>
    })
    return (
        <main >
            <h1>Hiragana Flashcards </h1>
            <p className="flashcard-area">{cardElements}</p>
        </main>

)
}