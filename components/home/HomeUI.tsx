import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Image as CImg,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import Image from 'next/image'



export default function Home() {

  const Logo = chakra(Image, {
    shouldForwardProp:(prop) => [
      "width", "height", "src", "alt", "quality", "placeholder", "blurDataURL"
    ].includes(prop)
  })


  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.5}
            fontWeight={600}
            >
            <Text
              as={'span'}
              position={'relative'}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.100',
                zIndex: -1,
              }}>
              Pasteles y dulces,
            </Text>
            <br />
            <Text fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }} as={'span'} color={'red.400'}>
              hechos con amor
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic soluta non veniam harum vel vero quibusdam tenetur, provident placeat deserunt.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              >
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>          
          <Box
            position={'relative'}
            height={'auto'}
            width={'full'}
            overflow={'hidden'}>
            <Logo
              alt={'Hero Image'}
              width="600"
              height="600"
              src='/images/logoFinal.png'
              placeholder='blur'
              quality='100'
              blurDataURL='/images/logoFinal.png'
            />
            {/* <Image
              src="/public/images/logoFinal.png"
              alt="Picture of the author"
            /> */}
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}