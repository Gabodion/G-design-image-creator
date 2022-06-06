import { DATA_INFO_FAIL, DATA_INFO_REQUEST, DATA_INFO_SUCCESS } from "../constants/dataConstants";
export const dataInfoReducer = ( state = {dataInfo: [] }, action ) => {

    switch (action.type) {
        case DATA_INFO_REQUEST :
            return { loading: true};
        case  DATA_INFO_SUCCESS:
            return { loading: false, dataInfo: action.payload };
        case DATA_INFO_FAIL:
            return { loading: false, error: action.payload };    
        default:
            return state;
    }
};
