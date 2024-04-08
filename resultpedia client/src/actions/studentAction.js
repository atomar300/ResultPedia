import {
    ALL_STUDENT_REQUEST,
    ALL_STUDENT_FAIL,
    ALL_STUDENT_SUCCESS,
    NEW_STUDENT_FAIL,
    NEW_STUDENT_REQUEST,
    NEW_STUDENT_SUCCESS,
    STUDENT_DETAILS_REQUEST,
    STUDENT_DETAILS_FAIL,
    STUDENT_DETAILS_SUCCESS,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    CLEAR_ERRORS
} from "../constants/studentConstants";
import { Api } from "../Api";


// to get all students
export const getStudents = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_STUDENT_REQUEST });

        const { data } = await Api.get(`/api/v1/students`);

        dispatch({ type: ALL_STUDENT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ALL_STUDENT_FAIL, payload: error.response.data.message })
    }
}


// to get a single student details
export const getStudentDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: STUDENT_DETAILS_REQUEST });

        const { data } = await Api.get(`/api/v1/student/${id}`);

        dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: STUDENT_DETAILS_FAIL, payload: error.response.data.message, })
    }
}


// to add a new student
export const newStudent = (studentData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_STUDENT_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } }
        await Api.post(`/api/v1/student/add`, studentData, config);

        dispatch({ type: NEW_STUDENT_SUCCESS})

    } catch (error) {
        dispatch({ type: NEW_STUDENT_FAIL, payload: error.response.data.message, })
    }
}



// to update a student
export const updateStudent = (id, studentData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_STUDENT_REQUEST });

        const { data } = await Api.put(`/api/v1/student/${id}`, studentData);

        dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: UPDATE_STUDENT_FAIL, payload: error.response.data.message, })
    }
}



// To clear the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}