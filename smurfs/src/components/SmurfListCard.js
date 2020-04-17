import React from 'react'; 
import styled from 'styled-components'; 

const SmurfDiv = styled.div`
    background-color: cyan; 
    color: black; 
    width: 30%; 
`;

const SmurfCards = (props) => {
    return (
        <SmurfDiv>
            <h2>My Smurf Homie: {props.smurf.name}</h2>
            <h3>My Smurf Homie is {props.smurf.age} years old </h3>
            <h3>They are {props.smurf.height}s tall </h3>
        </SmurfDiv>
    )
}

export default SmurfCards; 