const initialState = {
  isLightMode: false,
};

const TOGGLE_LIGHTMODE = 'TOGGLE_LIGHTMODE';

export const toggleLightMode = isLightMode => ({
  type: TOGGLE_LIGHTMODE, isLightMode
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIGHTMODE:
      return { ...state, isLightMode: action.isLightMode };
    default:
      return state;
  }
};