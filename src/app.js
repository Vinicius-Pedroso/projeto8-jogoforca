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

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <Container>
            <Header>
                {error === 0 && <img src="img/forca0.png" />}
                {error === 1 && <img src="img/forca1.png" />}
                {error === 2 && <img src="img/forca2.png" />}
                {error === 3 && <img src="img/forca3.png" />}
                {error === 4 && <img src="img/forca4.png" />}
                {error === 5 && <img src="img/forca5.png" />}
                {error >= 6 && <img src="img/forca6.png" />}
                <LeftColunm>
                    <LayoutButton>
                        <Escolher onClick={() => StartOfTheGame(setError, setGameGoing, setRightWord, setCurrentWord, setLettersDone)}>
                            <p>Escolher Palavra</p>
                        </Escolher>
                    </LayoutButton>
                    <GameWord>
                        {gameGoing && (currentWord !== rightWord) && error < 6 && <h1>{currentWord}</h1>}
                        {error >= 6 && <GameLost><h1>{rightWord}</h1></GameLost>}
                        {(currentWord === rightWord) && <GameWon><h1>{rightWord}</h1></GameWon>}
                    </GameWord>
                </LeftColunm>

            </Header>
            <AlfabetoLine>
                {(!gameGoing || error >= 6) && alfabeto.map((s) =>
                    <LetterOff><p>{s}</p>
                    </LetterOff>)}
                {gameGoing && error < 6 && alfabeto.map((l) =>
                    <LetterOn disabled={lettersDone.includes(l)} onClick={() => TryLetter(l, lettersDone, setLettersDone, setError, error, rightWord, setCurrentWord, currentWord)}><p>{l}</p></LetterOn>)}
            </AlfabetoLine>

            <GuessBox>
                <h2>Já sei a palavra!</h2>
                <GuessImput type="text" value={guess} onChange={e => setGuess(e.target.value)}></GuessImput>
                {!gameGoing && <GuessButton><p>Chutar</p></GuessButton>}
                {gameGoing && <GuessButton onClick={() => TryGuess(guess, rightWord, setCurrentWord, setError)}><p>Chutar</p></GuessButton>}
            </GuessBox>
        </Container>

    );
}

function TryGuess(guess, rightWord, setCurrentWord, setError) {
    if (guess === rightWord) {
        setCurrentWord(rightWord)
    } else {
        setError(6)
    }
}

function TryLetter(letter, lettersDone, setLettersDone, setError, error, rightWord, setCurrentWord, currentWord) {
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
    let NotInclude = !currentWord.includes("_ ")
    if (NotInclude) {
        setCurrentWord(rightWord)
    }
    let NewLetter = [letter]
    let NewCurrentArray = [...lettersDone, ...NewLetter]
    setLettersDone(NewCurrentArray)
}

function StartOfTheGame(setError, setGameGoing, setRightWord, setCurrentWord, setLettersDone) {
    setError(0)
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
