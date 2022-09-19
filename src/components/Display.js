import React, { useEffect } from 'react';
import styled from 'styled-components';

const initialForm = {
    name: "",
    availability: 0,
    characterName: "",
    itemLevel: "",
    className: 1,
    raidsAvailable: [],
    daysAvailable: "",
    timeframes: "",
    notes: "",
}

const Display = (props) => {
    useEffect (() => {
    }, [])


return (
    <StyledDiv>
        <h1>Hello</h1>
    </StyledDiv>
)
}

export default Display;

const StyledDiv = styled.div`
background-color: white;
h1 {
    text-align: center;
    font-size: 100px;
}
`