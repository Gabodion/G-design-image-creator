import axios from "axios";
import { DATA_INFO_REQUEST } from "../constants/dataConstants";

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
        }
    } catch (error) {
        
    }
}