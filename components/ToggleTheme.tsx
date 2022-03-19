import { useColorModeValue, useColorMode, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { mode } from '@/utils/mode'


  const ThemeButton = styled(Button)`
  width:45px;
  height:45px;
  border-radius: 1rem;
  background:${mode('linear-gradient(to bottom, #0F0F0F, #01052C)', 'linear-gradient(75deg, rgba(193,69,237,1) 10%, rgba(150,220,250,1) 100%)' )};
  :hover{
    background: ${mode('linear-gradient(to bottom, #0F0F0F, #01052C)', 'linear-gradient(75deg, rgba(193,69,237,1) 10%, rgba(150,220,250,1) 100%)' )};
  }
`

export const ToggleThemeButton = () => {
  
  const Icon = useColorModeValue(MoonIcon, SunIcon)
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{display:'inline-block', width:'fit-content'}}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
      <ThemeButton
        onClick={() => toggleColorMode()}
        display={"flex"}
        alignItems='center'
        justifyContent='center'

      >
      <Icon
        color={useColorModeValue('purple', 'orange' )}
        fontSize='3xl'
      />
      </ThemeButton>
      </motion.div>
    </AnimatePresence >
  )
}