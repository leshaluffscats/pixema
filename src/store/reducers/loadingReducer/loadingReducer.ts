import {ILoadingAction} from '../../../types/actionTypes';

const initialState = {
    isLoading: false,
}

export const LOADING = "LOADING";
export const FINISHED_LOADING = "FINISHED_LOADING";

export const loadingReducer = (state = initialState, action: ILoadingAction) => {
    switch (action.type) {
        case LOADING: return {
            ...state,
            isLoading: true,
        }
        case FINISHED_LOADING: return {
            ...state,
            isLoading: false,
        }
        default: return state;
    }
}

