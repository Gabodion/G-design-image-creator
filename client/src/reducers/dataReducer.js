import { DATA_CREATE_FAIL, DATA_CREATE_REQUEST, DATA_CREATE_SUCCESS, DATA_INFO_FAIL, DATA_INFO_REQUEST, DATA_INFO_SUCCESS } from "../constants/dataConstants";




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

export const datacreateReducer = ( state = {}, action ) => {

    switch (action.type) {
        case DATA_CREATE_REQUEST :
            return { loading: true};
        case  DATA_CREATE_SUCCESS:
            return { loading: false, success: true };
        case DATA_CREATE_FAIL:
            return { loading: false, error: action.payload };    
        default: 
            return state;
    }
};

