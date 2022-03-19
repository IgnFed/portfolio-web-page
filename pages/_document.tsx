import { theme } from "@/lib/theme";
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, NextScript, Head, Main } from 'next/document'

export default class Doc extends NextDocument{

  render(){
    return(
      <Html lang="es">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}