import React from 'react';
import styled from 'styled-components';
import palavras from './palavras';
import { useState } from 'react';

{/* 
let RightWord = []
let SolvedWord = []
*/}  


export default function App() {
    const [startgame, setStartGame] = useState(false)
    const [erros, setErros] = useState(0)
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let palavra = ""
    return (
        <Container>
            <Header>
                {erros === 0 && <img src="img/forca0.png" /> }
                {erros === 1 && <img src="img/forca1.png" /> }
                {erros === 2 && <img src="img/forca2.png" /> }
                {erros === 3 && <img src="img/forca3.png" /> }
                {erros === 4 && <img src="img/forca4.png" /> }
                {erros === 5 && <img src="img/forca5.png" /> }
                {erros >= 6 && <img src="img/forca6.png" /> }
                <LayoutButton>
                    <Escolher onClick={() => palavra =  ComecoGame({setErros, setStartGame})}>
                        <p>Escolher Palavra</p>
                    </Escolher>
                </LayoutButton>
                <GameWord>
                    {startgame && <p>{palavra}</p> }
                </GameWord>
            </Header>
            <AlfabetoLine>
                {(startgame === false || erros >= 6) && alfabeto.map((s) => 
                    <LetterOff><p>{s}</p>
                    </LetterOff> )}
                {startgame === true && erros < 6 && alfabeto.map((s) => 
                    <LetterOn ><p>{s}</p></LetterOn> )}
            </AlfabetoLine>

            <GuessBox>
                <p>Já sei a palavra!</p>
                <GuessImput></GuessImput>
                <GuessButton onClick={() => setErros(erros + 1)}><p>Chutar</p></GuessButton>
            </GuessBox>
        </Container>

    );
}
{/* 
    vaule ={s} onClick={ 
    e => TryLetter(e.target.value, ActualWord)}
*/}  

function ComecoGame({setErros, setStartGame}){
    setErros(0)
    setStartGame(true)
    const min = 0;
    const max = 231;
    const rand = Math.round(min + Math.random() * (max));
    const palavraForca = palavras[rand]
    console.log(palavraForca)
    return (palavraForca)
}

{/*
function TryLetter (Letter, palavra){
    let wordsize = palavra.length
    for (i = 0; i < wordsize; i++)(
        if (Letter === palavra[i]){

        }
    )

}
*/}


const LayoutButton = styled.div`
    padding-top: 47px;
    display: flex;
    justify-content: end;
`

const Escolher = styled.button`
    background-color: green;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    p{
        color: white;
    }
`

const Header = styled.div`
    display: flex;
    padding-bottom: 30px;
`

const AlfabetoLine =styled.div`
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

const Container = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    width: 80%;
    height: 100%;
    img{
        max-width: 80%;
        max-height: 70%;
    }
`

const GuessBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const GuessImput = styled.input`
    border-radius: 3px;
    border-width: 1px;
    border-color: black;
`
const GuessButton = styled.button`
height: 20px;
width: 50px;
    background-color: lightblue;
    border-radius: 4px;
    border-width: 2px;
    border-color: blue;
    p{
        color: blue;
    }

`
const GameWord = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    p{
        color: darkgray;
        font-size: 20px;
    }
`