import React from 'react'
import Display from './components/Display'
import styled from 'styled-components'

function App() {
  return (
    <StyledDiv className="App">
      <Display />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
background-color: black;
display: flex;
flex-flow: column;
padding: 2px 2px;
margin-top: 1%;
`