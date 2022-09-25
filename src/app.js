import React from 'react';
import styled from 'styled-components';
import palavras from './palavras';
import { useState } from 'react';

export default function App() {
    const [erros, setErros] = useState(0)
    const [start, setStart] = useState(false)

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <Container>
            <Header>
                <img src="img/forca0.png" />
                <LayoutButton>
                    <Escolher onClick={() => StartGame()}>
                        <p>Escolher Palavra</p>
                    </Escolher>
                </LayoutButton>
                <GameWord>
                    <p>________</p>
                </GameWord>
            </Header>
            <AlfabetoLine>
                {alfabeto.map((s) => <LetterButton><p>{s}</p></LetterButton> )}
            </AlfabetoLine>

            <GuessBox>
                <p>Já sei a palavra!</p>
                <GuessImput></GuessImput>
                <GuessButton><p>Chutar</p></GuessButton>
            </GuessBox>
        </Container>

    );

}

function StartGame(){
    setStart(true)
}

const LayoutButton = styled.div`
    padding-top: 47px;
    display: flex;
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
    justify-content: space-evenly;
`

const LetterButton = styled.button`
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