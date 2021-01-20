import axios from "axios";

export const START_FETCH_FACT = 'START_FETCH_FACT'
export const FETCH_NEW_FACT = 'FETCH_NEW_FACT'
export const FETCH_FACT_ERROR = 'FETCH_FACT_ERROR'


export const getFact = () => {
    return (dispatch => {
    dispatch({type: START_FETCH_FACT});
        axios
        .get('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => {
            // dispatch random fact
            dispatch({type: FETCH_NEW_FACT, payload: response.data.text })
        })
        .catch(error => {
            // dispatch fetch failure
            dispatch({type: FETCH_FACT_ERROR, payload: error.response.code})
        })
    });
}
