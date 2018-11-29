/**
 * Utilities to perform atomic operation with navigate state and routes.
 *
 * ```javascript
 * const state1 = {key: 'screen 1'};
 * const state2 = NavigationStateUtils.push(state1, {key: 'screen 2'});
 * ```
 */
declare const StateUtils: {
    /**
     * Gets a route by key. If the route isn't found, returns `null`.
     */
    get(state: any, key: any): any;
    /**
     * Returns the first index at which a given route's key can be found in the
     * routes of the navigation state, or -1 if it is not present.
     */
    indexOf(state: any, key: any): any;
    /**
     * Returns `true` at which a given route's key can be found in the
     * routes of the navigation state.
     */
    has(state: any, key: any): boolean;
    /**
     * Pushes a new route into the navigation state.
     * Note that this moves the index to the position to where the last route in the
     * stack is at.
     */
    push(state: any, route: any): any;
    /**
     * Pops out a route from the navigation state.
     * Note that this moves the index to the position to where the last route in the
     * stack is at.
     */
    pop(state: any): any;
    /**
     * Sets the focused route of the navigation state by index.
     */
    jumpToIndex(state: any, index: any): any;
    /**
     * Sets the focused route of the navigation state by key.
     */
    jumpTo(state: any, key: any): any;
    /**
     * Sets the focused route to the previous route.
     */
    back(state: any): any;
    /**
     * Sets the focused route to the next route.
     */
    forward(state: any): any;
    /**
     * Replace a route by a key.
     * Note that this moves the index to the position to where the new route in the
     * stack is at and updates the routes array accordingly.
     */
    replaceAndPrune(state: any, key: any, route: any): any;
    /**
     * Replace a route by a key.
     * Note that this moves the index to the position to where the new route in the
     * stack is at. Does not prune the routes.
     * If preserveIndex is true then replacing the route does not cause the index
     * to change to the index of that route.
     */
    replaceAt(state: any, key: any, route: any, preserveIndex?: boolean): any;
    /**
     * Replace a route by a index.
     * Note that this moves the index to the position to where the new route in the
     * stack is at.
     */
    replaceAtIndex(state: any, index: any, route: any): any;
    /**
     * Resets all routes.
     * Note that this moves the index to the position to where the last route in the
     * stack is at if the param `index` isn't provided.
     */
    reset(state: any, routes: any, index: any): any;
};
export default StateUtils;
