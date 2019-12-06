import IconSizeTypes from '../types/IconSizeTypes'

const getIconSize = (size: IconSizeTypes = 'normal') => {
  let iconProps = {
    width: '',
    height: ''
  }

  switch (size) {
    case 'tiny':
      iconProps = {
        width: '0.8rem',
        height: '0.8rem'
      }
      break
    case 'small':
      iconProps = {
        width: '1rem',
        height: '1rem'
      }
      break
    case 'normal':
      iconProps = {
        width: '1.6rem',
        height: '1.6rem'
      }
      break
    case 'medium':
      iconProps = {
        width: '2rem',
        height: '2rem'
      }
      break
    case 'large':
      iconProps = {
        width: '3.2rem',
        height: '3.2rem'
      }
      break
    case 'big':
      iconProps = {
        width: '4.8rem',
        height: '4.8rem'
      }
      break
    case 'huge':
      iconProps = {
        width: '6.4rem',
        height: '6.4rem'
      }
      break
    default:
      break
  }

  return iconProps
}

export default getIconSize
