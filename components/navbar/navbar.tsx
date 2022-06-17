import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  Text,
  Link as CLink,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdShoppingBag } from 'react-icons/md';
import Link from 'next/link';

const Links = [
    {
      name:"Inicio",
      path:"/",
    },
    {
      name:"Preparación",
      path:"preparacion",
    },
    {
      name:"Contactenos",
      path:"Contacto",
    },
  ];

const TiendaLink = [
  {
    name:"Tienda",
    path:"/tienda"
  }
];

const NavLink = ({ children, path }: { children: ReactNode, path: string }) => (
  <Link href={path}>
    <CLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('red.100', 'red.300'),
      }}
    >
      {children}
    </CLink>
  </Link>
);

const StoreLink = ({ children, path }: { children: ReactNode, path: string }) => (
  <Link href={path}>
    <CLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      {children}
    </CLink>
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('pink.50', 'pink.200')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            variant={'outline'}
            colorScheme={'out.main'}
            color={'out.main'}
            _hover={{ bg: 'out.100' }}
            _active={{ bg: 'out.100', transform: 'scale(0.5) rotate(360grad)'}}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading as='h1' fontFamily={'logo'}>
              E&apos;Valencia
            </Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            > 
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
                ))
              }
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              bg={'red.300'}
              textColor={'pink.50'}
              size={'sm'}
              mr={4}
              leftIcon={<Icon as={MdShoppingBag} />}
              fontSize={'large'}
              shadow={'2xl'}
              _hover={{
                bg: 'red.400'
              }}
            >
              {TiendaLink.map(({ name, path }) => (
                <StoreLink key={path} path={path}>{name}</StoreLink>
                ))
              }
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>{name}</NavLink>
                ))
              }
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}