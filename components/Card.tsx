import { motion } from "framer-motion"
import { Image } from "@chakra-ui/react"
import convert from '@/utils/chakra-convert'
import { ICard } from "@/models/components/Card"

const Box = convert(motion.div)
const IMAGE_DIMENSIONS = {
  width: '100%',
  height: '250px'
}
const DEFAULT_ANIMATION_FRAMES = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
} as ICard['animationFrames']

export const Card = <Props extends ICard>(
  {
    animationDelay = .2 ,
    animationFrames = DEFAULT_ANIMATION_FRAMES,
    imageUrl
  }: Props
) => {

  return (
    <Box
      w={IMAGE_DIMENSIONS.width}
      h={IMAGE_DIMENSIONS.height}
      {...animationFrames || {}}
      transition={{ type: 'spring', delay: animationDelay }}
    >
      <Image
        src={imageUrl}
        borderRadius='1rem'
        display='inline-block'
        width={'inherit'}
        height={'inherit'}
        loading={'lazy'}
        decoding={'async'}
        // objectFit={'contain'}
      />
    </Box>
  )
}