import { motion } from "framer-motion"
import { Image } from "@chakra-ui/react"
import { ICard } from "@/models/components/Card"

const DEFAULT_ANIMATION_FRAMES = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
}

export const Card = <Props extends ICard>(
  {
    animationDelay = .2,
    imageUrl
  }: Props
) => {

  return (
    <motion.div
      style={{ width: '100%', height: '250px' }}
      initial='initial'
      animate='animate'
      variants={DEFAULT_ANIMATION_FRAMES}
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
    </motion.div>
  )
}