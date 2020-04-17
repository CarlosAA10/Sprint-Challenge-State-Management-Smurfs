import React from 'react'; 
import { connect } from 'react-redux'; 
import styled from 'styled-components'; 

import SmurfCards from './SmurfListCard'; 

const FlexedSmurfs = styled.div`
    display:flex; 
    flex-wrap: wrap; 
    justify-content: space-around
`; 

// const BackGround = styled.div`
//     background-image: url("")
// `; 


const SmurfList = (props) => {
    return(
       <div>
           <h2>Smurf List</h2>
            <FlexedSmurfs>
                {props.smurfInfo.map(smurf => {
                return <SmurfCards key={smurf.name + smurf.age} smurf={smurf} />
            })}
            </FlexedSmurfs>
       </div>
    )
}

const mapStateToProps= state => {
    return {
        smurfInfo: state.smurfs.smurfInfo
    }
}

export default connect(
    mapStateToProps, 
    {}
)(SmurfList); 