export const CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY'

export function changeFontFamily(family) {
  return {
    type: CHANGE_FONT_FAMILY,
    family
  }
}
