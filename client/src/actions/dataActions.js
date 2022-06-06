import axios from "axios";
import { DATA_INFO_FAIL, DATA_INFO_REQUEST, DATA_INFO_SUCCESS } from "../constants/dataConstants";

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