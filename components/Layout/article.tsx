import { ILayout } from "@/models/components/Layout/article"
import converToChakraElement from "@/utils/chakra-convert"
import { motion } from "framer-motion"

const Section = converToChakraElement(motion.article)

export const Layout = <Props extends ILayout>(
  {
    children,
    delay=0.2
  }:Props
)=>{
  
  return(
    <Section
      initial={{y:-10, opacity:0}}
      animate={{y:10, opacity:1}}
      transition={{type:'spring', delay}}

    >
      {children}
    </Section>
  )
}