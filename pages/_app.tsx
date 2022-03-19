import { Chakra } from "@/pages/chakra";
import { Layout } from "@/pages/Layout/main";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";

export default function App<Props extends AppProps>(
  {
    Component,
    pageProps,
    router
  }: Props
) {
  return (
    <Chakra cookies={pageProps.cookies} >
        <AnimatePresence exitBeforeEnter initial={false}>
      <Layout currRoute={router.asPath}>
          <Component {...pageProps} />
      </Layout>
        </AnimatePresence>
    </Chakra>
  )
}