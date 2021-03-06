// @flow
import glamorous from 'glamorous'
import { color, fontSize, space } from 'styled-system'
import Link from './Link'
import { COLORS } from '../../constants/theme'

export default glamorous(Link)(
  {
    position: 'relative',
    zIndex: 2,
    color: COLORS.BLUE,
    textDecoration: 'none',
    transition: 'color 200ms',
  },
  space,
  fontSize,
  color,
)
