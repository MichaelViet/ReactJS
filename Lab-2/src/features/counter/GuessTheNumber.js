import React, { useState } from "react";

let randomNumber = Math.round(Math.random() * 1000);
let numberOfTurns = 10;

const GuessTheNumber = () => {
    const [value, setValue] = useState("");
    const onChange = e => setValue(e.target.value);
    const [results, setResult] = useState("");
    const [gameRunning, setGameRunning] = useState(false);

    const onClick = () => {
        if (!gameRunning) return;

        // Перевірка числа гравця і числа randonNumber
        const userGuess = value;
        if (userGuess == randomNumber)
            setResult(<p className="alert alert-success">Good Job!</p>);
        else if (userGuess > randomNumber)
            setResult(
                <div>
                    <p>
                        Your number is incorrect, N is less than {userGuess}
                    </p>
                </div>
            );
        else if (userGuess < randomNumber && userGuess !== "")
            setResult(
                <div>
                    <p>
                        Your number is incorrect, N is greater than {userGuess}
                    </p>
                </div>
            );
        else setResult("");

        numberOfTurns--;

        // Перевірка чи закінчилася гра
        if (numberOfTurns === 0) {
            setResult(
                <div>
                    <p>Game Over!. The number was {randomNumber}</p>
                </div>
            );
            setGameRunning(false);
        }
    };

    const newGame = () => {
        // Скидає стан гри
        randomNumber = Math.round(Math.random() * 1000);
        numberOfTurns = 10;
        setValue("");
        setResult("");
        setGameRunning(true);
        // console.log(randomNumber);
    };

    return (
        <>
            <h2>Guess The Number</h2>
            <p className="lead">Guess a number between 1 and 1000.</p>
            <input value={value} type="number" onChange={onChange} />
            <button type="submit" onClick={onClick}>
                Check!
            </button>
            <button type="submit" onClick={newGame} disabled={gameRunning}>
                New Game
            </button>
            {results}
        </>
    );
};

export default GuessTheNumber;
