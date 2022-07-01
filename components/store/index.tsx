import React from 'react';
import { Button, Grid, Stack, Text, Link, Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  HStack,
  Icon
} from '@chakra-ui/react';

import { Product } from './product/types';
import { parseCurrency } from '../../utils/parse';
import { ProductCard } from './product/card';
import { MdCake } from 'react-icons/md';
import { RiCloseCircleFill } from 'react-icons/ri';

interface Props {
  products: Product[];
};

interface CartItem extends Product {
  quantity: number;
}


const StoreComponentIndex : React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);
  const total = React.useMemo(
    () => parseCurrency(cart.reduce((total, product) => total + product.price * product.quantity, 0)), 
    [cart],
  );
  const text = React.useMemo( () => { 
    return cart
      .reduce((message, product) => message.concat(`
        * ${product.title} - ${parseCurrency(product.price * product.quantity)}\n`), ``
      )
      .concat(`\nTotal: ${total}`);
    }, [cart, total]
  );
  
  const handledRemoveCart = (index: number) => {
    setCart(cart => cart.filter((_, _index) => _index !== index))
  };

  const handledAddToCart = (product: Product) => {
    setCart(cart => {
      const isInCart = cart.some(item => item.id === product.id)

      if (isInCart) {
        return cart.map((item) => 
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return cart.concat({...product, quantity: 1});
    });
  };

  return (
    <>
      <Stack spacing={6}>
        {products.length ? (
          <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handledAddToCart}
              />
            ))}
          </Grid>
        ) : (
          <Text color="gray.500" fontSize="lg" margin="auto">
            No hay productos
          </Text>
        )}
        {Boolean(cart.length) && (
          <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
            <Button
              onClick={() => toggleCart(true)}
              colorScheme="whatsapp"
              width="fit-content"
            >
              Ver pedido ({cart.length} productos)
            </Button>
          </Flex>
        )}
      </Stack>
      <Drawer
        isOpen={isCartOpen}
        size={'md'}
        placement='right'
        onClose={() => toggleCart(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <List spacing={'3'}>
              {cart.map((product, index) =>
                <ListItem key={product.id}>
                  <HStack justifyContent={'space-between'}>
                    <Text fontWeight={'500'}>
                      {product.title} ({product.quantity} <Icon as={MdCake}/>)
                    </Text>
                    <HStack>
                      <Text color={'green.500'}>{parseCurrency(product.price * product.quantity)}</Text>
                      <Icon cursor={'pointer'} as={RiCloseCircleFill} boxSize={5} color={'red.500'} onClick={() => handledRemoveCart(index)}/>
                    </HStack>
                  </HStack>
                </ListItem>
              )}
            </List>
            <Flex justifyContent={'center'} alignContent={'center'}>
              <Text padding={'4'} >
                ({cart.length} productos)
              </Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            
            <Button
              isExternal
              as={Link}
              colorScheme="whatsapp"
              href={`https://wa.me/51959733651?text=${encodeURIComponent(text)}`}
              width="100%"
              size={'lg'}
            >
              Completar pedido {total}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StoreComponentIndex;
