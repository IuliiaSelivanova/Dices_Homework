import { useState } from "react";
import "./Dice.css"

export default function RandomDice({images}) {
    const [result, setResult] = useState(0);
    const [isActive, setActive] = useState("false");

    function RollTheDice(){
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 1000);
        setTimeout(() => {
            setResult(Math.floor(Math.random() * images.length))
        }, 1000);
    }

    return (
        <div className="App">
            <div className={isActive ? 'Dices Derbung' : 'Dices'}>
                <img className="DiceItem" src={images[result]} alt="Dice" />
            </div>
            <button onClick={RollTheDice} className="Button">Бросить кубик</button>
        </div>
    )
}