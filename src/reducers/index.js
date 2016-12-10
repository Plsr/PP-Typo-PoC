import { CHANGE_FONT_FAMILY, CHANGE_VALUE_FOR_KEY, CHANGE_BODY_OPTIONS } from '../actions'

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
  fgColor: '#000',
  bodyTextOptions: {
    fontFamily: 'Times New Roman',
    bodyFontSize: '16',
    lineHeight: '26',
    bodyWidth: '600',
    errors: []
  }
}

function typograhpyChanger(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FONT_FAMILY:
      return Object.assign({}, state, {
        fontFamily: action.family
      });
    case CHANGE_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        [action.key]: action.value
      });
    case CHANGE_BODY_OPTIONS:
      return Object.assign({}, state, {
        bodyTextOptions: {
          ...state.bodyTextOptions,
          [action.key]: action.value,
          errors: calculateErrors(action.key, action.value)
        }
      });
    default:
      return state
  }
}

function calculateErrors(key, newSize) {
  var errors = []

  switch(key) {
    case 'bodyFontSize':
      console.log("Key is body font size")
      if(newSize < 9) {
        console.log("TOO SAMLL")
        errors.push("Die Textgröße ist sehr klein und könnte schwer lesbar sein")
      }
      if(newSize > 24) {
        console.log("TOO BIG")
        errors.push("Die Textgröße ist sehr groß und könnte schwer lesbar sein")
      }
      return errors
    default:
      return null
  }
}

export default typograhpyChanger;
