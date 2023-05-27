import { IRenderReducerAction } from "../../types/actionTypes";

const initialState = {
    needsRender: true,
}

const STOP_RENDER = "STOP_RENDER";
const START_RENDER = "START_RENDER";

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

export const startRenderAction = () => {
    return({
        type: START_RENDER,
    })
}

export const stopRenderAction = () => {
    return({
        type: STOP_RENDER,
    })
}