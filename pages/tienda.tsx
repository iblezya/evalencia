import React from 'react';
import { GetStaticProps } from 'next';


import StoreComponentIndex from '../components/store';
import { Product } from '../components/store/product/types';
import api from '../components/store/product/api';

interface Props {
  products: Product[];
};

const Tienda: React.FC<Props> = ({products}) => {
  return <StoreComponentIndex products={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default Tienda;