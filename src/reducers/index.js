import { CHANGE_FONT_FAMILY, CHANGE_VALUE_FOR_KEY, CHANGE_BODY_OPTIONS, UPDATE_BODY_WIDTH_CONSTRAINTS, CHANGE_HEADLINE1_OPTIONS, CHANGE_HEADLINE2_OPTIONS, CHANGE_HEADLINE3_OPTIONS } from '../actions'

const initialState = {
  fontFamily: 'Verdana',
  bodyFontSize: '16',
  lineHeight: '24',
  bodyWidth: '600',
  h1Size: '36',
  h1MarginTop: '90',
  h1MarginBottom: '54',
  h2Size: '24',
  h2MarginTop: '48',
  h2MarginBottom: '24',
  h3Size: '21',
  h3MarginTop: '32',
  h3MarginBottom: '16',
  bgColor: '#fff',
  fgColor: '#000',
  headline1Options: {
    h1Size: '36',
    h1MarginTop: '66',
    h1MarginBottom: '38',
    errors: []
  },
  headline2Options: {
    h2Size: '24',
    h2MarginTop: '48',
    h2MarginBottom: '24',
    errors: []
  },
  headline3Options: {
    h3Size: '21',
    h3MarginTop: '40',
    h3MarginBottom: '18',
    errors: []
  },
  bodyTextOptions: {
    fontFamily: 'Verdana',
    bodyFontSize: '16',
    lineHeight: '26',
    bodyWidth: '561',
    errors: []
  },
  bodyWidthConstraints: {
    min: '521',
    max: '602'
  }
}

function typograhpyChanger(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FONT_FAMILY:
      return Object.assign({}, state, {
        bodyTextOptions: {
          ...state.bodyTextOptions,
          fontFamily: action.family
        }
      });
    case CHANGE_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        [action.key]: action.value
      });
    case CHANGE_BODY_OPTIONS:
      return Object.assign({}, state, {
        bodyTextOptions: {
          ...state.bodyTextOptions,
          [action.key]: action.value
        }
      });
    case CHANGE_HEADLINE1_OPTIONS:
      return Object.assign({}, state, {
        headline1Options: {
          ...state.headline1Options,
          [action.key]: action.value
        }
      });
    case CHANGE_HEADLINE2_OPTIONS:
      return Object.assign({}, state, {
        headline2Options: {
          ...state.headline2Options,
          [action.key]: action.value
        }
      });
    case CHANGE_HEADLINE3_OPTIONS:
      return Object.assign({}, state, {
        headline3Options: {
          ...state.headline3Options,
          [action.key]: action.value
        }
      });
    case UPDATE_BODY_WIDTH_CONSTRAINTS:
      return Object.assign({}, state, {
        bodyWidthConstraints: {
          min: action.min,
          max: action.max
        }
      })
    default:
      return state
  }
}

export default typograhpyChanger;
