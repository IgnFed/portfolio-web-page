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
    <Box as="main">
      <Head >
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta lang='es' />
        <meta property="og:site_name" content="Ignacio Fedorenco Index" />
        <meta property="og:description" content="Ignacio's Fedorenco Webpage" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ignacio's Fedorenco website" />
        <meta name="og:country-name" content="Argentina" />
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@IgnFedor" />
        <meta property="twitter:creator" content="@IgnFedor" /> */}

        //Facebook Meta
        <meta property="og:url" content="https://www.github.com/IgnFed/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IgnFed - Overview" />
        <meta property="og:description" content="IgnFed Repository(42)." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/70576040?v=4?s=400" />

        //Twitter Meta
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="github.com" />
        <meta property="twitter:url" content="https://www.github.com/IgnFed/" />
        <meta name="twitter:title" content="IgnFed - Overview" />
        <meta name="twitter:description" content="IgnFed Repository(42)." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/70576040?v=4?s=400" />

        <meta name="description" content="Ignacio's Fedoenco Homepage" />
        <meta name='Author' content='Ignacio Fedorenco' />
        <meta name="Author" content="IgnFed" />
        <meta name='keywords' lang="es" content='Ignacio Fedorenco portafolio CV curriculum IgnFed' />
        <meta name='keywords' lang="en" content='Ignacio Fedorenco portfolio CV curriculum IgnFed' />
        <title>Ignacio Fedorenco - Homepage</title>
      </Head>
      <Navigation href={currRoute} />
      <Container maxW={'container.md'} mb={'2rem'} pt={14}>{children}</Container>
    </Box>
  )

}