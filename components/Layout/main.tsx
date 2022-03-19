import IMainLayout from "@/models/components/Layout/main";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Navigation } from "../Navigation";

export const Layout = <Props extends IMainLayout>(
  {
    children,
    currRoute = '/'
  }: Props
) => {

  return (
    <Box as="main" pb={'8 0'} >
      <Head >
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Ignacio Fedorenco - Homepage</title>
      </Head>
      <Navigation href={currRoute} />
      <Container maxW={'container.md'} pt={14}>{children}</Container>
    </Box>
  )

}