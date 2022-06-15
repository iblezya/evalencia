import React from 'react';
import { GetStaticProps } from 'next';
import { Button, Image, Grid, Stack, Text, Link, Flex } from '@chakra-ui/react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import api from '../product/api';
import { Product } from '../product/types';

interface Props {
  products: Product[];
};

let parseCurrency = (value: number): string => {
  return value.toLocaleString("es-PE", {
    style:"currency",
    currency:"PER",
  }).replace("PER","S/.");
};

const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const text = React.useMemo(
    () => { 
      return cart
	.reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), ``)
	.concat(`\nTotal: S/. ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`);
    }, [cart]
  );

  return (
    <AnimateSharedLayout>
      <Stack>
	<Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
      {products.map(product => 
	  <Stack borderRadius={"md"} padding="4" key={product.id} backgroundColor="primary">
	   <Image
	      alt={product.title}
	      as={motion.img}
	      cursor="pointer"
	      layoutId={product.image}
	      maxHeight={256} 
	      objectFit="cover" 
	      src={product.image}
	    />
	    <Stack spacing={1}>
	      <Text>{product.title}</Text>
	      <Text>{parseCurrency(product.price)}</Text>
	    </Stack>
	    <Button colorScheme={"blue"} onClick={() => setCart(cart => cart.concat(product))}>Agregar</Button>
	  </Stack>)}
	</Grid>
	{Boolean(cart.length) && (
	<Flex 
	  alignItems={"center"} 
	  bottom="4" 
	  justifyContent={'center'} 
	  position={'sticky'}
	>
	  <Button 
	    isExternal
	    as={Link} 
	    colorScheme="whatsapp" 
	    href={`https://wa.me/51959733651?text=${encodeURIComponent(text)}`}
	    width={'fit-content'}
	  >
	    Completar pedido ({cart.length} product)
	  </Button>
	</Flex>
	)}
      </Stack>
    </AnimateSharedLayout>
  );
};

export const getStaticProps: GetStaticProps = async() => {
  const products = await api.list();
  return {
    props: {
      products,
    },
    revalidate: 10
  };
};

export default IndexRoute;
