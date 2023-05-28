import { LOADING, FINISHED_LOADING } from './loadingReducer';

export const setLoadingStatusOnAction = () => {
    return (
        { type: LOADING, }
    )
}

export const setLoadingStatusOffAction = () => {
    return (
        { type: FINISHED_LOADING, }
    )
}