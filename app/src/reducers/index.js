import { START_FETCH_FACT, FETCH_NEW_FACT, FETCH_FACT_ERROR } from '../actions'

const initialState = {
    fact: '',
    isFetching: false, 
    error: ''
}

export const reducer = ( state = initialState, action) => {
    switch(action.type){
        // initial load 
        case(START_FETCH_FACT):
        return({
            // make a copy of state
            ...state,
            // change isFetching to true, return other states unchanged
            isFetching: true,
            error: '',
            fact: ''
        });
        // successfully add new fact
        case(FETCH_NEW_FACT):
        return({
            ...state,
            // change fact state to the payload coming in from the action 
            // return other states unchanged
            fact: action.payload,
            isFetching: false,
            error: ''
        });
        // failed to add new fact
        case(FETCH_FACT_ERROR):
        return({
            ...state,
            // change error to error code coming in from the action
            error: action.payload,
            isFetching: false,
            fact: ''
        });
        default: 
            return state;
    }
}