'use client';

import { useQuery } from '@apollo/client/react';
import { GET_PRODUCT_LIST } from '@/graphql/queries/get-product-list';
import { Card, Text } from '@mantine/core';

type Product = {
  id: string;
  name: string;
  price: number;
  is_deleted?: boolean;
};

type ProductsResponse = {
  products: Product[];
};
export default function Home() {
  const { data, loading, error } = useQuery<ProductsResponse>(GET_PRODUCT_LIST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  return (
    <>
      {data?.products?.map((item: any) => (
        <Card key={item.id} shadow="sm" p="lg" mb="sm">
          <Text fw={600}>{item.name}</Text>
          <Text>₹ {item.price}</Text>
        </Card>
      ))}
    </>
  );
}