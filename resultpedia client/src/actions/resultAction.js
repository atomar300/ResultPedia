import {
    ALL_RESULT_REQUEST,
    ALL_RESULT_FAIL,
    ALL_RESULT_SUCCESS,
    NEW_RESULT_FAIL,
    NEW_RESULT_REQUEST,
    NEW_RESULT_SUCCESS,
    RESULT_DETAILS_REQUEST,
    RESULT_DETAILS_FAIL,
    RESULT_DETAILS_SUCCESS,
    UPDATE_RESULT_REQUEST,
    UPDATE_RESULT_SUCCESS,
    UPDATE_RESULT_FAIL,
    CLEAR_ERRORS
} from "../constants/resultConstants";
import { Api } from "../Api";


// to get all the results
export const getResults = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_RESULT_REQUEST });

        const { data } = await Api.get(`/api/v1/results`);

        dispatch({ type: ALL_RESULT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ALL_RESULT_FAIL, payload: error.response.data.message })
    }
}


// to get a single result details
export const getResultDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESULT_DETAILS_REQUEST });

        const { data } = await Api.get(`/api/v1/result/${id}`);

        dispatch({ type: RESULT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: RESULT_DETAILS_FAIL, payload: error.response.data.message, })
    }
}


// to add a new result
export const newResult = (resultData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_RESULT_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } }
        await Api.post(`/api/v1/result/add`, resultData, config);

        dispatch({ type: NEW_RESULT_SUCCESS })

    } catch (error) {
        dispatch({ type: NEW_RESULT_FAIL, payload: error.response.data.message, })
    }
}



// to update a result
export const updateResult = (id, resultData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_RESULT_REQUEST });

        const { data } = await Api.put(`/api/v1/result/${id}`, resultData);

        dispatch({ type: UPDATE_RESULT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: UPDATE_RESULT_FAIL, payload: error.response.data.message, })
    }
}



// To clear the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}