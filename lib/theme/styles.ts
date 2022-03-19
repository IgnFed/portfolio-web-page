import { mode } from "@/utils/mode";
import { Styles } from '@chakra-ui/theme-tools'

export const styles: Styles = {
  global:(props)=>(
    {
      'body':{
        bg: mode('linear-gradient(to bottom, #0F0F0F, #01052C)', 'linear-gradient(75deg, rgba(193,69,237,1) 10%, rgba(150,220,250,1) 100%)')(props),
        backgroundRepeat: 'no-repeat',
        minHeight:'100vh',
        color: mode('#FFFFFF', '#000000')(props)
      },
    }
  )
}