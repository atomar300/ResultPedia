import {
    ALL_STUDENT_REQUEST,
    ALL_STUDENT_FAIL,
    ALL_STUDENT_SUCCESS,
    NEW_STUDENT_FAIL,
    NEW_STUDENT_REQUEST,
    NEW_STUDENT_SUCCESS,
    CLEAR_ERRORS
} from "../constants/studentConstants";
import { Api } from "../Api";


// to get all students
export const getStudents = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_STUDENT_REQUEST });

        const token = (localStorage.getItem("token"));
        const config = { headers: { "Authorization" : `Bearer ${token}` } }
        const { data } = await Api.get(`/api/v1/students`, config);

        dispatch({ type: ALL_STUDENT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ALL_STUDENT_FAIL, payload: error.response.data.message })
    }
}


// to add a new student
export const newStudent = (studentData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_STUDENT_REQUEST });

        const token = (localStorage.getItem("token"));
        const config = { headers: { "Content-Type": "application/json", "Authorization" : `Bearer ${token}` } }
        await Api.post(`/api/v1/student/add`, studentData, config);

        dispatch({ type: NEW_STUDENT_SUCCESS})

    } catch (error) {
        dispatch({ type: NEW_STUDENT_FAIL, payload: error.response.data.message, })
    }
}


// To clear the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}