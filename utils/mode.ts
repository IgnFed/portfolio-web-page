import { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const mode = (darkTheme:string, lightTheme:string) => (props:StyleFunctionProps)=> props.colorMode === 'dark' ? darkTheme : lightTheme
