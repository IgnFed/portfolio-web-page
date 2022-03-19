import { chakra, shouldForwardProp } from '@chakra-ui/react'

export default function converToChakraElement(motionElement){
  return chakra(motionElement, {
    shouldForwardProp: prop => {
      return shouldForwardProp(prop) || prop === 'transition'
    }
  })
}