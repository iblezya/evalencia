import Head from 'next/head';
import FeaturesCompIndex from '../components/features';
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
      <FeaturesCompIndex></FeaturesCompIndex>
    </main>
  </>
  )
};

export default Home
