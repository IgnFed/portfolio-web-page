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
} from '@chakra-ui/react'
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
      backgroundColor={'#333333bb'}
      css={{ackdropFilter: 'blur(10px)'}}
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
          gap={'2rem'}
          justify='flex-end'
        >
          <ToggleThemeButton />
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
                <MenuItem>Home</MenuItem>
                <MenuItem>Projects</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )

}