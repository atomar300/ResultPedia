import {
    ALL_COURSE_REQUEST,
    ALL_COURSE_FAIL,
    ALL_COURSE_SUCCESS,
    NEW_COURSE_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    CLEAR_ERRORS
} from "../constants/courseConstants";
import { Api } from "../Api";


// to get all the courses
export const getCourses = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_COURSE_REQUEST });

        const token = (localStorage.getItem("token"));
        const config = {  headers: {"Authorization" : `Bearer ${token}`}  }

        const { data } = await Api.get(`/api/v1/courses`, config);
        
        dispatch({ type: ALL_COURSE_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: ALL_COURSE_FAIL, payload: error.response.data.message })
    }
}


// to add a new course
export const newCourse = (courseData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_COURSE_REQUEST });

        const token = (localStorage.getItem("token"));
        const config = { headers: { "Content-Type": "application/json", "Authorization" : `Bearer ${token}` } }
        await Api.post(`/api/v1/course/add`, courseData, config);

        dispatch({ type: NEW_COURSE_SUCCESS })

    } catch (error) {
        dispatch({ type: NEW_COURSE_FAIL, payload: error.response.data.message, })
    }
}


// To clear the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}