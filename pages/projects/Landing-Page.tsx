import { GithubIcon } from "@/pages/Icons/Github";
import { Layout } from "@/pages/Layout/article";
import { LinkItem } from "@/pages/LinkItem";
import { Button, Flex, Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Point } from "@/components/Point";

export default function MultiStepsForm() {
  return (
    <Layout pageTitle="Landing Page">
      <Heading mb='.5rem'>Landing Page</Heading>

      <VStack gap='.5rem'>
        <Image
          src='/landing_page.png'
          w='100%'
          h='300px'
          borderRadius='1rem'
          alt="Landing Page Image"
        />
        <Flex as='section' w='100%' gap='1rem'>
          <LinkItem
            href="https://html-css-js-test.netlify.app/"
            options={{
              referrerPolicy: 'no-referrer',
              rel: 'nofollow',
              ref: 'no-referrer',
              target: '_blank',
              p: 0,
              css: { width: '100%' }
            }}
          >
            <Button
              bgColor={useColorModeValue('#0c0a16dd', 'whiteAlpha.200')}
              w='full'
              _hover={{}}
              p='2rem'
              flexGrow={1}
            >
              <ExternalLinkIcon color='#fff' w='45px' h='45px' />
            </Button>
          </LinkItem>
          <LinkItem
            href="https://github.com/IgnFed/Landing-Page"
            options={{
              referrerPolicy: 'no-referrer',
              rel: 'nofollow',
              ref: 'no-referrer',
              target: '_blank',
              p: 0,
              css: { width: '100%' }

            }}
          >
            <Button
              bgColor={useColorModeValue('#0c0a16dd', 'whiteAlpha.200')}
              _hover={{}}
              p='2rem'
              flexGrow={1}
            >
              <GithubIcon w='45px' h='45px' />
            </Button>
          </LinkItem>
        </Flex>

        <Flex as='section' wrap='wrap' w='100%' gap={3}>
          <Heading as='h6' fontSize='1rem'>
            <Point>HTML</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>CSS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>JS</Point>
          </Heading>
        </Flex>
      </VStack>
    </Layout >
  )
}
