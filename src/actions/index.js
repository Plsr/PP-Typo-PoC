export const CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY'
export const CHANGE_VALUE_FOR_KEY = 'CHANGE_VALUE_FOR_KEY'
export const CHANGE_BODY_OPTIONS = 'CHANGE_BODY_OPTIONS'
export const UPDATE_BODY_WIDTH_CONSTRAINTS = 'UPDATE_BODY_WIDTH_CONSTRAINTS'

export function changeFontFamily(family) {
  return {
    type: CHANGE_FONT_FAMILY,
    family
  }
}

// Should be legacy soon
export function changeValueForKey(key, value) {
  return {
    type: CHANGE_VALUE_FOR_KEY,
    key,
    value
  }
}

export function changeBodyOption(key, value) {
  return {
    type: CHANGE_BODY_OPTIONS,
    key,
    value
  }
}

export function updateBodyWidthContraints(min, max) {
  return {
    type: UPDATE_BODY_WIDTH_CONSTRAINTS,
    min,
    max
  }
}
