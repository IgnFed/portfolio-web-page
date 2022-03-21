import { ILayout } from "@/models/components/Layout/article"
import { chakra, Container, shouldForwardProp } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Head from "next/head"

export const Layout = <Props extends ILayout>(
  {
    children,
    pageTitle,
    delay = 0.2
  }: Props
) => {

  return (
    <motion.article
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 10, opacity: 1 }}
      transition={{ type: 'spring', delay }}
    >
      {pageTitle && <Head><title>{pageTitle} - Ignacio Fedorenco</title></Head>}
      <Container mt={4}>
        {children}
      </Container>
    </motion.article>
  )
}