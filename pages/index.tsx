import Head from 'next/head';

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import HomeCompIndex from '../components/home';
import Navbar from '../components/navbar/navbar';

const Home = () => {
  return(
  <>
    <Head>
      <title>E&apos;Valencia</title>
      <meta name="E'Valencia" content="E'Valencia Pasteleria"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    
    <main>
      <Navbar></Navbar>
      <HomeCompIndex></HomeCompIndex>
    </main>
  </>
  )
};

export default Home
