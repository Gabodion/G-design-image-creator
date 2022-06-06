import axios from "axios";
import { DATA_CREATE_FAIL, DATA_CREATE_REQUEST, DATA_CREATE_SUCCESS, DATA_INFO_FAIL, DATA_INFO_REQUEST, DATA_INFO_SUCCESS } from "../constants/dataConstants";

export const dataInfos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: DATA_INFO_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios .get("/api/designs", config);

        dispatch({
            type: DATA_INFO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message = 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({
            type: DATA_INFO_FAIL,
            payload: message,
        });
    }
}


export const createDataInfos = (category, img, description) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DATA_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios .post(
            "/api/designs/create",
            { category, img, description },
             config,
             );

        dispatch({
            type: DATA_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message = 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({
            type: DATA_CREATE_FAIL,
            payload: message,
        });
    }
}