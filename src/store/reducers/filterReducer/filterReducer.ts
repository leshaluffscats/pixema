import { IFilterAction } from "../../../types/actionTypes";

const initialState = {
    isOpen: false,
}

export const TOGGLE_FILTER = "TOGGLE_FILTER";

export const filterReducer = (state = initialState, action: IFilterAction) => {
    switch (action.type) {
        case TOGGLE_FILTER: return {
            ...state,
            isOpen: !state.isOpen,
        };
        default: return state;
    }
}



