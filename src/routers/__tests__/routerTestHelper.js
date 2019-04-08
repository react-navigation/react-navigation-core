import NavigationActions from '../../NavigationActions';

// A simple helper that makes it easier to write basic routing tests
// We generally want to apply one action after the other and check router returns correct state
// it's often convenient to manipulate a structure that keeps the router state to avoid
// creating many state1, state2, state3 local variables which are prone to typos...

const debug = false;

const defaultInitAction = {
  type: NavigationActions.INIT,
};

export const getRouterTestHelper = (router, initAction = defaultInitAction) => {
  let state = router.getStateForAction(initAction);

  const applyAction = action => {
    debug && console.debug('\n');
    debug && console.debug('---------------------------------------');
    debug && console.debug('\n');
    debug && console.debug('old state', state);
    debug && console.debug('action', action);
    state = router.getStateForAction(action, state);
    debug && console.debug('new state', state);
    return state;
  };

  const navigateTo = (routeName, otherActionAttributes) =>
    applyAction({
      type: NavigationActions.NAVIGATE,
      routeName,
      ...otherActionAttributes,
    });

  const back = () =>
    applyAction({
      type: NavigationActions.BACK,
    });

  const getState = () => state;

  const getSubState = (level = 1) => {
    return getSubStateRecursive(state, level);
  };

  return { applyAction, navigateTo, back, getState, getSubState };
};

const getSubStateRecursive = (state, level = 1) => {
  if (level === 0) {
    return state;
  } else {
    const directSubState = state.routes[state.index];
    return getSubStateRecursive(directSubState, level - 1);
  }
};
