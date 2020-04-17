const initialState = {
    smurfInfo: [], 
    isFetching: false, 
    isSending: false, 
    error: ''
}; 

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SMURF_START': 
            return {
                ...state, 
                isFetching: true
            }
        case 'FETCH_SMURF_SUCCESS': 
            return {
                ...state, 
                smurfInfo: action.payload, 
                isFetching: false, 
                error: ''
            }
        case 'SENDING_SMURF_START': 
            return {
                ...state, 
                isSending: true
            }
        case 'SENDING_SMURF_SUCCESS': 
            return {
                ...state, 
                smurfInfo: action.payload, 
                isSending: false, 
                error: ''
            }
        case 'SENDING_SMURF_FAILED': 
            return {
                ...state, 
                error: action.payload
            }
        case 'FETCH_SMURF_FAILED': 
            return {
                ...state, 
                error: action.payload
            }
        default: 
            return state; 
    }
}