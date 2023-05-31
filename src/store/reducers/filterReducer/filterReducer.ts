import { IFilterAction } from "../../../types/actionTypes";

const initialState = {
    isOpen: false,
}

export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const ClOSE_FILTER = "ClOSE_FILTER";

export const filterReducer = (state = initialState, action: IFilterAction) => {
    switch (action.type) {
        case TOGGLE_FILTER: return {
            ...state,
            isOpen: !state.isOpen,
        };
        case ClOSE_FILTER: return {
            ...state,
            isOpen: false,
        };
        default: return state;
    }
}



