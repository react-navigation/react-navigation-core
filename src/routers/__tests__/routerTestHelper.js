import NavigationActions from '../../NavigationActions';

// A simple helper that makes it easier to write basic routing tests
// We generally want to apply one action after the other and check router returns correct state
// it's often convenient to manipulate a structure that keeps the router state to creating many state1, state2, state3 local variables...

const defaultInitAction = {
  type: NavigationActions.INIT,
};

export const getRouterTestHelper = (router, initAction = defaultInitAction) => {
  const log = false;

  let state = router.getStateForAction(initAction);

  const applyAction = action => {
    log && console.debug('\n');
    log && console.debug('---------------------------------------');
    log && console.debug('\n');
    log && console.debug('old state', state);
    log && console.debug('action', action);
    state = router.getStateForAction(action, state);
    log && console.debug('new state', state);
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
    return getSubStateResurcive(state, level);
  };

  return { applyAction, navigateTo, back, getState, getSubState };
};

const getSubStateResurcive = (state, level = 1) => {
  if (level === 0) {
    return state;
  } else {
    const directSubState = state.routes[state.index];
    return getSubStateResurcive(directSubState, level - 1);
  }
};
