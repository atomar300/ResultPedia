import {
    ALL_STUDENT_REQUEST,
    ALL_STUDENT_FAIL,
    ALL_STUDENT_SUCCESS,
    NEW_STUDENT_FAIL,
    NEW_STUDENT_REQUEST,
    NEW_STUDENT_SUCCESS,
    NEW_STUDENT_RESET,
    CLEAR_ERRORS
} from "../constants/studentConstants";



export const studentReducer = (state = { students: [] }, action) => {

    switch (action.type) {
        case ALL_STUDENT_REQUEST:
            return {
                loading: true,
                students: [],
            };

        case ALL_STUDENT_SUCCESS:
            return {
                loading: false,
                students: action.payload,
            };

        case ALL_STUDENT_FAIL:
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



export const newStudentReducer = (state = {}, action) => {

    switch (action.type) {
        case NEW_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case NEW_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAdded: true,
            };

        case NEW_STUDENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case NEW_STUDENT_RESET:
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