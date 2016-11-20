export const CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY'
export const CHANGE_VALUE_FOR_KEY = 'CHANGE_VALUE_FOR_KEY'

export function changeFontFamily(family) {
  return {
    type: CHANGE_FONT_FAMILY,
    family
  }
}

export function changeValueForKey(key, value) {
  return {
    type: CHANGE_VALUE_FOR_KEY,
    key,
    value
  }
}
