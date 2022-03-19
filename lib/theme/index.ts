import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { borders } from './foundations/borders'
import { Heading } from './components'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode:false,
}

export const theme = extendTheme(
  {
    components:{
      Heading
    },
    config,
    styles,
    borders
  }
)