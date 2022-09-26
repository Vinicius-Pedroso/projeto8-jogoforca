import React from 'react';
import styled from 'styled-components';
import palavras from './palavras';
import { useState } from 'react';

export default function App() {
    const [gameGoing, setGameGoing] = useState(false)
    const [error, setError] = useState(0)
    const [rightWord, setRightWord] = useState("")
    const [currentWord, setCurrentWord] = useState("")
    const [lettersDone, setLettersDone] = ("")

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
                        <Escolher onClick={() => StartOfTheGame({ setError, setGameGoing, setRightWord, setCurrentWord })}>
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
                {(gameGoing === false || error >= 6) && alfabeto.map((s) =>
                    <LetterOff><p>{s}</p>
                    </LetterOff>)}
                {gameGoing === true && error < 6 && alfabeto.map((s) =>
                    <LetterOn onClick={() => TryLetter({ s, setLettersDone })}><p>{s}</p></LetterOn>)}
            </AlfabetoLine>

            <GuessBox>
                <p>Já sei a palavra!</p>
                <GuessImput></GuessImput>
                <GuessButton onClick={() => setError(error + 1)}><p>Chutar</p></GuessButton>
            </GuessBox>
        </Container>

    );
}

function TryLetter({ Letter, setLettersDone }) {
    console.log(Letter)

    setLettersDone(+ Letter);

}

function StartOfTheGame({ setError, setGameGoing, setRightWord, setCurrentWord }) {
    setError(0)
    setGameGoing(true)
    const min = 0;
    const max = 231;
    const rand = Math.round(min + Math.random() * (max));
    setRightWord(palavras[rand])
    let current = []
    for (let i = 0; i < palavras[rand].length; i++) {
        current.push("_ ")
    }
    setCurrentWord(current)
    return;
}


const LayoutButton = styled.div`
    padding-top: 47px;
    display: flex;
    justify-content: end;
`

const Escolher = styled.button`
    background-color: green;
    border-radius: 5px;
    width: 137px;
    height: 40px;
    p{
        font-size: 12px;
        color: white;
    }
`

const LeftColunm = styled.div`
    padding-left: 105px;
    display: block;
`

const Header = styled.div`
    display: flex;
    padding-bottom: 30px;
`
const GameWord = styled.div`
    margin-top: 550px;
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
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-between;
`

const LetterOff = styled.button`
    width: 40px;
    height: 40px;
    background-color: gray;
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
    width: 80%;
    height: 100%;
    img{
        max-width: 80%;
        max-height: 70%;
    }

    p {
        font-weight: bold;
    }

    h1 {
        font-size: 36px;
        font-weight: bold;
        color: black;
    }
`

const GuessBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const GuessImput = styled.input`
height: 30px;
    border-radius: 3px;
    border-width: 1px;
    border-color: black;
`
const GuessButton = styled.button`
margin-left: 20px;
height: 30px;
width: 100px;
    background-color: lightblue;
    border-radius: 4px;
    border-width: 2px;
    border-color: blue;
    p{
        color: blue;
    }

`
