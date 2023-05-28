import { STOP_RENDER, START_RENDER } from './renderReducer';

export const startRenderAction = () => {
    return ({
        type: START_RENDER,
    })
}

export const stopRenderAction = () => {
    return ({
        type: STOP_RENDER,
    })
}