import {
    ALL_COURSE_REQUEST,
    ALL_COURSE_FAIL,
    ALL_COURSE_SUCCESS,
    NEW_COURSE_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    NEW_COURSE_RESET,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_FAIL,
    COURSE_DETAILS_SUCCESS,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAIL,
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