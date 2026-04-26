'use client';
import { useQuery } from '@apollo/client/react';
import { GET_PRODUCT_LIST } from '@/graphql/queries/get-product-list';
import { Container, Text } from '@mantine/core';
import OfferSection from '../components/store/home/OfferSection';
import BanerSection from '../components/store/home/BanerSection';
import RisingStarsSection from '../components/store/home/RisingStarsSection';
import ShopByCategorySection from '../components/store/home/ShopByCategorySection';
import NotificationMenu from '../components/store/components/NotificationMenu';
import ProductCard from '../components/store/ProductCard';

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
      <BanerSection />
      <RisingStarsSection />
      <ShopByCategorySection />

      <Container size="xl" py="xl">
        <Text size="xl" fw={700} style={{ marginBottom: '1rem' }}>
          Featured Products
        </Text>
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {data?.products?.map((item: any) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </Container>

      <NotificationMenu />
    </>
  );
}