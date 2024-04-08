import {
    ALL_RESULT_REQUEST,
    ALL_RESULT_FAIL,
    ALL_RESULT_SUCCESS,
    NEW_RESULT_FAIL,
    NEW_RESULT_REQUEST,
    NEW_RESULT_SUCCESS,
    NEW_RESULT_RESET,
    RESULT_DETAILS_REQUEST,
    RESULT_DETAILS_FAIL,
    RESULT_DETAILS_SUCCESS,
    UPDATE_RESULT_REQUEST,
    UPDATE_RESULT_SUCCESS,
    UPDATE_RESULT_FAIL,
    CLEAR_ERRORS
} from "../constants/resultConstants";



export const resultReducer = (state = { results : [] }, action) => {

    switch (action.type) {
        case ALL_RESULT_REQUEST:
            return {
                loading: true,
                results: [],
            };

        case ALL_RESULT_SUCCESS:
            return {
                loading: false,
                results: action.payload,
            };

        case ALL_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }

}


export const newResultReducer = (state = {}, action) => {

    switch (action.type) {
        case NEW_RESULT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case NEW_RESULT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAdded: true,
            };

        case NEW_RESULT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case NEW_RESULT_RESET:
            return {
                ...state,
                isAdded: false,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}