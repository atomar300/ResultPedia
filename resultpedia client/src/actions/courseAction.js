import {
    ALL_COURSE_REQUEST,
    ALL_COURSE_FAIL,
    ALL_COURSE_SUCCESS,
    NEW_COURSE_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_FAIL,
    COURSE_DETAILS_SUCCESS,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAIL,
    CLEAR_ERRORS
} from "../constants/courseConstants";
import { Api } from "../Api";


// to get all the courses
export const getCourses = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_COURSE_REQUEST });

        const { data } = await Api.get(`/api/v1/courses`);

        dispatch({ type: ALL_COURSE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ALL_COURSE_FAIL, payload: error.response.data.message })
    }
}


// to get a single course details
export const getCourseDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_DETAILS_REQUEST });

        const { data } = await Api.get(`/api/v1/course/${id}`);

        dispatch({ type: COURSE_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: COURSE_DETAILS_FAIL, payload: error.response.data.message, })
    }
}


// to add a new course
export const newCourse = (courseData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_COURSE_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } }
        await Api.post(`/api/v1/course/add`, courseData, config);

        dispatch({ type: NEW_COURSE_SUCCESS})

    } catch (error) {
        dispatch({ type: NEW_COURSE_FAIL, payload: error.response.data.message, })
    }
}



// to update a course
export const updateCourse = (id, courseData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_COURSE_REQUEST });

        const { data } = await Api.put(`/api/v1/course/${id}`, courseData);

        dispatch({ type: UPDATE_COURSE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: UPDATE_COURSE_FAIL, payload: error.response.data.message, })
    }
}



// To clear the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}