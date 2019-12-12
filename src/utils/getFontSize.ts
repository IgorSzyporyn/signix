import SizeTypes from '../types/SizeTypes'

const getFontSize = (size: SizeTypes = 'normal') => {
  let fontSize = '1.6rem'

  switch (size) {
    case 'tiny':
      fontSize = '1rem'
      break
    case 'xsmall':
      fontSize = '1.2rem'
      break
    case 'small':
      fontSize = '1.4rem'
      break
    case 'normal':
      fontSize = '1.6rem'
      break
    case 'medium':
      fontSize = '2rem'
      break
    case 'large':
      fontSize = '2.4rem'
      break
    case 'big':
      fontSize = '3.2rem'
      break
    case 'huge':
      fontSize = '4.8rem'
      break
    default:
      break
  }

  return fontSize
}

export default getFontSize
