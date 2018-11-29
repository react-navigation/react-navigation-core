const BACK: string = 'Navigation/BACK';
const INIT: string = 'Navigation/INIT';
const NAVIGATE: string = 'Navigation/NAVIGATE';
const SET_PARAMS: string = 'Navigation/SET_PARAMS';

interface ActionCreatorPayload {
  key?: string
  immediate?: boolean
  params?: any
  routeName?: string
  action?: any
}

interface Action {
  type: string,
  key?: string
  immediate?: boolean
  params?: any
  routeName?: string
  action?: any
}

const back = (payload: ActionCreatorPayload = {}): Action => ({
  type: BACK,
  key: payload.key,
  immediate: payload.immediate,
});

const init = (payload: ActionCreatorPayload = {}): Action => {
  /*
    TODO: maybe simplify this and do an implicit return?
    ({
      type: INIT,
      params: payload.params ? payload.params : undefined
    })
  */
  let action: Action = {
    type: INIT,
  };
  if (payload.params) {
    action.params = payload.params;
  }
  return action;
};

const navigate = (payload: ActionCreatorPayload): Action => {
  const action: Action = {
    type: NAVIGATE,
    routeName: payload.routeName,
  };
  if (payload.params) {
    action.params = payload.params;
  }
  if (payload.action) {
    action.action = payload.action;
  }
  if (payload.key) {
    action.key = payload.key;
  }
  return action;
};

const setParams = (payload: ActionCreatorPayload): Action => ({
  type: SET_PARAMS,
  key: payload.key,
  params: payload.params,
});

export default {
  // Action constants
  BACK,
  INIT,
  NAVIGATE,
  SET_PARAMS,

  // Action creators
  back,
  init,
  navigate,
  setParams,
};
