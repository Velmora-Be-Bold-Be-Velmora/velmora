'use client';
import { useQuery } from '@apollo/client/react';
import { GET_PRODUCT_LIST } from '@/graphql/queries/get-product-list';
import { Card, Text } from '@mantine/core';
import OfferSection from '../components/store/home/OfferSection';
import BanerSection from '../components/store/home/BanerSection';
import RisingStarsSection from '../components/store/home/RisingStarsSection';
import ShopByCategorySection from '../components/store/home/ShopByCategorySection';

type Product = {
  id: string;
  name?: string;
  slug?: string;
  description?: string;
  short_description?: string;
  price?: number;
  discount_price?: number;
  cost_price?: number;
  currency?: string;
  sku?: string;
  stock_quantity?: number;
  is_in_stock?: boolean;
  low_stock_threshold?: number;
  category_id?: string | number | null;
  brand?: string;
  main_image?: string;
  gallery_images?: string;
  gender?: string;
  material?: string;
  is_active?: boolean;
  is_featured?: boolean;
  is_new?: boolean;
  is_trending?: boolean;
  rating_avg?: number;
  rating_count?: number;
  meta_title?: string;
  meta_description?: string;
  created_at?: string;
  updated_at?: string;
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
      <OfferSection />
      <BanerSection/>
      <RisingStarsSection />
      <ShopByCategorySection/>
      {data?.products?.map((item: any) => (
        <Card key={item.id} shadow="sm" p="lg" mb="sm">
          <Text fw={600}>{item.name}</Text>
          <Text>₹ {item.price}</Text>
        </Card>
      ))}
    </>
  );
}