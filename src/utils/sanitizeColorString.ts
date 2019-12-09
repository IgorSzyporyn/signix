const sanitizeColorString = (color?: string) => {
  const regex = new RegExp(
    /(#(?:[\da-f]{3}){1,2}|rgb\((?:\d{1,3},\s*){2}\d{1,3}\)|rgba\((?:\d{1,3},\s*){3}\d*\.?\d+\)|hsl\(\d{1,3}(?:,\s*\d{1,3}%){2}\)|hsla\(\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\))/gi
  )

  if (color === 'transparent' || !color) {
    color = 'rgba(255, 255, 255, 0)'
  }

  const valid = color.match(regex)

  if (valid && valid.length) {
    color = valid[0]
  }

  return color
}

export default sanitizeColorString
