import React from 'react';
import styled from 'styled-components';

export default function App() {
    return (
        <Container>
            <img src="img/forca0.png" />
            <LayoutButton>
                <Escolher>
                    <p>Escolher Palavra</p>
                </Escolher>
            </LayoutButton>
        </Container>

    );

}

const LayoutButton = styled.div`
    padding-top: 47px;
    display: flex;
    justify-items: end;
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

const Container = styled.div`
padding-top: 20px;
padding-left: 20px;
    width: 100vh;
    height: 100vh;
    display: flex;
    img{
        max-width: 80%;
        max-height: 70%;
    }
`
