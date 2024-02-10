const initialState = {
  theme: 'dark'
} 

const TOOGLE_THEME = 'TOOGLE_THEME'

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_THEME:
      return {...state, theme: state.theme == 'dark' ?'light' :'dark'};
    default:
      return state;
  }
}

export const toogleTheme = () => ({type: TOOGLE_THEME})