import INavigation from '@/models/components/Navigation'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Stack,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { GithubIcon } from './Icons/Github'
import { LinkItem } from './LinkItem'
import { ToggleThemeButton } from './ToggleTheme'



export const Navigation = <Props extends INavigation>(
  {
    href
  }: Props
) => {

  return (
    <Box
      position={'fixed'}
      as='nav'
      zIndex={1}
      w='100%'
      backgroundColor={'#0c0a16dd'}
      css={{ backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px' }}
    >
      <Container
        p={2}
        display={'flex'}
        maxW={'container.lg'}
        gap={'2rem'}
      >
        <Stack
          display={{ base: 'none', md: 'flex' }}
          flexGrow={1}
          direction={{ base: 'column', md: 'row' }}
          justifyContent='flex-end'
          gap='.2rem'
          w={'auto'}
        >
          <LinkItem href='/' currRef={href}>
            Home
          </LinkItem>
          <LinkItem href='/projects' currRef={href}>
            Projects
          </LinkItem>
        </Stack>

        <Flex
          flexGrow={1}
          gap={'1rem'}
          justify='flex-end'
        >
          <ToggleThemeButton />
          <LinkItem
            href={'https://github.com/IgnFed/portfolio-web-page'}
            options={{
              p: 0,
              referrerPolicy: 'no-referrer',
              rel: 'nofollow',
              ref: 'no-referrer',
              target: '_blank'
            }}
          >

            <GithubIcon w='35px' h='35px' />
          </LinkItem>
          <Box
            display={{ base: 'flex', md: 'none' }}
            alignItems='center'
          >
            <Menu isLazy>

              <MenuButton
                p='3'
                as={IconButton}
                aria-label='Pages'
                icon={<HamburgerIcon />}
                variant={'outline'}
              />

              <MenuList>
                <MenuItem>
                  <LinkItem href='/' options={{ css: { padding: 0, width: '100%' } }} >Home</LinkItem>
                </MenuItem>
                <MenuItem>
                  <LinkItem href='/projects' options={{ css: { padding: 0, width: '100%' } }} >Projects</LinkItem>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )

}