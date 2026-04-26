'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { Center, Loader, Text } from "@mantine/core";
import ProductCard from "@/app/components/store/ProductCard";
import styles from "./ProductPage.module.css";

type Product = {
  id: string | number;
  name?: string;
  brand?: string;
  price?: number;
  discount_price?: number;
  currency?: string;
  sku?: string;
  stock_quantity?: number;
  is_in_stock?: boolean;
  short_description?: string;
  main_image?: string;
  is_featured?: boolean;
  is_new?: boolean;
  rating_avg?: number;
  rating_count?: number;
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("/api/v1/store/products", { signal: controller.signal })
      .then((response) => {
        setProducts(response.data?.data?.products ?? []);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(err.message || "Failed to load products");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <Center py="xl">
        <Loader />
      </Center>
    );
  }

  if (error) {
    return (
      <main className={styles.page}>
        <Text className={styles.message} color="red">
          {error}
        </Text>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <Text component="h1" className={styles.title}>
          Products
        </Text>
        <Text className={styles.subtitle}>
          Browse our catalogue of products with real-time stock, discounts, and ratings.
        </Text>
      </div>

      {products.length === 0 ? (
        <Text className={styles.message}>No products found.</Text>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
