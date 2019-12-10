import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.value })
            };

        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(res => res.id !== action.item)
            }
    }
    return state;
}

export default resultsReducer;