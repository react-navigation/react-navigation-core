interface ActionCreatorPayload {
    key?: string;
    immediate?: boolean;
    params?: any;
    routeName?: string;
    action?: any;
}
interface Action {
    type: string;
    key?: string;
    immediate?: boolean;
    params?: any;
    routeName?: string;
    action?: any;
}
declare const _default: {
    BACK: string;
    INIT: string;
    NAVIGATE: string;
    SET_PARAMS: string;
    back: (payload?: ActionCreatorPayload) => Action;
    init: (payload?: ActionCreatorPayload) => Action;
    navigate: (payload: ActionCreatorPayload) => Action;
    setParams: (payload: ActionCreatorPayload) => Action;
};
export default _default;
