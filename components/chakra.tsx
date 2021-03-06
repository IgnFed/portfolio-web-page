import { 
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import { theme } from '@/lib/theme'

export const Chakra = (
  {
    children,
    cookies
  }
)=>
{
  const colorModeManager = 
    typeof cookies === 'string'
    ? cookieStorageManager(cookies)
    : localStorageManager


  return <ChakraProvider theme={theme} colorModeManager={colorModeManager}  >{children}</ChakraProvider>
}

export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  }
}