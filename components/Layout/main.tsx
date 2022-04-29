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
        <link rel="shortcut icon" href="/temp_ico.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/temp_ico.png" />
        <meta name="google-site-verification" content="aKZyzoo-F5etEplQ63WkB7HLNS3mBVz1MuOwAlhZNCI" />
        <meta lang='es' />
        <meta property="og:site_name" content="Ignacio Fedorenco Index" />
        <meta property="og:description" content="Ignacio's Fedorenco Webpage" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ignacio's Fedorenco website" />
        <meta name="og:country-name" content="Argentina" />
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@IgnFedor" />
        <meta property="twitter:creator" content="@IgnFedor" /> */}

        {/* //Facebook Meta */}
        <meta property="og:url" content="https://ignfed.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IgnFed - Portfolio" />
        <meta property="og:description" content="My own Portfolio where i shared some of my projects and tell you about me." />
        <meta property="og:image" content="/temp_ico.png" />

        {/* //Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="github.com" />
        <meta property="twitter:url" content="https://ignfed.vercel.app/" />
        <meta name="twitter:title" content="IgnFed - Portfolio" />
        <meta name="twitter:description" content="My own Portfolio where i shared some of my projects and tell you about me." />
        <meta name="twitter:image" content="/temp_ico.png" />

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