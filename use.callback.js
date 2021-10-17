// The useCallback hook is used when you have a component in which 
// the child is rerendering again and again without need. Pass an 
// inline callback and an array of dependencies. useCallback will return 
// a memoized version of the callback that only changes if one of the
//  dependencies has changed.