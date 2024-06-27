import hiraganaData from "../hiragana-data";
import Card from "./Card";

export default function FlashCards() {
    const cardElements = hiraganaData.map((hiragana, index) => {
        return (
            <Card
                key={index}
                sound={hiragana.sound}
                character={hiragana.character}
                showSound={hiragana.showSound}
            />
        );
    });
    return (
        <main>
            <h1>Hiragana Flashcards </h1>
            <div className="flashcard-area">{cardElements}</div>
        </main>
    );
}
