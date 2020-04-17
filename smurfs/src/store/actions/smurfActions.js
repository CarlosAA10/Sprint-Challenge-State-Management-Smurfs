import axios from 'axios'; 

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_START' })
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is res', res)
            dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: 'FETCH_SMURF_FAILED', payload: err })
        })
    }; 
}

export const sendSmurfs = newSmurf => {
    return dispatch => {
        dispatch({ type: 'SENDING_SMURF_START' })
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('this is post request res', res)
            dispatch({ type: 'SENDING_SMURF_SUCCESS', payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: 'SENDING_SMURF_FAILED', payload: err })
        })
    }
}