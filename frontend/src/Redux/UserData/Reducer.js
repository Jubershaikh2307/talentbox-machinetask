import { GETUSERDATA_FAIL, GETUSERDATA_REQUEST, GETUSERDATA_SUCCESS, POSTUSERDATA_FAIL, POSTUSERDATA_REQUEST, POSTUSERDATA_SUCCESS } from "./actionType";

const init = {
    isLoading: false,
    isError: false,
    token:""
}

export const reducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case POSTUSERDATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case POSTUSERDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case POSTUSERDATA_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case GETUSERDATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GETUSERDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError:false,
                token:payload
            }
        case GETUSERDATA_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}