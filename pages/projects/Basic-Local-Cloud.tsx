import { GithubIcon } from "@/pages/Icons/Github";
import { Layout } from "@/pages/Layout/article";
import { LinkItem } from "@/pages/LinkItem";
import { Button, Flex, Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react";
import { Point } from "@/components/Point";

export default function MultiStepsForm() {
  return (
    <Layout pageTitle="Basic Local Cloud">
      <Heading mb='.5rem'>Basic Local Cloud</Heading>

      <VStack gap='.5rem'>
        <Image
          src='/local_cloud.png'
          w='100%'
          h='300px'
          borderRadius='1rem'
          alt="Basic Local Cloud Image"

        />
        <Flex as='section' w='100%' gap='1rem'>

          <LinkItem
            href="https://github.com/IgnFed/Basic-Local-Cloud/"
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
              w='full'
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
            <Point>NextJS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>ReactJS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>ViteJS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>NodeJS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>ExpressJS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>HTML</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>CSS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>JS</Point>
          </Heading>
          <Heading as='h6' fontSize='1rem'>
            <Point>Bootstrap</Point>
          </Heading>
        </Flex>
      </VStack>
    </Layout >
  )
}
