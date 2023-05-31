import { TOGGLE_FILTER, ClOSE_FILTER } from "./filterReducer";

export const toggleFilterAction = () => ({
    type: TOGGLE_FILTER,
});

export const closeFilterAction = () => ({
    type: ClOSE_FILTER,
});

