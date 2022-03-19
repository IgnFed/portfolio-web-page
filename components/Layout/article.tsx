import IBaseProps from "@/models/components/IBaseProps"
import converToChakraElement from "@/utils/chakra-convert"
import { motion } from "framer-motion"

const Section = converToChakraElement(motion.article)

export const Layout = <Props extends IBaseProps>(
  {
    children
  }:Props
)=>{
  
  return(
    <Section
      initial={{y:-10, opacity:0}}
      animate={{y:10, opacity:1}}
      transition={{type:'spring'}}
    >
      {children}
    </Section>
  )
}