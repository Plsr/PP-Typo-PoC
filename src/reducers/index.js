import { CHANGE_FONT_FAMILY } from '../actions'

const initialState = {
  fontFamily: 'Times New Roman',
  bodyFontSize: '16',
  lineHeight: '26',
  bodyWidth: '600',
  h1Size: '36',
  h1MarginTop: '30',
  h1MarginBottom: '20',
  h2Size: '24',
  h2MarginTop: '20',
  h2MarginBottom: '15',
  h3Size: '18',
  h3MarginTop: '20',
  h3MarginBottom: '10',
  bgColor: '#fff',
  fgColor: '#000'
}

function typograhpyChanger(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FONT_FAMILY:
      return Object.assign({}, state, {
        fontFamily: action.family
      });
    default:
      return state
  }
}

export default typograhpyChanger;
