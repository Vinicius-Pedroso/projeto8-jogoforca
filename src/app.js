import React from 'react';
import styled from 'styled-components';
import palavras from './palavras';
import { useState } from 'react';

export default function App() {
    const [gameGoing, setGameGoing] = useState(false)
    const [error, setError] = useState(0)
    const [rightWord, setRightWord] = useState("")
    const [currentWord, setCurrentWord] = useState("")
    const [guess, setGuess] = useState("")
    const [lettersDone, setLettersDone] = useState([])
    const [endGame, setEndGame] = useState(false)


    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <Container>
            <Header>
                {error === 0 && <img data-identifier="game-image" src="img/forca0.png" alt="erro0"/>}
                {error === 1 && <img data-identifier="game-image" src="img/forca1.png" alt="erro1"/>}
                {error === 2 && <img data-identifier="game-image" src="img/forca2.png" alt="erro2"/>}
                {error === 3 && <img data-identifier="game-image" src="img/forca3.png" alt="erro3"/>}
                {error === 4 && <img data-identifier="game-image" src="img/forca4.png" alt="erro4"/>}
                {error === 5 && <img data-identifier="game-image" src="img/forca5.png" alt="erro5"/>}
                {error >= 6 && <img data-identifier="game-image" src="img/forca6.png" alt="erro6"/>}
                <LeftColunm>
                    <LayoutButton>
                        <Escolher data-identifier="choose-word" onClick={() => StartOfTheGame(setError, setGameGoing, setRightWord, setCurrentWord, setLettersDone, setEndGame)}>
                            <p>Escolher Palavra</p>
                        </Escolher>
                    </LayoutButton>
                    <GameWord data-identifier="word">
                        {gameGoing && currentWord.includes("_ ") && error < 6 && <h1 >{currentWord}</h1>}
                        {error >= 6 && <GameLost><h1>{rightWord}</h1></GameLost>}
                        {error < 6 && !currentWord.includes("_ ") &&<GameWon><h1>{rightWord}</h1></GameWon>}
                    </GameWord>
                </LeftColunm>

            </Header>
            <AlfabetoLine>
                {(!gameGoing || error >= 6 || endGame ||(!currentWord.includes("_ ") && gameGoing)) && alfabeto.map((s) =>
                    <LetterOff key={s} data-identifier="letter"><p>{s}</p>
                    </LetterOff>)}
                {gameGoing && error < 6 && !endGame && currentWord.includes("_ ") && alfabeto.map((l) =>
                    <LetterOn data-identifier="letter" key={l} disabled={lettersDone.includes(l)} onClick={() => TryLetter(l, lettersDone, setLettersDone, setError, error, rightWord, setCurrentWord, currentWord, setEndGame)}><p>{l}</p></LetterOn>)}
            </AlfabetoLine>

            <GuessBox>
                <h2>J?? sei a palavra!</h2>
                <GuessImput type="text" data-identifier="type-guess" value={guess} onChange={e => setGuess(e.target.value)}></GuessImput>
                {(!gameGoing || endGame || (!currentWord.includes("_ ") && gameGoing)) && <GuessButton><p>Chutar</p></GuessButton>}
                {gameGoing && !endGame && currentWord.includes("_ ") && <GuessButton data-identifier="guess-button" onClick={() => TryGuess(guess, rightWord, setCurrentWord, setError, setEndGame)}><p>Chutar</p></GuessButton>}
            </GuessBox>
        </Container>

    );
}

function TryGuess(guess, rightWord, setCurrentWord, setError, setEndGame) {
    if (guess === rightWord) {
        setCurrentWord(rightWord)
    } else {
        setError(6)
    }
    setEndGame(true)
}

function TryLetter(letter, lettersDone, setLettersDone, setError, error, rightWord, setCurrentWord, currentWord, setEndGame) {
    if (letter ==="a"){
        if (rightWord.includes("a")||rightWord.includes("??")||rightWord.includes("??")||rightWord.includes("??")) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if ("a" === rightWord[i]||"??" === rightWord[i]||"??" === rightWord[i]||"??" === rightWord[i]) {
                    CurrentArray.push(rightWord[i] + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }
    if (letter ==="e"){
        if (rightWord.includes("e")||rightWord.includes("??")||rightWord.includes("??")) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if ("e" === rightWord[i]||"??" === rightWord[i]||"??" === rightWord[i]) {
                    CurrentArray.push(rightWord[i] + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }
    if (letter ==="o"){
        if (rightWord.includes("o")||rightWord.includes("??")||rightWord.includes("??")) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if ("o" === rightWord[i]||"??" === rightWord[i]||"??" === rightWord[i]) {
                    CurrentArray.push(rightWord[i] + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }
    if (letter ==="i"){
        if (rightWord.includes("i")||rightWord.includes("??")) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if ("i" === rightWord[i]||"??" === rightWord[i]) {
                    CurrentArray.push(rightWord[i] + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }
    if (letter ==="u"){
        if (rightWord.includes("u")||rightWord.includes("??")) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if ("u" === rightWord[i]||"??" === rightWord[i]) {
                    CurrentArray.push(rightWord[i] + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }
    if (letter ==="c"){
        if (rightWord.includes("c")||rightWord.includes("??")) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if ("c" === rightWord[i]||"??" === rightWord[i]) {
                    CurrentArray.push(rightWord[i] + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }
    if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o"&&letter !== "u"&&letter !== "c"){
        if (rightWord.includes(letter)) {
            let CurrentArray = [];
            for (let i = 0; i < rightWord.length; i++) {
                if (letter === rightWord[i]) {
    
                    CurrentArray.push(letter + " ")
                } else {
                    CurrentArray.push(currentWord[i])
                }
            }
            setCurrentWord(CurrentArray)
        } else {
            setError(error + 1)
        }
    }

    let NotInclude = !currentWord.includes("_ ")
    if (NotInclude) {
        setCurrentWord(rightWord)
        setEndGame(true)
    }
    
    let NewLetter = [letter]
    let NewCurrentArray = [...lettersDone, ...NewLetter]
    setLettersDone(NewCurrentArray)

}

function StartOfTheGame(setError, setGameGoing, setRightWord, setCurrentWord, setLettersDone, setEndGame) {

    setError(0)
    setEndGame(false)
    setGameGoing(true)
    setLettersDone([])

    const min = 0;
    const max = 231;
    const rand = Math.round(min + Math.random() * (max));

    setRightWord(palavras[rand])
    console.log(palavras[rand])

    let current = []
    for (let i = 0; i < palavras[rand].length; i++) {
        current.push("_ ")
    }
    setCurrentWord(current)
    return;
}


const LayoutButton = styled.div`
    padding-top: 30px;
    padding-left: 105px;
    display: flex;
    justify-content: end;
`

const Escolher = styled.button`
    background-color: lightgreen;
    border-radius: 5px;
    border-width: 1px;
    border-color: green;
    width: 137px;
    height: 40px;
    p{
        font-size: 12px;
        color: white;
    }
`

const LeftColunm = styled.div`
    width: 280px;
    display: block;
`

const Header = styled.div`
    display: flex;
    padding-bottom: 30px;
`
const GameWord = styled.div`
    margin-top: 250px;
    display: flex;
    align-items: end;
    justify-content: end;
    p{
        display: flex;
        margin-left: 3px;
        color: darkgray;
    }
`
const AlfabetoLine = styled.div`
    width: 650px;
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
    justify-content: space-between;
`

const LetterOff = styled.button`
    width: 40px;
    height: 40px;
    background-color: gray;
    margin-left: 8px;
    margin-top: 15px;
    border-radius: 4px;
    border-width: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: darkgrey;
    }
`

const LetterOn = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 8px;
    margin-top: 15px;
    background-color: lightblue;
    border-radius: 4px;
    border-width: 1px;
    border-color: darkblue;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: darkblue;
    }
    :disabled {
        background-color: gray;
        p {
            color: darkgray;
        }
    }
`

const GameLost = styled.div`
    h1{
        color: red;
    }
`

const GameWon = styled.div`
    h1{
        color: green;
    }
`

const Container = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    width: 650px;
    height: 100%;
    img{
        max-height: 380px;
    }

    p {
        font-weight: bold;
    }

    h1 {
        font-size: 28px;
        font-weight: bold;
    }
    h2 {
        padding-right: 20px;
    }
`

const GuessBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const GuessImput = styled.input`
    height: 28px;
    border-radius: 3px;
    border-width: 1px;
    border-color: gray;
`
const GuessButton = styled.button`
    margin-left: 20px;
    height: 33px;
    width: 100px;
    background-color: lightblue;
    border-radius: 4px;
    border-width: 1px;
    border-color: blue;
    p{
        color: blue;
    }

`






