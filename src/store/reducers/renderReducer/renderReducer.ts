import { IRenderReducerAction } from "../../../types/actionTypes";

const initialState = {
    needsRender: true,
}

export const STOP_RENDER = "STOP_RENDER";
export const START_RENDER = "START_RENDER";

export const renderReducer = (state = initialState, action: IRenderReducerAction) => {
    switch (action.type) {
        case STOP_RENDER: return {
            ...state,
            needsRender: false,
        };
         case START_RENDER: return {
            ...state,
            needsRender: true,
        };
        default: return state;
    }
}

