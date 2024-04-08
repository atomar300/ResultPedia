import {
    ALL_COURSE_REQUEST,
    ALL_COURSE_FAIL,
    ALL_COURSE_SUCCESS,
    NEW_COURSE_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    NEW_COURSE_RESET,
    CLEAR_ERRORS
} from "../constants/courseConstants";



export const courseReducer = (state = { courses: [] }, action) => {

    switch (action.type) {
        case ALL_COURSE_REQUEST:
            return {
                loading: true,
                courses: [],
            };

        case ALL_COURSE_SUCCESS:
            return {
                loading: false,
                courses: action.payload,
            };

        case ALL_COURSE_FAIL:
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



export const newCourseReducer = (state = {}, action) => {

    switch (action.type) {
        case NEW_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case NEW_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAdded: true,
            };

        case NEW_COURSE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case NEW_COURSE_RESET:
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