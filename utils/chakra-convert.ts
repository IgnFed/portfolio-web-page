import { chakra, shouldForwardProp } from '@chakra-ui/react'


export default (motionElement: any) => chakra(motionElement, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})